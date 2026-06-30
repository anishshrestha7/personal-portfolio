import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ activeSection, toggleTheme, theme }) => {
  return (
    <div className="flex flex-col relative w-full min-h-screen transition-colors duration-300">
      <CustomCursor />
      <Header activeSection={activeSection} toggleTheme={toggleTheme} theme={theme} />
      <main className="w-full flex flex-col flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
