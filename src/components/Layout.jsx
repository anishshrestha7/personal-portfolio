import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ activeSection, toggleTheme, theme }) => {
  const isNoScroll = ['home', 'about', 'skills', 'contact'].includes(activeSection);

  return (
    <div className={`flex flex-col relative w-full ${isNoScroll ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <CustomCursor />
      <Header activeSection={activeSection} toggleTheme={toggleTheme} theme={theme} />
      <main className={`w-full flex flex-col ${isNoScroll ? 'flex-1 overflow-hidden pt-[80px]' : 'flex-grow pt-[80px]'}`}>
        <Outlet />
      </main>
      <Footer isNoScroll={isNoScroll} />
    </div>
  );
};

export default Layout;
