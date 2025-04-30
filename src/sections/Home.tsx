import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <ThreeBackground />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-400 mb-6">
              Hi, I'm <span className="text-primary-500">Jina</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-neutral-400 mb-8">
              Frontend Developer & Freelancer
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-neutral-600 mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I craft beautiful, user-friendly digital experiences with cutting-edge technologies.
            My passion lies in building innovative solutions that solve real-world problems.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#work" className="btn-outline">
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#work" className="text-neutral-500 hover:text-primary-500 transition-colors flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;