import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TeamSection } from "@/components/sections/Team";
import { ProcessSection } from "@/components/sections/Process";
import { SectorsSection } from "@/components/sections/Sectors";
import { WhyUsSection } from "@/components/sections/WhyUs";
import { FAQsSection } from "@/components/sections/FAQs";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TeamSection />
        <ProcessSection />
        <SectorsSection />
        <WhyUsSection />
        <FAQsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
