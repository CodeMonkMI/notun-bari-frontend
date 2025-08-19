const Gallery = () => {
  const images = [
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
    "https://images.pexels.com/photos/32528468/pexels-photo-32528468.jpeg",
    "https://images.pexels.com/photos/29253401/pexels-photo-29253401.jpeg",
    "https://images.pexels.com/photos/12789946/pexels-photo-12789946.jpeg",
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div className="h-72 overflow-hidden rounded-lg shadow-md">
              <img
                key={i}
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
