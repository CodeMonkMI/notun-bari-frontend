import About from "./components/About";
import Adoption from "./components/Adoption";
import Hero from "./components/Hero";

export function HomeContainer() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <Adoption />
    </div>
  );
}
