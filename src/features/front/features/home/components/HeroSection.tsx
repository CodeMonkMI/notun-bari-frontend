import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-6xl leading-normal font-bold text-gray-800 capitalize mb-4">
              Adopt Pet and make a partner for you.
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">Lowest Fees</h2>
            <p className="text-gray-600 mb-8">
              Find your perfect furry friend and give them a loving home
            </p>
            <Link to={"/pets"}>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
                View Pets
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="h-[65vh]">
              <img
                src="https://zabrin.xyz/petenica/wp-content/uploads/2018/03/ndtan_net_free_shutterstock_658232629.jpg"
                alt="L-Lysine Supplement"
                className=" w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
