"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/constants";

const Reviews = () => {
  return (
    <section className="py-16 px-4" id="reviews">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((t, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-beige text-teal rounded-lg shadow-md border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <p className="italic">&quot;{t.review}&quot;</p>
              <p className="mt-4 font-semibold text-xl">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reviews;
