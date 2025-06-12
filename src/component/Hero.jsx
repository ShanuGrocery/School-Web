// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import bgImg from '../assets/bgImg.jpg';
import bgImg2 from '../assets/bgImg2.jpg';
import bgImg3 from '../assets/bgImg3.jpg';

const images = [bgImg, bgImg2, bgImg3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
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
        <div className="text-white space-y-5 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Shanti Hari Sudhanya Chand
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            "I believe, I become"
          </p>
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
