import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="w-full flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <motion.div {...fadeInUp} className="p-12 glass">
          <h2 className="text-[32px] font-bold mb-6 accent-text tracking-tight">Let's Talk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="mb-4 text-textSecondary">I'm open to internships.</p>
              <div className="flex items-center gap-3 mb-4 text-textPrimary"><FiMail className="accent-text" /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">anikazeani7@gmail.com</a></div>
              <div className="flex items-center gap-3 mb-4 text-textPrimary"><FiPhone className="accent-text" /> <a href="tel:+9779841077344" className="hover:text-primary transition-colors">+977-9841077344</a></div>
              <div className="flex items-center gap-3 mb-4 text-textPrimary"><FiMapPin className="accent-text" /> <span>Dharan, Nepal</span></div>
            </div>
            <div className="flex items-center">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="btn-primary1 w-full max-w-[300px] mx-auto text-center block">Send a Message</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
