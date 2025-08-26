import { Heart } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Get our latest news & update regularly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
