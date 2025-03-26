import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, Lightbulb, Rocket } from 'lucide-react';
import ceo from '../assets/ceo.jpg';
import cto from '../assets/cto.jpg';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
          <img
            src="data:image/jpeg;base64,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"
            alt="Futuristic Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        </div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text"
          >
            Elevating Education with Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed"
          >
            At <span className="font-bold text-blue-400">Stalight Technology</span>, we are redefining learning with AI-driven solutions, immersive experiences, and smart automation. Join us in shaping the future of education.
          </motion.p>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team Meeting"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-600">
                To empower educational institutions with cutting-edge technology solutions that enhance learning experiences and streamline administrative processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Drive innovation in education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Foster student success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Build stronger communities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 5, 0] }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the people driving innovation at Stalight</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    title: "Innovation",
    description: "We continuously push boundaries to create cutting-edge solutions that transform education.",
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product development to customer support.",
    icon: <Award className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Impact",
    description: "We measure our success by the positive impact we create in educational institutions.",
    icon: <Rocket className="h-8 w-8 text-blue-600" />
  }
];

const team = [
  {
    name: "Ritesh N",
    role: "Chief Executive Officer",
    bio: "Former educator turned tech innovator with 2+ years of experience in EdTech.",
    image: ceo
  },
  {
    name: "Pannaga J A",
    role: "Chief Technology Officer",
    bio: "Tech visionary with a passion for creating scalable education solutions.",
    image: cto  
  },
];

export default About;
