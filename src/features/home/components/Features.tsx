const Features = () => {
  const features = [
    { title: "Natural Products", icon: "🌱" },
    { title: "Vet Care", icon: "⚕️" },
    { title: "Training", icon: "🐾" },
    { title: "Housing", icon: "🏠" },
    { title: "Adoption", icon: "❤️" },
    { title: "Quality Care", icon: "⭐" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Our Features</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h4 className="font-bold">{f.title}</h4>
              <p className="text-gray-600 mt-2">
                We provide the best in {f.title.toLowerCase()} for your pets.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
