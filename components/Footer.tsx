import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐾</span>
              <h3 className="text-xl font-bold text-white">PawsGrooming</h3>
            </div>
            <p className="text-sm text-gray-400">
              Professional dog grooming services dedicated to keeping your pets looking and feeling their best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-amber-400 transition cursor-pointer">Full Grooming</li>
              <li className="hover:text-amber-400 transition cursor-pointer">Bath & Dry</li>
              <li className="hover:text-amber-400 transition cursor-pointer">Nail Trim</li>
              <li className="hover:text-amber-400 transition cursor-pointer">Spa Treatments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 (555) 123-4567</li>
              <li>📧 hello@pawsgrooming.com</li>
              <li>📍 Philippines city </li>
              <li className="pt-2 space-x-4">
                <a href="#" className="hover:text-amber-400 transition">Facebook</a>
                <a href="#" className="hover:text-amber-400 transition">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 PawsGrooming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
