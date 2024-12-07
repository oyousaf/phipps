"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a3a3a] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Phipps Opticians</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-6 flex-grow">
          {NAV_LINKS.map(({ name, href }, index) => (
            <button
              key={index}
              onClick={() => handleScroll(href)}
              className="text-xl hover:text-white transition-all duration-300 ease-in-out"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          {SOCIAL_LINKS.map(({ icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-beige focus:outline-none"
        >
          <RxEyeClosed size={40} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-teal text-beige flex flex-col items-center justify-center text-2xl h-screen"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 hover:text-white">
              <button onClick={toggleMenu}>
                <RxEyeOpen size={40} />
              </button>
            </div>

            {/* Nav Links (Mobile) */}
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delayChildren: 0.2,
                staggerChildren: 0.1,
              }}
            >
              {NAV_LINKS.map(({ name, href }, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleScroll(href)}
                  className="hover:text-white text-4xl uppercase transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {name}
                </motion.button>
              ))}
            </motion.div>

            {/* Social Media Icons (Mobile) */}
            <motion.div
              className="absolute bottom-20 flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delayChildren: 0.4,
                staggerChildren: 0.1,
              }}
            >
              {SOCIAL_LINKS.map(({ icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
