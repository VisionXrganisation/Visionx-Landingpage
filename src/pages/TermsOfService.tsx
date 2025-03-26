import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 mb-6"
        >
          Terms of Service
        </motion.h1>

        <p className="text-gray-600 mb-4">
          Please read these Terms of Service carefully before using our website.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By accessing and using our services, you agree to comply with these terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Use of Services</h2>
        <p className="text-gray-600 mb-4">
          You agree to use our services for lawful purposes and in compliance with all applicable laws.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Account Responsibilities</h2>
        <p className="text-gray-600 mb-4">
          If you create an account, you are responsible for maintaining its security and confidentiality.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Termination</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to terminate or suspend access to our services at any time for any reason.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We may update these Terms of Service periodically. Your continued use of our website constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about these Terms of Service, please contact us at [your email].
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
