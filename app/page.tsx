import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ResearchSignal } from "@/components/research/ResearchSignal";
import { Thesis } from "@/components/sections/Thesis";
import { HeximFeature } from "@/components/hexim/HeximFeature";
import { ArchitectureDiagram } from "@/components/hexim/ArchitectureDiagram";
import { ResearchStatusSection } from "@/components/research/ResearchStatus";
import { ResearchDomains } from "@/components/research/ResearchDomains";
import { ResearchLog } from "@/components/research/ResearchLog";
import { ArchitectureQuestion } from "@/components/sections/ArchitectureQuestion";
import { BeyondHexim } from "@/components/sections/BeyondHexim";
import { OpenResearch } from "@/components/sections/OpenResearch";
import { FinalStatement } from "@/components/sections/FinalStatement";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ResearchSignal />
        <Thesis />
        <HeximFeature />
        <ArchitectureDiagram />
        <ResearchStatusSection />
        <ResearchDomains />
        <ResearchLog />
        <ArchitectureQuestion />
        <BeyondHexim />
        <OpenResearch />
        <FinalStatement />
      </main>
      <Footer />
    </>
  );
}
