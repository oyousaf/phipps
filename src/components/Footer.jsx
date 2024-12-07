"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIconAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-[#0a3a3a] p-6 text-center text-beige">
      <p className="md:text-2xl text-xl">
        © {currentYear} Phipps Opticians. All rights reserved.
      </p>
      <p className="md:text-xl text-lg mt-4">
        63 Market Place, Heckmondwike, WF16 0EZ
      </p>

      <AnimatePresence>
        <motion.div
          className="flex justify-center space-x-4 mt-4"
          {...socialIconAnimation}
        >
          {SOCIAL_LINKS?.map(({ icon, href, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label || "Social media link"}
              className="text-beige hover:text-white"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
