import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function CallToAction() {
  return (
    <section className="mx-auto  py-16 px-6 text-center">
      <div className="container mx-auto">
        <div className=" bg-white w-2/3  mx-auto shadow  rounded-md">
          <div className="py-6 px-3 space-y-5">
            <p className="text-gray-600 text-lg leading-8">
              Thousands of adorable pets are waiting for their forever homes.
              Take the first step — your new best friend could be just a click
              away! Every adoption brings hope and happiness, not only to the
              animal but to your heart as well. Our team is here to guide you
              through every step — from choosing the right companion to
              understanding care needs, training support, and post-adoption
              follow-ups. We believe every pet deserves a loving family, and
              every person deserves the joy of a loyal friend.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to={"/contact"}>
                <Button
                  size="lg"
                  variant="default"
                  className="hover:cursor-pointer"
                >
                  Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
