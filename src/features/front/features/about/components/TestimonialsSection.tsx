import { Heart } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <p className="text-blue-500 text-sm mb-2">
            What Our Clients Say About Us
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Read Testimonials
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-blue-500 mb-4">"</div>
          <p className="text-lg text-gray-600 mb-8 italic">
            And typed a amazingly lastly far goat oh built unfittingly...
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
              alt="Customer"
              className="w-15 h-15 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Tina Cambell</h4>
              <p className="text-sm text-gray-600">Pet Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
