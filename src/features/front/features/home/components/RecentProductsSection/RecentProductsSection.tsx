import Pets from "./AllPets";

export function RecentProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Recent Adoptable Pets
          </h2>
        </div>

        <Pets />
      </div>
    </section>
  );
}
