const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          We are passionate about pets and committed to offering top-quality
          services. From grooming to adoption, we make sure your furry friend is
          happy and cared for.
        </p>

        {/* Testimonials */}
        <div className="mt-12 bg-gray-50 rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            alt="Client"
            className="w-40 h-40 rounded-lg object-cover"
          />
          <div>
            <p className="italic text-gray-700">
              “Amazing services! They took such good care of my cats. Highly
              recommended.”
            </p>
            <h4 className="mt-3 font-semibold">Luciana Smith</h4>
            <p className="text-sm text-gray-500">Teacher</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
