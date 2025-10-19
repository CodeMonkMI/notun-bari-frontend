import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function CallToAction() {
  return (
    <section className="mx-auto  py-16 px-6 text-center">
      <div className="container mx-auto">
        <div className=" bg-gray-50 py-12 rounded-md">
          <div className="space-y-2">
            <h3 className="text-3xl mb-4 font-bold text-gray-800">
              Give a Pet a Loving Home Today
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Thousands of adorable pets are waiting for their forever homes.
              Take the first step — your new best friend could be just a click
              away!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg">
                <Heart className="mr-2 h-4 w-4" /> Adopt Now
              </Button>
              <Button size="lg" variant="outline">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
