import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-sky-100/70 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Brand/Logo */}
          <img src="/paw.png" alt="Logo" className="h-16 w-16 mr-3" />

          <Link href="/">
            <img src="/heading-image.png" alt="Healthy Paws Logo" className="h-24 w-auto" />
          </Link>
        </div>

        
        
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <Link href="/vets" className="text-gray-700 hover:text-blue-600 transition">
            Vets
          </Link>
          <Link href="/dogs" className="text-gray-700 hover:text-blue-600 transition">
            Dogs
          </Link>
          <Link href="/shelters" className="text-gray-700 hover:text-blue-600 transition">
            Shelters
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>

          {/* Authentication Buttons */}
          <Link href="/pages/login" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition">
            Login
          </Link>
          <Link href="/pages/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
