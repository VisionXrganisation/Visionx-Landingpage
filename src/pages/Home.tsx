import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, BarChart, Shield, Play, ChevronRight } from 'lucide-react';
import user1 from "../assets/ruthu.jpeg";
import user2 from "../assets/praveen.jpeg";
import user3 from "../assets/shashank.jpeg";
import LearningDemo from "../assets/Learning.mp4"; 
import { useState } from "react";


const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const words = "Transform Education with".split(" ");

  // Create a ref for the target section
  const actionSectionRef = useRef(null);

  // Function to scroll to the target section
  const scrollToActionSection = () => {
    actionSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.muted = false; // Enable audio
        videoRef.current.play();
        setIsPlaying(true);
      }
    };
  
    const handleTogglePlay = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Education Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <motion.div
          style={{ opacity, y }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="mb-6 flex justify-center">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-4xl md:text-6xl font-bold text-white mx-2"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-8"
          >
            Stalight Technology
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Empowering educators and students with innovative solutions for a brighter future in education.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={scrollToActionSection}
              className="group bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Get Started
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <Link
              to="/about"
              className="group bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Video Showcase Section */}
     <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">See Stalight in Action</h2>
          <p className="text-xl text-gray-400">Experience how our solutions transform education</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300" />
            
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleTogglePlay}
              loop
              playsInline
            >
              <source src={LearningDemo} type="video/mp4" />
            </video>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/90 p-4 rounded-full"
                  onClick={handlePlay}
                >
                  <Play className="h-8 w-8 text-blue-600" />
                </motion.button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <h3 className="text-3xl font-bold">Smart Learning Platform</h3>
            <p className="text-gray-400">
              Watch how our intelligent learning system adapts to each student's needs,
              providing personalized learning paths and real-time feedback.
            </p>
            <ul className="space-y-4">
              {[
                "AI-powered learning recommendations",
                "Interactive virtual classrooms",
                "Real-time progress tracking",
                "Collaborative learning tools"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Stalight?</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </motion.div>
            <p className="text-xl text-gray-600 mt-4">Comprehensive solutions for modern education management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-16"
          >
            What Our Users Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.7)" }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,#6ee7b7_0%,transparent_70%)] opacity-20" />
          <div className="flex items-center mb-3 relative z-10">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-3 text-white">
              <h4 className="font-semibold text-lg leading-tight">{testimonial.name}</h4>
              <p className="text-sm text-cyan-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-300 italic text-sm relative z-10">“{testimonial.quote}”</p>
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
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Institution?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105"
            >
              Schedule a Demo
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Smart Learning",
    description: "Personalized learning paths and adaptive content delivery.",
    icon: <BookOpen className="h-6 w-6 text-blue-600" />
  },
  {
    title: "Student Management",
    description: "Comprehensive tools for managing student data and progress.",
    icon: <Users className="h-6 w-6 text-purple-600" />
  },
  {
    title: "Analytics",
    description: "Data-driven insights for better educational outcomes.",
    icon: <BarChart className="h-6 w-6 text-green-600" />
  },
  {
    title: "Security",
    description: "Enterprise-grade security for educational data.",
    icon: <Shield className="h-6 w-6 text-red-600" />
  }
];

const testimonials = [
  {
    name: "Ruthu Parinika",
    role: "Intern, Stalight Technology",
    quote: "Working at Stalight Technology has been an incredible journey! The hands-on projects and mentorship have sharpened my skills, and the dynamic work environment keeps me inspired every day.",
    image: user1
  },
  {
    name: "Shashank",
    role: "Intern, Stalight Technology",
    quote: "At Stalight, I’ve gained real-world experience in a fast-paced tech environment. The collaborative culture and cutting-edge projects have truly accelerated my professional growth.",
    image: user3
  },
  {
    name: "Praveen V",
    role: "Intern, Stalight Technology",
    quote: "Stalight Technology has given me the opportunity to work on meaningful projects with a talented team. The experience has been invaluable in shaping my career path!",
    image: user2
  }
];


export default Home;
