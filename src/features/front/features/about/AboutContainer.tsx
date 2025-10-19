import { CallToAction } from "./components/CallToAction";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "./components/StatsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export function AboutContainer() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
