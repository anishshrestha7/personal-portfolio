import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiLayers } from 'react-icons/fi';
import {
  SiJavascript, SiHtml5, SiCss, SiReact, SiNextdotjs,
  SiTailwindcss, SiSass, SiBootstrap,
  SiGit, SiGithub, SiVercel, SiFigma
} from 'react-icons/si';

const Skills = () => {
  const skillGroups = [
    {
      category: "Web Tech",
      icon: <FiCode size={20} />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss /> },
        { name: "React", icon: <SiReact /> },
        { name: "Next JS", icon: <SiNextdotjs /> }
      ]
    },
    {
      category: "Frameworks",
      icon: <FiLayout size={20} />,
      skills: [
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "SASS", icon: <SiSass /> },
        { name: "Bootstrap", icon: <SiBootstrap /> }
      ]
    },
    {
      category: "Workflow",
      icon: <FiLayers size={20} />,
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Github", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Figma", icon: <SiFigma /> }
      ]
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="w-full flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-[32px] font-bold mb-3 accent-text tracking-tight">Skills</h2>
          <p>Technologies I used to build projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups?.map((group, idx) => (
            <motion.div {...fadeInUp} transition={{ delay: idx * 0.1 }} key={idx} className="p-8 glass hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden border border-transparent hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="accent-text bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">{group.icon}</div>
                <h3 className="text-xl font-bold tracking-tight">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills?.map((skill, sIdx) => (
                  <span key={sIdx} className="group/skill bg-bgPrimary border border-customBorder px-4 py-2.5 rounded-lg text-[14px] flex items-center gap-2.5 hover:border-primary/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.03)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-[18px] text-textSecondary group-hover/skill:text-primary group-hover/skill:scale-125 transition-all duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-medium group-hover/skill:text-textPrimary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
