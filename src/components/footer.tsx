import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Petenica</h3>
                <p className="text-sm text-gray-600">About Your Pets</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              This prodigiously grew tortoise chariot stupidly pernicious papers
              along while accordingly under useful much salacious walking fans
              before some supp aesthetically wow shuddered.
            </p>
            <div className="flex gap-3">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Web Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Web Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest Post */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Latest Post</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src="/cute-cat.png"
                  alt="Blog post"
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <h5 className="text-sm font-medium text-gray-800">
                    Acute Yellow Re-Laid Less Or Affirmatively Cats
                  </h5>
                  <p className="text-xs text-gray-500">March 14, 2018</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img
                  src="/happy-golden-retriever.png"
                  alt="Blog post"
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <h5 className="text-sm font-medium text-gray-800">
                    Acute Yellow Re-Laid Less Or Affirmatively Cats
                  </h5>
                  <p className="text-xs text-gray-500">March 14, 2018</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  BellSouth, Harley Street Florida 33966
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">+(1) 234 567 8900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  example@example.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Copyright 2024 PETENICA • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
