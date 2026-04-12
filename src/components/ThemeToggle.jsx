import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  
  return (
    <button 
      className={`relative w-16 h-8 rounded-full border border-customBorder flex items-center p-1 cursor-pointer transition-colors duration-300 focus:outline-none ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      <div className="absolute left-0 w-full flex justify-between px-[6px] text-textSecondary text-[14px] z-0">
         {isDark ? <FiSun className="opacity-50" size={14} /> : <span></span>}
         {!isDark ? <FiMoon className="opacity-50" size={14} /> : <span></span>}
      </div>
      
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-sm z-10 flex items-center justify-center border border-gray-100 dark:border-gray-600"
        initial={false}
        animate={{
          x: isDark ? 32 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      >
        {isDark ? (
          <FiMoon size={12} className="text-[#6366f1]" />
        ) : (
          <FiSun size={12} className="text-[#4f46e5]" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
