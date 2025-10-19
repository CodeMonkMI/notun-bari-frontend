import { CallToAction } from "@/features/callToAction/CallToAction";
import { PetAdoptionFAQ } from "@/features/faqs/fags";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { RecentProductsSection } from "./components/RecentProductsSection";
import { ServiceFeaturesSection } from "./components/ServiceFeaturesSection";

export function HomeContainer() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecentProductsSection />
      <GallerySection />
      <ServiceFeaturesSection />
      <PetAdoptionFAQ />
      <CallToAction />
    </div>
  );
}
