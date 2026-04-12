import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import HeroImage from '../components/HeroImage';
import TypewriterEffect from '../components/TypewriterEffect';

const Home = () => {
  return (
    <section className="h-full w-full flex items-center overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">
        <HeroImage />

        <motion.div
          className="flex-[1.5]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[12px] tracking-[3px] uppercase text-primary mb-6 font-semibold">Web Developer Intern</p>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] mb-6 font-bold tracking-tight ">Anish <br/><span className="accent-text">Shrestha</span></h1>
          
          <TypewriterEffect 
            text="A fast learner who is excited to dive into the technical side of web Development. Aiming to master modern design frameworks." 
            className="max-w-[550px] text-[18px] text-textSecondary mb-10 mx-auto md:mx-0 min-h-[81px] md:min-h-[54px]"
            delay={35}
          />

          <div className="flex gap-5 justify-center md:justify-start mb-10 text-textSecondary">
            <a href="https://github.com/anishshrestha7" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/anish-shrestha-025b2a155/" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiLinkedin size={24} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiMail size={24} /></a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
            <Link to="/projects" className="btn-primary flex items-center justify-center w-full md:w-auto ">View Projects</Link>
            <a href="/Anishwebdev-intern.pdf" download className="btn-secondary flex items-center justify-center w-full md:w-auto pe-4">Download CV <span className='ps-2'><FiDownload size={24}/></span></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
