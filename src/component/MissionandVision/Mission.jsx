import React from 'react';
import { FaLightbulb, FaEye } from 'react-icons/fa';

const Mission = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 font-playfair">Our Mission & Vision</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 transition hover:scale-105 duration-300">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <FaLightbulb />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 font-playfair">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-playfair">
              To ignite young minds with curiosity, courage, and compassion. We aim to build lifelong learners who think critically, act ethically, and lead positively in a global society.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 transition hover:scale-105 duration-300">
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <FaEye />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4 font-playfair">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-playfair">
              To be a center of educational excellence where innovation meets values, shaping future leaders who embrace diversity, challenge the norm, and transform the world for the better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
