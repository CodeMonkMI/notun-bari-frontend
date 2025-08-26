import { Award, Heart, Star, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    { number: "748", label: "Pet Adoptions", icon: Heart },
    { number: "3560", label: "Happy Clients", icon: Users },
    { number: "5674", label: "Vet Consultations", icon: Award },
    { number: "6789", label: "Treatments", icon: Star },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We Offer The Best</h2>
          <h3 className="text-2xl">Pet Care Solutions</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-blue-50 to-green-50 px-3 py-5 rounded-lg"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
