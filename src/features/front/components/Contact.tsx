const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email address*"
              className="w-full border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded"
            />
            <textarea
              placeholder="Message*"
              className="w-full border p-3 rounded h-32"
            ></textarea>
            <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-pink-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-4 text-gray-600">Pet Street 123, New York</p>
          <p className="text-gray-600">Email: email@yoursite.com</p>
          <p className="text-gray-600">Phone: (123) 456-789</p>
          <div className="mt-6 w-full h-64 bg-gray-200 rounded-lg">
            [Map Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
