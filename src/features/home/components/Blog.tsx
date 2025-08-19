const Blog = () => {
  const posts = [
    {
      title: "What are the most nutritious cat foods?",
      date: "12 May",
      img: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
    },
    {
      title: "How to train a dog not to jump on you",
      date: "28 June",
      img: "https://images.pexels.com/photos/32528468/pexels-photo-32528468.jpeg",
    },
    {
      title: "How do you get rid of cat allergies?",
      date: "02 Aug",
      img: "https://images.pexels.com/photos/29253401/pexels-photo-29253401.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Latest Blog Posts</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500">{p.date}</p>
                <h4 className="font-bold text-lg mt-2">{p.title}</h4>
                <button className="mt-4 text-secondary font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
