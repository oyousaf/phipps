"use client";

import { motion } from "framer-motion";
import Gallery from "./Gallery";

import { TILES } from "@/constants";

const About = () => {
  return (
    <section className="py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto text-center justify-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Phipps Opticians, we are devoted to providing bespoke eye care and
          high-quality eyewear solutions. With decades of expertise, we take
          pride in being an integral and trusted part of our local community.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {TILES.map(({ id, icon, title, text }) => (
          <motion.div
            key={id}
            className="bg-beige shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="text-2xl text-teal font-semibold">{title}</h3>
            </div>

            <p className="text-gray-700 md:text-lg">{text}</p>
          </motion.div>
        ))}
      </div>
      <Gallery />
    </section>
  );
};

export default About;
