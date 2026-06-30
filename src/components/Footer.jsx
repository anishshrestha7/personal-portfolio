import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-customBorder text-textSecondary text-[14px] w-full z-10 mt-12 bg-bgPrimary/50 backdrop-blur-sm">
      <div className="max-w-[1100px] mx-auto px-6">
        <p>© 2026 <a href="#home" className="cursor-pointer font-medium text-[16px] transition-colors duration-300 hover:text-primary">Anish Shrestha</a></p>
      </div>
    </footer>
  );
};

export default Footer;
