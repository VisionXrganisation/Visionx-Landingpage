import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800 bg-gray-900/60 backdrop-blur-md fixed w-full top-0 z-50">
        <h1 className="text-3xl font-bold text-purple-500">VisionX</h1>
        <div className="space-x-4">
          <NavButton>Home</NavButton>
          <NavButton>Services</NavButton>
          <NavButton>Contact</NavButton>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center py-32 px-5 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-5xl font-extrabold">Innovating IT Solutions & Building Powerful Software Products</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">We deliver top-tier software solutions that drive business success.</p>
        <Button className="mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-3 text-lg rounded-full shadow-lg transition-all duration-300">Get Started</Button>
      </section>
      
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-20">
        <FeatureCard title="AI Solutions" description="Leverage AI to automate processes." />
        <FeatureCard title="Cloud Integration" description="Seamless cloud solutions for businesses." />
        <FeatureCard title="Custom Software" description="Tailored software to meet your needs." />
      </section>
      
      {/* Products Section */}
      <section className="text-center py-20 px-5">
        <h2 className="text-4xl font-bold text-purple-500">Our Products Include</h2>
        <motion.div whileHover={{ scale: 1.05 }} className="mt-6 bg-gray-900/50 p-8 rounded-xl shadow-xl backdrop-blur-md inline-block">
          <h3 className="text-2xl font-semibold">AI-Powered Analytics</h3>
          <p className="text-gray-400 mt-2">Advanced analytics for business growth.</p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="text-center py-20 px-5">
        <h2 className="text-4xl font-bold text-purple-500">What Our Clients Say</h2>
        <motion.div whileHover={{ scale: 1.05 }} className="mt-6 bg-gray-900/50 p-8 rounded-xl shadow-xl backdrop-blur-md inline-block max-w-md mx-auto">
          <p className="text-gray-300 italic">VisionX transformed our digital presence. Highly recommended!"</p>
          <p className="text-purple-400 font-semibold mt-2">- Jane Doe</p>
        </motion.div>
      </section>
      
      {/* Contact Section */}
      <section className="text-center py-20 px-5 bg-gray-900/60 backdrop-blur-md rounded-xl max-w-3xl mx-auto mt-10">
        <h2 className="text-4xl font-bold text-purple-500">Get In Touch</h2>
        <p className="text-gray-400 mt-4">Have a project in mind? Let’s collaborate.</p>
        <Button className="mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-3 text-lg rounded-full shadow-lg transition-all duration-300">Contact Us</Button>
      </section>
      
      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800 mt-10">
        <p>&copy; 2025 VisionX. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900/50 p-8 rounded-xl shadow-xl backdrop-blur-md">
      <h3 className="text-2xl font-semibold text-purple-500">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </motion.div>
  );
}

function NavButton({ children }) {
  return (
    <button className="text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300">
      {children}
    </button>
  );
}
