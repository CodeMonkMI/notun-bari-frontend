import { Card, CardContent } from "@/components/ui/card";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  category?: string;
};

export function PetCard({
  name,
  price,
  image,
  category = "Food",
}: ProductCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow bg-white pt-0">
      <CardContent className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-orange-500 font-bold">{price}</span>
        </div>
      </CardContent>
    </Card>
  );
}
