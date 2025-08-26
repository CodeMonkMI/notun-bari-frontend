import { Card, CardContent } from "@/components/ui/card";

export function GallerySection() {
  const photos: string[] = [
    "https://images.pexels.com/photos/33524545/pexels-photo-33524545.jpeg",
    "https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg",
    "https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg",
    "https://images.pexels.com/photos/3054570/pexels-photo-3054570.jpeg",
    "https://images.pexels.com/photos/159557/leisure-wildlife-photography-pet-photography-dog-159557.jpeg",
    "https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg",
    "https://images.pexels.com/photos/1634838/pexels-photo-1634838.jpeg",
    "https://images.pexels.com/photos/2043021/pexels-photo-2043021.jpeg",
    "https://images.pexels.com/photos/29473516/pexels-photo-29473516.jpeg",
    "https://images.pexels.com/photos/3318215/pexels-photo-3318215.jpeg",
    "https://images.pexels.com/photos/9783906/pexels-photo-9783906.jpeg",
    "https://images.pexels.com/photos/4064423/pexels-photo-4064423.jpeg",
  ];

  return (
    <div className="min-h-screen">
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm mb-2">
              Some memory we share each other
            </p>
            <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white p-0"
              >
                <CardContent className="p-0">
                  <img
                    src={photo}
                    alt={photo}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
