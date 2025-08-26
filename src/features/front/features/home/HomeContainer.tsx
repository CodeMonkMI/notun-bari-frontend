import { ContactBar } from "./components/ContactBar";
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
      <ContactBar />
    </div>
  );
}
