import { useAuthContext } from "@/store/authStore";
import { Link } from "react-router";

const Navbar = () => {
  const { isAuthenticated, isHydrated } = useAuthContext();
  return (
    <nav className="bg-black shadow-md w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link className="text-2xl font-bold" to={"/"}>
          Notun<span className="text-blue-400">Bari</span>
        </Link>
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pets" className="hover:text-primary">
              Pets
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
          <li>
            {isHydrated && isAuthenticated ? (
              <Link to={"/dashboard"} className="hover:text-primary">
                Dashboard
              </Link>
            ) : (
              <Link to={"/auth/login"} className="hover:text-primary">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
