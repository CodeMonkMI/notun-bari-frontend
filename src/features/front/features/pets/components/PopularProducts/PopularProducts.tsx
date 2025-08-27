import { useState } from "react";
import Pets from "./AllPets";
import Categories from "./Categories";
import { SearchBarSection } from "./SearchBarSection";

export function PopularProducts() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">ALL Pets</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-between items-center mb-4">
          <SearchBarSection search={search} setSearch={setSearch} />
          <div className="flex justify-center gap-8">
            <Categories category={category} setCategory={setCategory} />
          </div>
        </div>

        <Pets search={search} category={category} />
      </div>
    </section>
  );
}
