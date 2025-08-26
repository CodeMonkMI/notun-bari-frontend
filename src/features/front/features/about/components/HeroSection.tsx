import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <p className="text-blue-500 text-sm mb-2">
            About Our Really Care About Your Pets
          </p>
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Petenica
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://zabrin.xyz/petenica/wp-content/uploads/2018/03/ndtan_net_free_shutterstock_658232629.jpg"
              alt="Veterinarian with pet"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              Proactively expedite magnetic and synergistically ...
            </p>
            <p className="text-gray-600 mb-8">
              As developed across the concise, one project ...
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Above all others magna aliqua ut enim veniam",
                "Quis nostrud exercitation ullamco laboris nisi aliquip",
                "Excepteur sint occaecat cupidatat officia",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
              VIEW OUR SERVICES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
