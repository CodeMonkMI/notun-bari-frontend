import { HeroBanner } from "./components/HeroBanner";
import { PopularProducts } from "./components/PopularProducts";

export function PetsContainer() {
  const products = [
    { name: "FOOD", price: "Rs 45", image: "pet food supplements package" },
    { name: "TOWEL", price: "Rs 18", image: "orange pet towel" },
    {
      name: "BEANIE",
      price: "Rs 20",
      originalPrice: "Rs 18",
      image: "pet food can",
    },
    { name: "PETS LOTION", price: "Rs 90", image: "pet lotion bottle" },
    {
      name: "PETS TOYS",
      price: "Rs 45",
      originalPrice: "Rs 35",
      image: "pet rope toys",
    },
    { name: "DIGESTIVE CARE", price: "Rs 45", image: "pet digestive care can" },
    { name: "TRIMMER", price: "Rs 25", image: "pet grooming trimmer" },
    { name: "JOINT CARE", price: "Rs 20", image: "pet joint care supplements" },
  ];

  return (
    <div className="min-h-screen">
      <HeroBanner />

      <PopularProducts products={products} />
    </div>
  );
}
