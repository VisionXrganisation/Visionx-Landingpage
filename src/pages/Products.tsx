import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  BookOpen, Users, BarChart, Shield,
  Calendar, MessageSquare, FileText, Settings,
  CheckCircle, Zap, Award, TrendingUp
} from 'lucide-react';
import { TracingBeam } from '../ui/tracing-beam'; // Import the TracingBeam component

const Products = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive solutions for modern education management
          </motion.p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              } mb-20`}
            >
              <div className="flex-1">
                <div className="bg-gradient-to-tr from-blue-100 to-purple-100 p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                  product.tagColor
                }`}>
                  {product.icon}
                  <span className="font-medium">{product.tag}</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">{product.title}</h2>
                <p className="text-xl text-gray-600">{product.description}</p>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your institution effectively</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 5, 0] }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of institutions already using Stalight to improve their educational outcomes.
            </p>
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    title: "Student Management System",
    description: "A comprehensive solution for managing student data, attendance, and performance tracking.",
    tag: "Core Platform",
    tagColor: "bg-blue-100 text-blue-700",
    icon: <Users className="h-5 w-5 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Comprehensive student profiles",
      "Automated attendance tracking",
      "Performance analytics",
      "Parent portal access",
      "Custom report generation"
    ]
  },
  {
    title: "Learning Management System",
    description: "An intuitive platform for creating, delivering, and tracking educational content.",
    tag: "Education",
    tagColor: "bg-purple-100 text-purple-700",
    icon: <BookOpen className="h-5 w-5 text-purple-700" />,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Interactive course creation",
      "Real-time collaboration",
      "Assessment tools",
      "Progress tracking",
      "Resource library"
    ]
  },
  {
    title: "Analytics Dashboard",
    description: "Powerful analytics tools for data-driven decision making in education.",
    tag: "Analytics",
    tagColor: "bg-green-100 text-green-700",
    icon: <BarChart className="h-5 w-5 text-green-700" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Custom analytics dashboards",
      "Predictive analytics",
      "Performance tracking",
      "Automated reporting",
      "Data visualization"
    ]
  }
];

const features = [
  {
    title: "Smart Scheduling",
    description: "Automated scheduling system that optimizes class times and resource allocation.",
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-100"
  },
  {
    title: "Communication Hub",
    description: "Integrated messaging system for students, teachers, and parents.",
    icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
    iconBg: "bg-purple-100"
  },
  {
    title: "Document Management",
    description: "Centralized system for managing and sharing educational resources.",
    icon: <FileText className="h-6 w-6 text-green-600" />,
    iconBg: "bg-green-100"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security features to protect sensitive educational data.",
    icon: <Shield className="h-6 w-6 text-red-600" />,
    iconBg: "bg-red-100"
  },
  {
    title: "Performance Tracking",
    description: "Comprehensive tools for monitoring and analyzing student progress.",
    icon: <TrendingUp className="h-6 w-6 text-yellow-600" />,
    iconBg: "bg-yellow-100"
  },
  {
    title: "System Integration",
    description: "Seamless integration with existing school management systems.",
    icon: <Settings className="h-6 w-6 text-indigo-600" />,
    iconBg: "bg-indigo-100"
  }
];

export default Products;
