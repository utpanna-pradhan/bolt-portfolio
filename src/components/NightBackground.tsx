import React from 'react';
import { motion } from 'framer-motion';

const NightBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.2 + 0.1
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          style={{
            width: 2,
            height: 2
          }}
        />
      ))}

      {/* Moon */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gray-200"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 60px 30px rgba(255,255,255,0.1)',
            '0 0 80px 40px rgba(255,255,255,0.15)',
            '0 0 60px 30px rgba(255,255,255,0.1)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default NightBackground;