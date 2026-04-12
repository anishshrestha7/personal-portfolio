import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="h-full w-full flex items-center overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-[32px] font-bold mb-3 accent-text tracking-tight">About Me</h2>
          <p>Passionate about solving design challenges.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="p-8 glass">
            <div className="flex items-center gap-3 mb-4">
              <FiBriefcase className="accent-text" size={24} />
              <h3 className="font-bold tracking-tight">Background</h3>
            </div>
            <p>Educated at Depot College, I've expanded my technical progress through intensive training at Broadway Infosys. I'm driven by a passion for contributing to professional teams.</p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="p-8 glass">
            <div className="flex items-center gap-3 mb-4">
              <FiAward className="accent-text" size={24} />
              <h3 className="font-bold tracking-tight">Training</h3>
            </div>
            <p>Completed Front-End Development Training at Broadway Infosys Pvt. Ltd. (Nov '25 - Jan '26).</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
