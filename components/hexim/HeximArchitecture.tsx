"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { HEXIM } from "@/content/hexim";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────
   THREE: Architecture Diagram — Hierarchical nodes
   ────────────────────────────────────────────── */
function ArchitectureDiagram() {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const linesRef = useRef<THREE.Line[]>([]);
  const initialized = useRef(false);
  const { size } = useThree();

  // Architecture layers: name, children, color, level
  const layers = [
    { name: "HEXIM", children: ["Intelligence", "Memory", "Agency"], color: 0x38BDF8, level: 0, y: 3 },
    { name: "Intelligence", children: ["Attention", "MoE", "Ternary+VQ", "Memory Rep", "World Rep", "Goal Rep", "Prediction", "Reasoning", "Planning"], color: 0x6366f1, level: 1, y: 1.5 },
    { name: "Memory", children: ["Episodic", "Semantic", "Working", "Compressed"], color: 0x22c55e, level: 1, y: 1.5 },
    { name: "Agency", children: ["Action", "Policy", "Planning", "Goals"], color: 0xf59e0b, level: 1, y: 1.5 },
    { name: "World/Experience", children: ["Perception", "Prediction", "Surprise", "Question", "Experiment", "Learning", "Future Prediction"], color: 0xec4899, level: 2, y: 0 },
    { name: "Adaptation", children: ["Skill Evolution", "Memory Consolidation", "Model Update"], color: 0x8b5cf6, level: 2, y: -1.5 },
  ];

  useEffect(() => {
    if (initialized.current || !groupRef.current) return;
    const group = groupRef.current;

    // Create nodes
    const nodeGeom = new THREE.SphereGeometry(0.25, 16, 16);
    let yOffset = 3;
    let nodeIndex = 0;

    layers.forEach((layer) => {
      const count = layer.children.length + 1;
      const spread = Math.min(count * 1.2, 8);
      const startX = -spread / 2;

      // Parent node
      const parentMat = new THREE.MeshBasicMaterial({
        color: layer.color,
        transparent: true,
        opacity: 0.9,
      });
      const parentMesh = new THREE.Mesh(nodeGeom, parentMat);
      parentMesh.position.set(0, yOffset, 0);
      parentMesh.scale.setScalar(1.5);
      group.add(parentMesh);
      nodesRef.current.push(parentMesh);

      // Child nodes
      layer.children.forEach((child, i) => {
        const childMat = new THREE.MeshBasicMaterial({
          color: layer.color,
          transparent: true,
          opacity: 0.6,
        });
        const childMesh = new THREE.Mesh(nodeGeom, childMat);
        childMesh.position.set(startX + i * (spread / (count - 1 || 1)), layer.y, 0);
        group.add(childMesh);
        nodesRef.current.push(childMesh);

        // Line from parent to child
        const lineGeom = new THREE.BufferGeometry();
        const linePositions = new Float32Array([
          0, yOffset, 0,
          startX + i * (spread / (count - 1 || 1)), layer.y, 0,
        ]);
        lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        const lineMat = new THREE.LineBasicMaterial({
          color: layer.color,
          transparent: true,
          opacity: 0.3,
        });
        const line = new THREE.Line(lineGeom, lineMat);
        group.add(line);
        linesRef.current.push(line);
      });

      yOffset = layer.y - 1.5;
      nodeIndex++;
    });

    initialized.current = true;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;

    nodesRef.current.forEach((node, i) => {
      const mat = Array.isArray(node.material) ? node.material[0] : node.material;
      if (mat && 'opacity' in mat) {
        mat.opacity = 0.6 + Math.sin(t * 1.5 + i) * 0.2;
      }
      node.scale.setScalar(1 + Math.sin(t * 0.8 + i) * 0.05);
    });

    linesRef.current.forEach((line, i) => {
      const mat = Array.isArray(line.material) ? line.material[0] : line.material;
      if (mat && 'opacity' in mat) {
        mat.opacity = 0.2 + Math.sin(t * 0.7 + i) * 0.1;
      }
    });
  });

  return <group ref={groupRef} />;
}

/* ──────────────────────────────────────────────
   HEXIM ARCHITECTURE SECTION
   ────────────────────────────────────────────── */
export function HeximArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Progressive reveal of architecture layers on scroll
        const layerTitles = section.querySelectorAll(".arch-layer-title");
        layerTitles.forEach((title, i) => {
          gsap.fromTo(
            title,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });
      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="syn-section relative border-t border-white/[0.06]"
      aria-labelledby="architecture-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          HEXIM ARCHITECTURE
        </p>

        <SplitHeading
          as="h2"
          id="architecture-heading"
          text={HEXIM.architecture.subtitle}
          mode="lines"
          stagger={0.1}
          duration={1.2}
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        />

        {/* Interactive 3D Architecture Diagram */}
        <div className="mt-16 relative h-[600px] w-full">
          <div ref={canvasRef} className="absolute inset-0" aria-hidden="true">
            <Canvas
              camera={{ position: [0, 2, 8], fov: 40 }}
              gl={{ antialias: true, alpha: true }}
              style={{ width: "100%", height: "100%" }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 10, 5]} intensity={0.8} />
              <ArchitectureDiagram />
            </Canvas>
          </div>
        </div>

        {/* Layer descriptions - progressive reveal on scroll */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {HEXIM.architecture.layers.map((layer, i) => (
            <article
              key={layer.name}
              className="arch-layer-title group relative p-8 rounded-xl border border-white/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-syn-surface-2 border border-white/[0.06]">
                  <span className="mono text-[10px] tracking-[0.2em] text-syn-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-syn-text">
                  {layer.name}
                </h3>
              </div>
              <p className="text-syn-text-secondary">
                {layer.role}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {'children' in layer && layer.children && layer.children.map((child: string) => (
                  <span
                    key={child}
                    className="mono rounded-full border border-white/[0.09] px-3 py-1 text-[10px] tracking-[0.15em] text-syn-text-muted transition-colors group-hover:border-syn-cyan/40 group-hover:text-syn-text-secondary"
                  >
                    {child}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}