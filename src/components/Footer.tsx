import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import DemoVideo from '../assets/Demo_Video.mp4';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Stalight</span>
              </div>
              <p className="text-gray-400">
                Transforming education through innovative technology solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-white transition">Products</Link></li>
                <li>
                  <button onClick={openPopup} className="text-gray-400 hover:text-white transition">
                    Get Demo
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:infostalight@gmail.com" className="text-gray-400 hover:text-blue-300 transition">
                    infostalight@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a href="tel:+918660144040" className="text-gray-400 hover:text-blue-300 transition">
                    +91 8660144040
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=12.9330376,77.560489" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-300 transition"
                  >
                    VisionX, Bangalore
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stalight Technology. All rights reserved.</p>
        </div>
      </footer>

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

export default Footer;
