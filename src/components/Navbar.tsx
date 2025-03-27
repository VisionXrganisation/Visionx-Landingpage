import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import DemoVideo from '../assets/Demo_Video.mp4';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Stalight</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">Products</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
              <button onClick={openPopup} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Get Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                About
              </Link>
              <Link
                to="/products"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  closeMenu();
                  openPopup();
                }}
                className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Get Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Popup Modal */}
      <Dialog open={isPopupOpen} onClose={closePopup} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
    {/* Close Button */}
    <button onClick={closePopup} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
      <X className="h-6 w-6" />
    </button>

    {/* Popup Content */}
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold text-gray-900 mb-4">See Stalight in Action</h2>
      
      {/* Video Container */}
      <div className="relative w-full">
        <iframe
          className="w-full h-56 md:h-80 rounded-lg"
          src={DemoVideo}
          title="Demo Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </Dialog.Panel>
</Dialog>

    </>
  );
};

export default Navbar;
