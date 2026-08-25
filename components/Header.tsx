"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-amber-50 to-orange-50 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl">🐾</div>
            <span className="text-2xl font-bold text-amber-900 group-hover:text-amber-700 transition">
              PawsGrooming
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-700 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-amber-700 font-medium transition"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-amber-700 font-medium transition"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-700 font-medium transition"
            >
              About
            </Link>
            {/* <Link
              href="/admin/login"
              className="text-gray-700 hover:text-amber-700 font-medium transition"
            >
              Admin
            </Link> */}
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-amber-700 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-amber-700 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-700 hover:text-amber-700 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-amber-700 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/admin/login"
              className="block text-gray-700 hover:text-amber-700 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
            <Link
              href="/contact"
              className="block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
