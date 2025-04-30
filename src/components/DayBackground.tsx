import React from 'react';
import { motion } from 'framer-motion';

const DayBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sun */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-yellow-500"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 60px 30px #fff, 0 0 100px 60px #ff0, 0 0 140px 90px #ff8',
            '0 0 80px 40px #fff, 0 0 120px 80px #ff0, 0 0 160px 110px #ff8',
            '0 0 60px 30px #fff, 0 0 100px 60px #ff0, 0 0 140px 90px #ff8'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-90"
          initial={{
            x: -100,
            y: Math.random() * 200 + 50,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: window.innerWidth + 100,
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5
          }}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 60 + 30,
            filter: 'blur(4px)'
          }}
        />
      ))}
    </div>
  );
};

export default DayBackground;