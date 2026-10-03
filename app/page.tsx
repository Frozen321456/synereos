import {
  Hero,
  QuestionSection,
  ResearchSignals,
  HeximIntro,
  HeximCore,
  HeximArchitecture,
  UnifiedModel,
  BeyondContext,
  EvidenceSection,
  HeximInfinity,
  FourGates,
  Timeline,
  Applications,
  Philosophy,
  Footer,
} from '@/components/sections';
import { SmoothScroll, Navbar } from '@/components/ui/PageShell';
import { ScrollProgressRail } from '@/components/ui/Scrolly';

const RAIL_LABELS = [
  'QUESTION',
  'SIGNALS',
  'HEXIM',
  'ARCHITECTURE',
  'INFINITY',
  'EVIDENCE',
  'TIMELINE',
];

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <ScrollProgressRail labels={RAIL_LABELS} />
      <main id="main">
        <Hero />
        <QuestionSection />
        <ResearchSignals />
        <HeximIntro />
        <HeximCore />
        <HeximArchitecture />
        <UnifiedModel />
        <BeyondContext />
        <EvidenceSection />
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
