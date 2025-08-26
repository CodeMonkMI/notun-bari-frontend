import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Search } from "lucide-react";
import { Link } from "react-router";

export function Header() {
  return (
    <>
      {" "}
      {/* Top Bar */}
      <div className="bg-orange-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>32 Bell South, Harley St FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+(1) 234 567 8900</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@petenica.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-orange-500 border-white hover:bg-orange-50"
            >
              SUBMIT PET
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500"
            >
              DONATE
            </Button>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Petenica</h1>
              <p className="text-sm text-gray-600">About Your Pets</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              ABOUT
            </Link>
            <Link
              to="/service"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              SERVICE
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              GALLERY
            </Link>
            <Link
              to="/store"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              STORE
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              CONTACT
            </Link>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
