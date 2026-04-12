import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

// A wrapper component to pass props to Layout and handle theme initialization
const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    // By default, light mode does not require 'dark' class on HTML.
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    // Determine active section from pathname
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/about') setActiveSection('about');
    else if (path === '/skills') setActiveSection('skills');
    else if (path === '/projects') setActiveSection('projects');
    else if (path === '/contact') setActiveSection('contact');
  }, [location]);

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
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
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