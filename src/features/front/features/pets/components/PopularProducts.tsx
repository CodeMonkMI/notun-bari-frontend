import { Button } from "@/components/ui/button";
import { PetCard } from "../../../components/PetCard";
import { SearchBarSection } from "./SearchBarSection";

type Product = {
  name: string;
  price: string;
  image: string;
};

export function PopularProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-between items-center mb-4">
          <SearchBarSection />
          <div className="flex justify-center gap-8">
            {["All", "Accessories", "Food", "Others"].map((tab, i) => (
              <Button
                key={i}
                variant="ghost"
                className={tab === "All" ? "text-orange-500" : "text-gray-600"}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <PetCard
              key={i}
              name={product.name}
              price={product.price}
              image="https://images.pexels.com/photos/544502/pexels-photo-544502.jpeg"
              category="Food"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
