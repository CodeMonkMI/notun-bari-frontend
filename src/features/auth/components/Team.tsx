const Team = () => {
  const members = [
    {
      name: "Jillian Smith",
      role: "Vet Assistant",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      name: "Laura Smith",
      role: "Veterinarian",
      img: "https://images.pexels.com/photos/1491026/pexels-photo-1491026.png",
    },
    {
      name: "John Doe",
      role: "Pet Trainer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Meet Our Professionals</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h4 className="mt-4 font-bold">{m.name}</h4>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
