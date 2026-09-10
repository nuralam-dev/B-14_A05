import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="DevStack Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="text-pink-600 font-semibold">
              Home
            </a>
            <a href="#" className="hover:text-gray-900">
              Technologies
            </a>
            <a href="#" className="hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="hover:text-gray-900">
              About
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white text-sm font-medium px-4 py-2 rounded-full transition">
              Sign Up
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col space-y-3 font-medium text-gray-600">
            <a href="#" className="text-pink-600 font-semibold">
              Home
            </a>
            <a href="#" className="hover:text-gray-900">
              Technologies
            </a>
            <a href="#" className="hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="hover:text-gray-900">
              About
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
