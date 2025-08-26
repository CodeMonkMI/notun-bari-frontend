import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Vitamins & Supplements
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">Lowest Prices</h2>
            <p className="text-gray-600 mb-8">
              Fortified with Glucosamine, Chondroitin and MSM to help support
              the structural integrity of joints and connective tissues
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
              View Details
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-purple-600 text-white px-4 py-2 text-lg font-bold rounded-full">
                SAVE UPTO 45%
              </Badge>
            </div>
            <div className="h-[65vh]">
              <img
                src="https://zabrin.xyz/petenica/wp-content/uploads/revslider/product-1.png"
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
