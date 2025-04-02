import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-blue-200/70 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Brand/Logo */}
          <Link href="/" className="text-3xl font-bold text-blue-600">
          Healthy Paws: Adopt. Love. Care.
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">
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
