import { HeroBanner } from "./components/HeroBanner";
import { PopularProducts } from "./components/PopularProducts";

export function PetsContainer() {
  return (
    <div className="min-h-screen">
      <HeroBanner />

      <PopularProducts />
    </div>
  );
}
