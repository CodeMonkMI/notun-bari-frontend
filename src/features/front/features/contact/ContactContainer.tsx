import { ContactForm } from "./ContactForm";

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
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                  <p className="text-gray-600">
                    Kushumpur, Moheshpur, Jheniadah
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone:</h3>
                  <p className="text-gray-600">+8801963636430</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email:</h3>
                  <p className="text-gray-600">mmislam027@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
