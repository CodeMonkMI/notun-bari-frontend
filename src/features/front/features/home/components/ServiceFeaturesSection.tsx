import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Shield, Truck } from "lucide-react";

export function ServiceFeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-orange-500 text-white p-8">
            <CardContent className="flex items-center gap-4 p-0">
              <Truck className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg capitalize">we heal pets</h3>
                <p className="text-sm opacity-90">quick veterinary services</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500 text-white p-8">
            <CardContent className="flex items-center gap-4 p-0">
              <Shield className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg capitalize">
                  We care for pets
                </h3>
                <p className="text-sm opacity-90">pet sheltering & adoption</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-600 text-white p-8">
            <CardContent className="flex items-center gap-4 p-0">
              <Headphones className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg capitalize">we love pets</h3>
                <p className="text-sm opacity-90">Show love & donate us</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
