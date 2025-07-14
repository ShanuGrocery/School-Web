import React from 'react';
import bgImg3 from '../assets/bg3.jpeg';

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="fade-right" className="order-1 md:order-none">
          <h2 className="text-4xl font-semibold text-blue-900 dark:text-white mb-4 font-playfair">
            About St.Michal 
          </h2>
          <div className="w-16 h-1 bg-lime-500 mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-playfair">
           At,  <span className='text-purple-700'>St.Michal Public School</span> is a CBSE-affiliated institution that fosters a progressive
            environment for over 1000+ students. Our six-acre campus in Bettiah offers a safe and student-friendly
            atmosphere with high academic standards and global educational exposure. We focus on holistic development
            through academics, extracurriculars, and character building.
          </p>
        </div>

        {/* Image Section with Hover Details */}
        <div data-aos="fade-left" className="order-2 md:order-none flex justify-center">
          <div className="relative group w-full max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg">
            <img
              src={bgImg3}
              alt="About School"
              className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-purple-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-6 text-white text-center">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Our school combines strong academic values with co-curricular engagement, aiming to build future-ready, confident individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
