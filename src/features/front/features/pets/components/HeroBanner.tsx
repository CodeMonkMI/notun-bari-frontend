import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const handleScroll = () => {
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Find Love. Give Home. Care for Pets.
            </h1>
            <h2 className="text-2xl text-gray-700 mb-4">
              Adopt, Shop & Support – All in One Place
            </h2>
            <p className="text-gray-600 mb-6">
              Discover your perfect companion and provide them with a loving
              home. From adoption services to healthy pet food, toys, and
              supplements – we’re here to keep tails wagging and hearts happy.
            </p>
            <Button
              className="bg-gray-800 hover:bg-gray-900 text-white cursor-pointer"
              onClick={handleScroll}
            >
              View Details
            </Button>
          </div>

          {/* Banner Image */}
          <div className="">
            <div className="h-[550px] w-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/11779514/pexels-photo-11779514.jpeg"
                alt="Pet Supplements"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
