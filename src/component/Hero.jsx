import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../assets/hero.png";
import bgImg2 from "../assets/hero2.png";
import bgImg3 from "../assets/anualath.png";

const images = [bgImg, bgImg2, bgImg3];
const prompts = [
  " Unlock the power of knowledge – your future begins here.",
  "Launch your dreams with quality education.",
  "Education is the passport to tomorrow – prepare today.",
  "Learning today, leading tomorrow.",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[85vh] sm:h-[90vh] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-6 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={prompts[currentIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair bg-gradient-to-r text-white text-transparent bg-clip-text"
            >
              {prompts[currentIndex]}
            </motion.p>
          </AnimatePresence>

          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 rounded-md hover:bg-blue-700 transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
