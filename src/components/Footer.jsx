import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ isNoScroll }) => {
  return (
    <footer className={`py-6 text-center border-t border-customBorder text-textSecondary text-[14px] w-full z-10 ${isNoScroll ? '' : 'mt-20'}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <p>@2026 <Link to="/" className="cursor-pointer font-medium text-[16px] transition-colors duration-300 hover:text-primary">Anish Shrestha</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
