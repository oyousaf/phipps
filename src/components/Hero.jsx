"use client";

import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
      id="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center p-8 max-w-5xl mx-auto">
          {/* SEO-friendly hidden H1 */}
          <h1 className="sr-only">Phipps Opticians</h1>

          <p className="md:text-3xl text-2xl mb-8">
            Your trusted, independent family opticians, dedicated to providing
            exemplary eye care and unparalleled service.
          </p>

          <button
            onClick={() => handleScroll("about")}
            className="text-5xl animate-bounce inline-flex items-center justify-center hover:text-white rounded-full transition-all duration-300"
            aria-label="Scroll to About Section"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
