import { cn } from "@/lib/utils";
import { useAuthContext } from "@/store/authStore";
import { Link, useLocation } from "react-router";

type NavItem = {
  label: string;
  path: string;
};

const NavLinkItem = ({ label, path }: NavItem) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={cn(
        "text-gray-800 hover:text-blue-500 font-medium transition-colors",
        {
          "text-blue-500": pathname === path,
        }
      )}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const { isAuthenticated, isHydrated } = useAuthContext();

  // Define common links
  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Pets", path: "/pets" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const authItem: NavItem =
    isHydrated && isAuthenticated
      ? { label: "Dashboard", path: "/dashboard" }
      : { label: "Login", path: "/auth/login" };

  return (
    <header className="bg-white border-b ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link className="text-2xl font-bold text-black " to={"/"}>
            Notun<span className="text-blue-400">Bari</span>
          </Link>

          <nav className="flex items-center gap-12">
            {navItems.map((item) => (
              <NavLinkItem
                key={item.path}
                path={item.path}
                label={item.label}
              />
            ))}
            <NavLinkItem {...authItem} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
