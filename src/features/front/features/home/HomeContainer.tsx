import { CallToAction } from "@/features/callToAction/CallToAction";
import { PetAdoptionFAQ } from "@/features/faqs/fags";
import { StatsSection } from "../about/components/StatsSection";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { RecentProductsSection } from "./components/RecentProductsSection";

export function HomeContainer() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecentProductsSection />
      <GallerySection />
      <StatsSection />
      <PetAdoptionFAQ />
      <CallToAction />
    </div>
  );
}
