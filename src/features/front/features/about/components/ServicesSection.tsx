import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    { title: "We Heal Pets", desc: "Quick Veterinary Services", icon: Heart },
    { title: "We Care Pets", desc: "Pet Sheltering & Adoption", icon: Shield },
    { title: "We Love Pets", desc: "Show Love & Donate Us", icon: Award },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card
              key={i}
              className="text-center p-8 border-2 hover:border-blue-500 transition-colors bg-white"
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
