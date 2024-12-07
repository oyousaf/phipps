import { motion } from "framer-motion";
import { GALLERY } from "@/constants";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-full h-64 overflow-hidden bg-gray-300 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.href}
                alt={`Gallery Image ${item.id}`}
                width={500} 
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
