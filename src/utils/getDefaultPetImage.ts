export type Category = "cat" | "dog" | "bird" | "rabbit" | "cow" | "goat";
import default_pet from "@/assets/default_pet.jpeg";
export const getDefaultPetImage = (name: Category): string => {
  console.log({ name });
  const data = {
    cat: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg",
    dog: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg",
    bird: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg",
    rabbit: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg",
    cow: "https://images.pexels.com/photos/51311/cow-calf-cattle-stock-51311.jpeg",
    goat: "https://images.pexels.com/photos/1011630/pexels-photo-1011630.jpeg",
  };
  return data[name.toLowerCase() as Category] || default_pet;
};
