import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../assets/bg3.jpeg";
import bgImg2 from "../assets/bg4.jpeg";
import bgImg3 from "../assets/bg7.jpeg";
import { Link } from "react-router-dom";

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
    <section className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden">
      {/* Full-width and full-height image with object-cover */}
      <img
        src={images[currentIndex]}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-6 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={prompts[currentIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white"
            >
              {prompts[currentIndex]}
            </motion.p>
          </AnimatePresence> <br />
          <Link to={"/contact/Help"}>
          <a
            href="#"
            className="inline-block bg-purple-600 text-white text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 rounded-md hover:bg-blue-700 transition hover:bg-green-600 font-playfair"
          >
            Enquire Now
          </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
