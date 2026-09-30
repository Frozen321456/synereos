import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { QuestionSection } from "@/components/sections/QuestionSection";
import { HeximFlagship } from "@/components/hexim/HeximFlagship";
import { HeximCore } from "@/components/hexim/HeximCore";
import { HeximArchitecture } from "@/components/hexim/HeximArchitecture";
import { UnifiedModel } from "@/components/hexim/UnifiedModel";
import { HeximInfinity } from "@/components/hexim/HeximInfinity";
import { ResearchSection } from "@/components/research/ResearchSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <QuestionSection />
        <HeximFlagship />
        <HeximCore />
        <HeximArchitecture />
        <UnifiedModel />
        <HeximInfinity />
        <ResearchSection />
      </main>
      <Footer />
    </>
  );
}