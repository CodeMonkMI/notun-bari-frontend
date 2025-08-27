import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm mb-2">
            About Our Real Care for Pets
          </p>
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to NotunBari
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[600px] w-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8499242/pexels-photo-8499242.jpeg"
              alt="Veterinarian with pet"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              At Petenica, we truly care about your pets. <br /> Our mission is
              to provide a loving environment, quality care, and affordable
              adoption services for every furry friend.
            </p>

            <ul className="space-y-3 mb-8">
              <li></li>
              <li></li>
              <li></li>
              {[
                "Comprehensive veterinary check-ups for all pets",
                "Affordable adoption fees with full transparency",
                "Guidance and support for new pet parents",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="uppercase bg-blue-500 flex justify-center items-center hover:bg-blue-600 text-white ">
              <Link to={"/pets"} className="w-full h-full">
                VIEW Pets
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
