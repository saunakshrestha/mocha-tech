import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/Services";
import { AboutFounderSection } from "@/components/sections/AboutFounder";
import { ProcessSection } from "@/components/sections/Process";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { SectorsSection } from "@/components/sections/Sectors";
import { WhyUsSection } from "@/components/sections/WhyUs";
import { FAQsSection } from "@/components/sections/FAQs";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <AboutFounderSection />
        <ProcessSection />
        <PortfolioSection />
        <SectorsSection />
        <WhyUsSection />
        <FAQsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
