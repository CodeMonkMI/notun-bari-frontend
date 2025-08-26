import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Thomas Nick",
      role: "Pet Sitter",
      image: "veterinarian man with stethoscope",
    },
    {
      name: "Lucy Anderson",
      role: "Pet Groomer",
      image: "woman veterinarian with cat",
    },
    {
      name: "Daniel Jacob",
      role: "Pet Sitter",
      image: "woman veterinarian with small dog",
    },
    {
      name: "James Harry",
      role: "Pet Sitter",
      image: "man veterinarian with golden retriever",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <p className="text-blue-500 text-sm mb-2">
            Meet Our Really Care About Your Pets
          </p>
          <h2 className="text-3xl font-bold text-gray-800">Our Team Members</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <Card key={i} className="text-center overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`/abstract-geometric-shapes.png?height=250&width=250&query=${member.image}`}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    {["f", "t", "in"].map((social, j) => (
                      <div
                        key={j}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                      >
                        <span className="text-xs">{social}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
