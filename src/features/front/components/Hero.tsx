import { Button } from "@/components/ui/button";
import bg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 text-white">
        <h2 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-primary">United Pets</span>
        </h2>
        <p className="mt-4">
          We offer the best services for your pets. Contact us today and book a
          service.
        </p>
        <Button className="mt-6" size={"lg"}>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
