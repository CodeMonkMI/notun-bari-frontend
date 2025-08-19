const Services = () => {
  const services = [
    {
      title: "Grooming",
      img: "https://images.pexels.com/photos/6131096/pexels-photo-6131096.jpeg",
    },
    {
      title: "Adoption",
      img: "https://images.pexels.com/photos/2698524/pexels-photo-2698524.jpeg",
    },
    {
      title: "Dog Walker",
      img: "https://images.pexels.com/photos/7210723/pexels-photo-7210723.jpeg",
    },
    {
      title: "Grooming",
      img: "https://images.pexels.com/photos/6131096/pexels-photo-6131096.jpeg",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-pink-700">
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
