const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold">
          United <span className="text-primary">Pets</span>
        </h1>
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="#" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#adopt" className="hover:text-primary">
              Adopt
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-primary">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
