'use client';

import React from 'react';
import * as THREE from 'three';
import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { homeContent } from '@/content/home';
import { TextScrubReveal, MagneticButton } from '@/components/ui/Scrolly';
import { designTokens } from '@/content/design';

const { colors } = designTokens;

interface ParticleSystemProps {
  particleCount?: number;
}

function ParticleSystem({ particleCount = 2000 }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points | null>(null);
  const positionsRef = useRef<Float32Array | null>(null);
  const velocitiesRef = useRef<Float32Array | null>(null);
  const targetPositionsRef = useRef<Float32Array | null>(null);
  const progressRef = useRef(0);
  const phaseRef = useRef<'chaos' | 'transition' | 'order'>('chaos');

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Initial chaos: random sphere
      const radius = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Target order: structured layers
      const layer = Math.floor(i / (particleCount / 5));
      const layerRadius = 1.5 - layer * 0.25;
      const angle = (i % (particleCount / 5)) * (Math.PI * 2) / (particleCount / 5);
      const height = (layer - 2) * 0.6;

      targetPositions[i * 3] = layerRadius * Math.cos(angle);
      targetPositions[i * 3 + 1] = height + (Math.random() - 0.5) * 0.3;
      targetPositions[i * 3 + 2] = layerRadius * Math.sin(angle);

      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aTarget', new THREE.BufferAttribute(targetPositions, 3));
    geo.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(new Float32Array(particleCount).fill(0), 1));

    positionsRef.current = positions;
    targetPositionsRef.current = targetPositions;
    velocitiesRef.current = velocities;

    return geo;
  }, [particleCount]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute vec3 aTarget;
        attribute vec3 aVelocity;
        attribute float aPhase;
        uniform float uProgress;
        uniform float uTime;
        varying float vPhase;
        varying float vDist;
        void main() {
          vPhase = aPhase;
          vec3 pos = position;
          vec3 target = aTarget;
          float t = smoothstep(0.0, 1.0, uProgress);
          pos = mix(pos, target, t);
          // Add subtle floating motion in order phase
          if (t > 0.5) {
            pos.y += sin(uTime * 0.5 + position.x * 2.0) * 0.02;
            pos.x += cos(uTime * 0.3 + position.z * 2.0) * 0.01;
          }
          vDist = length(pos);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (20.0 / -mvPosition.z) * (1.0 - t * 0.3);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vPhase;
        varying float vDist;
        uniform vec3 uColorCyan;
        uniform vec3 uColorIndigo;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          vec3 color = mix(uColorCyan, uColorIndigo, vDist * 0.3);
          gl_FragColor = vec4(color, alpha * 0.6);
        }
      `,
      uniforms: {
        uProgress: { value: 0 },
        uTime: { value: 0 },
        uColorCyan: { value: new THREE.Color(colors.cyanLight) },
        uColorIndigo: { value: new THREE.Color(colors.indigoLight) },
      },
    });
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const mesh = pointsRef.current as THREE.Points;
    const material = mesh.material as THREE.ShaderMaterial;

    progressRef.current = Math.min(1, progressRef.current + delta * 0.15);
    material.uniforms.uProgress.value = progressRef.current;
    material.uniforms.uTime.value = state.clock.getElapsedTime();

    // Phase transition logic
    if (progressRef.current > 0.3 && phaseRef.current === 'chaos') {
      phaseRef.current = 'transition';
    }
    if (progressRef.current > 0.7 && phaseRef.current === 'transition') {
      phaseRef.current = 'order';
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}

function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
    >
      <color attach="background" args={['#FFFFFF']} />
      <fog attach="fog" args={['#FFFFFF', 3, 10]} />
      <ParticleSystem particleCount={2000} />
    </Canvas>
  );
}

export function Hero() {
  const { hero } = homeContent;

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: colors.gradientHero }}
        />
        <div className="absolute inset-0" style={{ opacity: 0.4 }}>
          <HeroCanvas />
        </div>
      </div>

      <div className="container-syn relative flex flex-1 flex-col justify-center py-20 lg:py-28">
        <p className="mono hero-fade text-[11px] tracking-[0.35em] text-syn-cyan animation-delay-100">
          {hero.badge}
        </p>
        <TextScrubReveal
          lines={hero.headline}
          className="hero-fade animation-delay-200"
          lineClassName="mt-8 max-w-5xl text-[clamp(2.75rem,7vw,7rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-syn-text"
        />
        <h1 id="hero-heading" className="sr-only">{hero.headline.join(' ')}</h1>
        <p className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-syn-text-secondary animation-delay-300">
          {hero.subtext}
        </p>
        <div className="hero-fade mt-10 flex flex-wrap items-center gap-6 animation-delay-400">
          <MagneticButton
            href={hero.cta.primary.href}
            className="!bg-syn-text !text-white !border-syn-text hover:!bg-syn-cyan hover:!border-syn-cyan !px-8 !py-4 !tracking-[0.25em]"
          >
            {hero.cta.primary.label}
          </MagneticButton>
          <a
            href={hero.cta.secondary.href}
            className="mono link-line text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors hover:text-syn-text"
          >
            {hero.cta.secondary.label}
          </a>
        </div>
        <div className="hero-fade mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-syn-text-muted animation-delay-500">
          {hero.status.items.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span aria-hidden="true">/</span>}
              <div className="flex items-center gap-2">
                {i === 0 && <span className="status-dot" aria-hidden="true" />}
                <span>{item.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden="true">
        <span className="mono text-[9px] tracking-[0.35em] text-syn-text-muted">SCROLL</span>
        <div className="h-14 w-px overflow-hidden bg-syn-text/10">
          <div className="hero-cue-bar h-full w-px bg-syn-cyan animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}