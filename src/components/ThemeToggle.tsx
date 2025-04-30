import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <motion.button
      className="fixed top-12 right-10 z-50 p-2 rounded-full shadow-lg bg-white dark:bg-neutral-800"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-14 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 transition-colors duration-300">
        <motion.div
          className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
          animate={{
            x: isDarkMode ? 28 : 0,
            backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDarkMode ? (
            <Moon size={12} className="text-white" />
          ) : (
            <Sun size={12} className="text-yellow-500" />
          )}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;