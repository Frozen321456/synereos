'use client';

import * as THREE from 'three';
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { homeContent } from '@/content/home';
import { designTokens } from '@/content/design';

const { colors } = designTokens;

interface HeximArchitectureCanvasProps {
  selectedLayer: number;
  onLayerHover: (layer: number | null) => void;
}

const LAYER_COLORS = [
  '#0284C7', // Perception - cyan
  '#06B6D4', // Representation - cyan-light
  '#4338CA', // Memory - indigo
  '#6366F1', // Skills - indigo-light
  '#0284C7', // Planning - cyan
  '#4338CA', // Action - indigo
];

function ArchitectureDiagram({ selectedLayer, onLayerHover }: HeximArchitectureCanvasProps) {
  const groupRef = useRef<THREE.Group>(null);
  const layerMeshesRef = useRef<THREE.Mesh[]>([]);
  const lineRef = useRef<THREE.Line[]>([]);
  const hoverLayerRef = useRef<number | null>(null);

  const layersData = useMemo(() => homeContent.heximArchitecture.layers, []);

  const layerPositions = useMemo(() => {
    return layersData.map((_, i) => new THREE.Vector3(0, (2.5 - i) * 1.2, 0));
  }, [layersData]);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    
    // Pulse selected layer
    layerMeshesRef.current.forEach((mesh, i) => {
      const isSelected = i === selectedLayer - 1;
      const isHovered = i === hoverLayerRef.current;
      
      if (isSelected || isHovered) {
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 3) * 0.05;
        mesh.scale.setScalar(scale);
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0.4;
      } else {
        mesh.scale.setScalar(1);
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0.15;
      }
    });

    // Animate lines
    lineRef.current.forEach((line, i) => {
      const positions = line.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      for (let j = 0; j < positions.length; j += 3) {
        positions[j + 1] += Math.sin(time * 2 + j * 0.5) * 0.001;
      }
      line.geometry.attributes.position.needsUpdate = true;
    });
  });

  const handlePointerMove = (event: React.PointerEvent) => {
    // Raycasting for hover would go here
    // Simplified for now
  };

  return (
    <group ref={groupRef} onPointerMove={handlePointerMove}>
      {/* Connection lines between layers */}
      {layersData.slice(0, -1).map((_, i) => {
        const start = layerPositions[i];
        const end = layerPositions[i + 1];
        const points = [];
        const segments = 20;
        for (let j = 0; j <= segments; j++) {
          const t = j / segments;
          const x = Math.sin(t * Math.PI) * 0.3;
          const y = THREE.MathUtils.lerp(start.y, end.y, t);
          const z = Math.cos(t * Math.PI) * 0.3;
          points.push(new THREE.Vector3(x, y, z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color(LAYER_COLORS[i]),
          transparent: true,
          opacity: 0.3,
          linewidth: 2,
        });
        const line = new THREE.Line(geometry, material);
        lineRef.current[i] = line;
        return <primitive key={`line-${i}`} object={line} />;
      })}

      {/* Layer nodes */}
      {layersData.map((layer, i) => {
        const position = layerPositions[i];
        const color = LAYER_COLORS[i];
        
        // Main layer sphere
        const geometry = useMemo(() => new THREE.SphereGeometry(0.5, 32, 32), []);
        const material = useMemo(() => new THREE.MeshBasicMaterial({
          color: new THREE.Color(color),
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide,
        }), [color]);

        const mesh = useMemo(() => new THREE.Mesh(geometry, material), [geometry, material]);
        layerMeshesRef.current[i] = mesh;
        mesh.position.copy(position);

        return (
          <group key={`layer-${i}`}>
            <mesh
              ref={(ref) => { layerMeshesRef.current[i] = ref as THREE.Mesh; }}
              geometry={geometry}
              material={material}
              position={position}
              onPointerOver={() => {
                hoverLayerRef.current = i;
                onLayerHover(i + 1);
              }}
              onPointerOut={() => {
                hoverLayerRef.current = null;
                onLayerHover(null);
              }}
            />
            {/* Outer glow ring */}
            <mesh
              geometry={new THREE.RingGeometry(0.6, 0.7, 32)}
              material={new THREE.MeshBasicMaterial({
                color: new THREE.Color(color),
                transparent: true,
                opacity: selectedLayer === i + 1 ? 0.5 : 0.1,
                side: THREE.DoubleSide,
              })}
              position={position}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {/* Inner core */}
            <mesh
              geometry={new THREE.SphereGeometry(0.15, 16, 16)}
              material={new THREE.MeshBasicMaterial({
                color: new THREE.Color(color),
                transparent: true,
                opacity: 0.8,
              })}
              position={position}
            />
          </group>
        );
      })}

      {/* Floating particles around layers */}
      {Array.from({ length: 100 }).map((_, i) => {
        const layerIdx = i % layersData.length;
        const basePos = layerPositions[layerIdx];
        const angle = (i / 100) * Math.PI * 2;
        const radius = 0.8 + Math.random() * 0.5;
        return (
          <mesh
            key={`particle-${i}`}
            geometry={new THREE.SphereGeometry(0.02, 8, 8)}
            material={new THREE.MeshBasicMaterial({
              color: new THREE.Color(LAYER_COLORS[layerIdx]),
              transparent: true,
              opacity: 0.6,
            })}
            position={[
              basePos.x + Math.cos(angle) * radius,
              basePos.y + (Math.random() - 0.5) * 0.5,
              basePos.z + Math.sin(angle) * radius,
            ]}
          />
        );
      })}
    </group>
  );
}

export function HeximArchitectureCanvas({ selectedLayer, onLayerHover }: HeximArchitectureCanvasProps) {
  return (
    <Canvas
      camera={{ position: [4, 0, 4], fov: 35 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#FFFFFF']} />
      <ArchitectureDiagram selectedLayer={selectedLayer} onLayerHover={onLayerHover} />
    </Canvas>
  );
}

export function HeximArchitecture() {
  const { heximArchitecture } = homeContent;
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const activeLayer = selectedLayer || hoveredLayer;

  return (
    <section
      id="hexim-architecture"
      className="syn-section relative border-t border-black/[0.06]"
      aria-labelledby="hexim-architecture-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {heximArchitecture.badge}
        </p>
        <h2
          id="hexim-architecture-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          HEXIM Architecture
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-syn-text-secondary">
          {heximArchitecture.intro}
        </p>
        <div className="mt-20 lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Layer cards */}
          <div className="space-y-4">
            {heximArchitecture.layers.map((layer) => (
              <article
                key={layer.depth}
                className={`group relative p-6 rounded-xl border transition-all duration-500 ${
                  activeLayer === layer.depth
                    ? 'border-syn-cyan/40 bg-syn-cyan/[0.03]'
                    : 'border-black/[0.07] bg-syn-surface/60'
                } hover:border-syn-cyan/40 hover:bg-syn-surface`}
                onMouseEnter={() => setSelectedLayer(layer.depth)}
                onMouseLeave={() => setSelectedLayer(null)}
              >
                <div className="flex items-baseline gap-3">
                  <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                    L{layer.depth.toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-syn-text">
                    {layer.name}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-syn-text-secondary">
                  {layer.components.map((comp) => (
                    <li key={comp} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-syn-cyan/40" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* 3D Diagram */}
          <div className="relative h-[500px] w-full max-w-2xl mx-auto mt-16 lg:mt-0">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <HeximArchitectureCanvas
                selectedLayer={activeLayer || 0}
                onLayerHover={setHoveredLayer}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';