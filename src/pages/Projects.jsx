import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { SiVercel } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "MIRA - Fashion Modern Website ",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      description: "A clean and elegant ecommerce platform with dummy product data and cart functionality.",
      github: "https://github.com/anishshrestha7/mira",
      live: "https://mira-ivory.vercel.app/",
    },
    {
      title: "Hawaa - Travel and Tour Booking Website",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      description: "A travel booking platform for online reservation with a unique responsive homepage.",
      github: "https://github.com/anishshrestha7/haawa",
      live: "https://haawa.vercel.app/",
    },
    {
      title: "News II - Responsive News Website ",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      description: "A modern news and magazine website featuring sliders and responsive sidebar list.",
      github: "https://github.com/elearning/onlinelearning",
      live: "https://news-ll.vercel.app/",
    },
    {
      title: "Furns - Furniture Shop Website",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      description: "The website project is a E-commerce platform built using React in the frontend which has a responsive layout. The website features fast and user friendly UI with preview of products.",
      github: "https://github.com/anishshrestha7/furn",
      live: "https://furn-three.vercel.app/",
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="w-full py-2">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-[32px] font-bold mb-3 accent-text tracking-tight">Projects</h2>
          <p>Works from my development journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects?.map((project, idx) => (
            <motion.div {...fadeInUp} transition={{ delay: idx * 0.1 }} key={idx} className="p-6 glass flex flex-col h-full">
              <h3 className="mb-3 font-bold tracking-tight">{project.title}</h3>
              <p className="text-textSecondary text-[14px] mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech?.map((t, tIdx) => (
                  <span key={tIdx} className="bg-surface px-2 py-0.5 rounded-md text-[11px] border border-customBorder">{t}</span>
                ))}
              </div>
              <div className="flex gap-5 !mb-0 text-textSecondary mt-auto">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-1"><FiGithub size={20} title="View Code" /></a>}
                {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-1"><SiVercel size={20} title="View Site" /></a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
