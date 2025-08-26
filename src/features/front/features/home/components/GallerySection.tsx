import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function GallerySection() {
  const photos = [
    {
      title: "Bath & Brush",
      description:
        "Wild Things Pet Services is a professional, bonded and insured, dog walking and pet sitting service offering a variety",
      image: "dog getting bath and grooming",
    },
    {
      title: "Hair Styling",
      description:
        "Wild Things Pet Services is a professional, bonded and insured, dog walking and pet sitting service offering a variety",
      image: "dog hair styling and grooming",
    },
    {
      title: "Coat Handler",
      description:
        "Wild Things Pet Services is a professional, bonded and insured, dog walking and pet sitting service offering a variety",
      image: "small dog in orange towel after grooming",
    },
    {
      title: "Trim & Groom",
      description:
        "Wild Things Pet Services is a professional, bonded and insured, dog walking and pet sitting service offering a variety",
      image: "yorkshire terrier getting groomed",
    },
    {
      title: "Cleaning & Plucking",
      description:
        "Wild Things Pet Services is a professional, bonded and insured, dog walking and pet sitting service offering a variety",
      image: "dog on leash getting cleaned",
    },
    {
      title: "Pet Grooming",
      description:
        "Wild Things Pet Services is a professional, bonded and insured, dog walking and pet sitting service offering a variety",
      image: "professional pet grooming session",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <p className="text-blue-500 text-sm mb-2">
              What We Really Care Welcome Your Pets
            </p>
            <h1 className="text-3xl font-bold text-gray-800">
              More Service Offers
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white pt-0"
              >
                <CardContent className="p-0">
                  <img
                    src={`https://images.pexels.com/photos/544502/pexels-photo-544502.jpeg`}
                    alt={photo.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {photo.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
