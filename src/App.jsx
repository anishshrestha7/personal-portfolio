import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

// A wrapper component to pass props to Layout and handle theme initialization
const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section id="home" className="min-h-[calc(100vh-80px)] flex items-center">
        <Home />
      </section>
      <section id="about" className="min-h-screen py-20 flex items-center">
        <About />
      </section>
      <section id="skills" className="min-h-screen py-20 flex items-center">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen py-20 flex items-center">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen py-20 flex items-center">
        <Contact />
      </section>
    </motion.div>
  );
};

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout activeSection={activeSection} toggleTheme={toggleTheme} theme={theme} />}>
        <Route index element={<MainContent />} />
        {/* Redirect other paths to home to allow deep linking if needed, or just handle at root */}
        <Route path="*" element={<MainContent />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;