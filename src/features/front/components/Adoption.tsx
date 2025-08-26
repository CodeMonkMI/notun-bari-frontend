import { Button } from "@/components/ui/button";

const Adoption = () => {
  const pets = [
    {
      name: "Jonas",
      gender: "Male",
      age: "4 years",
      breed: "Siberian Husky",
      img: "https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg",
    },
    {
      name: "Magdalene",
      gender: "Female",
      age: "2 years",
      breed: "Poodle Mix",
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
    {
      name: "Jonas",
      gender: "Male",
      age: "4 years",
      breed: "Siberian Husky",
      img: "https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg",
    },
    {
      name: "Magdalene",
      gender: "Female",
      age: "2 years",
      breed: "Poodle Mix",
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
  ];

  return (
    <section id="adopt" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Adoption</h3>
        <p className="text-gray-600 mb-10">
          Adopting is an act of{" "}
          <span className="text-primary font-semibold">love</span>.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {pets.map((pet, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6">
              <img
                src={pet.img}
                alt={pet.name}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold">{pet.name}</h4>
              <p className="text-gray-500">
                {pet.gender}, {pet.age}
              </p>
              <p className="text-gray-500">{pet.breed}</p>
              <Button className="mt-4 px-5 py-2">More Info</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adoption;
