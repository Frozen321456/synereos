import {
  Hero,
  QuestionSection,
  ResearchSignals,
  HeximIntro,
  HeximCore,
  HeximArchitecture,
  UnifiedModel,
  HeximInfinity,
  FourGates,
  Timeline,
  Applications,
  Philosophy,
  Footer,
} from '@/components/sections';
import { SmoothScroll, Navbar } from '@/components/ui/PageShell';

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main id="main">
        <Hero />
        <QuestionSection />
        <ResearchSignals />
        <HeximIntro />
        <HeximCore />
        <HeximArchitecture />
        <UnifiedModel />
        <HeximInfinity />
        <FourGates />
        <Timeline />
        <Applications />
        <Philosophy />
      </main>
      <Footer />
    </SmoothScroll>
  );
}