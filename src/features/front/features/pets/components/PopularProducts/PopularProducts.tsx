import { Button } from "@/components/ui/button";
import Pets from "./AllPets";
import { SearchBarSection } from "./SearchBarSection";

export function PopularProducts() {
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

        <Pets />
      </div>
    </section>
  );
}
