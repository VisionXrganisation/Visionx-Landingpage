import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-6"
        >
          Privacy Policy
        </motion.h1>
        
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
          We value your privacy. Learn how we handle your data below.
        </p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
            <p className="text-gray-600 mt-2">
              We may collect personal information, such as your name, email address, and other contact details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
            <p className="text-gray-600 mt-2">
              Your data helps us improve our services, communicate with you, and enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">3. Data Security</h2>
            <p className="text-gray-600 mt-2">
              We implement strict security measures to protect your data from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">4. Third-Party Services</h2>
            <p className="text-gray-600 mt-2">
              We may work with third-party providers to enhance our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">5. Changes to This Policy</h2>
            <p className="text-gray-600 mt-2">
              Updates may be made to this policy. We recommend checking this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">6. Contact Us</h2>
            <p className="text-gray-600 mt-2">
              For any inquiries, feel free to reach out at <a href="mailto:infostalight@gmail.com" className="text-blue-500 hover:underline">infostalight@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
