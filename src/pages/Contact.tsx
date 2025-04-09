import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-16 pb-8">
      {/* Popup Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50"
        >
          <CheckCircle className="h-6 w-6" />
          <span>Your message has been sent successfully!</span>
          <button onClick={() => setIsSubmitted(false)} className="ml-4">
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center text-white py-8 md:py-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text"
          >
            Let's Connect & Collaborate!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions or ideas? Reach out and let’s build something amazing together.
            Our team is here to support and innovate with you!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
                <p className="text-lg text-gray-600">
                  Have questions about our products or services? We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">infostalight@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">91+ 8660144040</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">VisionX, 12.9330376, 77.560489</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Monday - Friday: 4:00 PM - 9:00 PM</p>
                  <p className="text-gray-600">Saturday: 11:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 relative flex items-center justify-center"
            >
              <div className="max-w-xl w-full">
                <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center h-full"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4 animate-bounce" />
                    <span className="text-green-600 text-xl text-center font-semibold">
                      Thank you! Your response has been recorded.
                    </span>
                  </motion.div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full border p-3 rounded-lg"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full border p-3 rounded-lg"
                    />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="w-full border p-3 rounded-lg"
                    />
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                      className="w-full border p-3 rounded-lg h-32"
                    ></textarea>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
                    >
                      <Send className="h-5 w-5 inline-block mr-2" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.697434059836!2d77.560489!3d12.9330376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f06a0033bc5%3A0xef3cdd41c8060588!2sVisionX!5e0!3m2!1sen!2sin!4v1695271928471!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
