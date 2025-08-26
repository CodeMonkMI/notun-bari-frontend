import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Vitamins & Supplements
            </h1>
            <h2 className="text-2xl text-gray-700 mb-4">Lowest Prices</h2>
            <p className="text-gray-600 mb-6">
              Fortified with Glucosamine, Chondroitin and MSM to help support
              the structural integrity of joints and connective tissues
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">
              View Details
            </Button>
          </div>

          {/* Banner Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs">SAVE UPTO</div>
                  <div className="text-lg font-bold">45%</div>
                </div>
              </div>
              <img
                src="https://zabrin.xyz/petenica/wp-content/uploads/2018/03/ndtan_net_free_shutterstock_658232629.jpg"
                alt="Pet Supplements"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
