import About from "./components/About";
import Adoption from "./components/Adoption";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export function HomeContainer() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Adoption />
      <Footer />
    </div>
  );
}
