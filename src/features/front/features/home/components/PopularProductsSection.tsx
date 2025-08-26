import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function PopularProductsSection() {
  const products = [
    { name: "FOOD", price: "Rs 45", image: "pet food supplements package" },
    { name: "TOWEL", price: "Rs 18", image: "orange pet towel with dog" },
    {
      name: "BEANIE",
      price: "Rs 20",
      originalPrice: "Rs 18",
      image: "pet food can",
    },
    { name: "PETS LOTION", price: "Rs 90", image: "pet lotion bottle" },
  ];

  return (
    <section className="py-16 bg-lime-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Recent Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="text-center bg-gray-100 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <img
                  src={`https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg`}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-500 mb-1">Food</p>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-orange-500 font-bold">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
