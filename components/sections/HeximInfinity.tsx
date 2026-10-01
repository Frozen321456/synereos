'use client';

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { homeContent } from '@/content/home';
import { designTokens } from '@/content/design';

const { colors } = designTokens;

function InfinityCanvas() {
  const particlesRef = useRef<THREE.Points[]>([]);
  const progressRef = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);
    const sizes = new Float32Array(particleCount);

    // Figure-8 parametric: x = sin(t), y = sin(2t)/2, z = cos(t)/2
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 4; // Two loops
      const loop = i < particleCount / 2 ? 0 : 1;
      const localT = (i % (particleCount / 2)) / (particleCount / 2) * Math.PI * 2;

      const x = Math.sin(localT);
      const y = Math.sin(localT * 2) * 0.5;
      const z = Math.cos(localT) * 0.5;

      // Offset for two loops
      const offsetX = loop === 0 ? -1.2 : 1.2;

      positions[i * 3] = x + offsetX + (Math.random() - 0.5) * 0.1;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.1;

      // Velocity along the curve
      const tx = Math.cos(localT);
      const ty = Math.cos(localT * 2);
      const tz = -Math.sin(localT);
      const len = Math.sqrt(tx * tx + ty * ty + tz * tz);
      velocities[i * 3] = (tx / len) * 0.008;
      velocities[i * 3 + 1] = (ty / len) * 0.008;
      velocities[i * 3 + 2] = (tz / len) * 0.008;

      phases[i] = loop;
      sizes[i] = 0.5 + Math.random() * 0.5;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute vec3 aVelocity;
        attribute float aPhase;
        attribute float aSize;
        uniform float uTime;
        varying float vPhase;
        varying float vAlpha;
        void main() {
          vPhase = aPhase;
          vec3 pos = position + aVelocity * uTime * 100.0;
          
          // Loop back when reaching end
          float loopLength = 6.28;
          if (vPhase < 0.5) {
            if (pos.x > 1.5) pos.x -= 3.0;
          } else {
            if (pos.x < -1.5) pos.x += 3.0;
          }
          
          vAlpha = aSize * 0.8;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = aSize * (30.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vPhase;
        varying float vAlpha;
        uniform vec3 uColorCyan;
        uniform vec3 uColorIndigo;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * vAlpha;
          vec3 color = mix(uColorCyan, uColorIndigo, vPhase);
          gl_FragColor = vec4(color, alpha * 0.5);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uColorCyan: { value: new THREE.Color(colors.cyanLight) },
        uColorIndigo: { value: new THREE.Color(colors.indigoLight) },
      },
    });
  }, []);

  useFrame((state) => {
    const material = particlesRef.current[0]?.material as THREE.ShaderMaterial;
    if (material) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <points
      ref={(ref) => { particlesRef.current[0] = ref as THREE.Points; }}
      geometry={geometry}
      material={material}
    />
  );
}

export function HeximInfinity() {
  const { heximInfinity } = homeContent;

  return (
    <section
      id="hexim-infinity"
      className="syn-section relative border-t border-black/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="infinity-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(99,102,241,0.06), transparent 60%)',
          }}
        />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-6 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {heximInfinity.badge}
        </p>
        <h1
          id="infinity-heading"
          className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-syn-text"
          aria-label="HEXIM Infinity"
        >
          HEXIM Infinity
        </h1>
        <p className="mono text-[11px] tracking-[0.2em] text-syn-cyan mb-8">
          {heximInfinity.subtitle}
        </p>
        <div className="mt-16 relative h-[500px] w-full max-w-4xl mx-auto">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Canvas
              camera={{ position: [0, 0, 6], fov: 35 }}
              style={{ width: '100%', height: '100%' }}
              gl={{ antialias: true, alpha: true }}
            >
              <color attach="background" args={['#FFFFFF']} />
              <InfinityCanvas />
            </Canvas>
          </div>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {heximInfinity.components.map((comp, i) => (
            <div key={i} className="infinity-flow-text group relative pl-12">
              <span className="absolute left-0 top-0 text-3xl text-syn-cyan/50 group-hover:text-syn-cyan transition-colors">
                {comp.icon}
              </span>
              <p className="mono text-[10px] tracking-[0.2em] text-syn-cyan mb-1">
                {comp.prefix}
              </p>
              <p className="text-sm text-syn-text-secondary">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-24 border-t border-black/[0.06] pt-16">
          <p className="mono mb-4 text-[11px] tracking-[0.35em] text-syn-text-muted">
            GOAL
          </p>
          <p className="max-w-3xl text-xl font-semibold text-syn-text leading-relaxed">
            {heximInfinity.goal}
          </p>
        </div>
        <div className="mt-20 relative h-px w-full bg-black/[0.06] overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-syn-cyan transform origin-left animate-shimmer" style={{ transform: 'scaleX(0)', transformOrigin: 'left' }} />
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-6">
          <button className="btn-ghost relative overflow-hidden" style={{ transform: 'translate(0px, 0px)', transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform' }}>
            <a href={heximInfinity.cta.href} className="block px-8 py-4">
              {heximInfinity.cta.label}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}