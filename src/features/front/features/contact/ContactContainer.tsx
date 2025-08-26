import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactContainer() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-green-50">
      {/* Contact Form Section */}
      <section className="py-16 shadow-lg bg-white rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-600 mb-8 italic">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <Input placeholder="Your email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject*
                  </label>
                  <Input placeholder="Subject" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message*
                  </label>
                  <Textarea placeholder="Your message" className="min-h-32" />
                </div>

                <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-8 py-3 font-semibold">
                  SUBMIT NOW
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                  <p className="text-gray-600">
                    52A, Tallstoi Town 5238
                    <br />
                    La city, IA 83756
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone:</h3>
                  <p className="text-gray-600">0000 000 0000</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email:</h3>
                  <p className="text-gray-600">info@petinica.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
