import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { PinnedStorySection } from "@/components/sections/PinnedStorySection";
import { ShowcaseCarousel } from "@/components/sections/HorizontalCarousel";
import { ResearchGrid } from "@/components/sections/ResearchGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <PinnedStorySection />
        <ShowcaseCarousel />
        <ResearchGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
