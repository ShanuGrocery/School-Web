// src/components/AboutUs.jsx
import React from 'react';
import bgImg3 from '../assets/bgImg3.jpg';

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="fade-right" className="order-1 md:order-none">
          <h2 className="text-4xl font-semibold text-blue-900 mb-4">About Us</h2>
          <div className="w-16 h-1 bg-lime-500 mb-6"></div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Shanti Hari Sudhanya Chand Public School is a CBSE-affiliated institution that fosters a progressive
            environment for over 1000+ students. Our six-acre campus in Bettiah offers a safe and student-friendly
            atmosphere with high academic standards and global educational exposure. We focus on holistic development
            through academics, extracurriculars, and character building.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="order-2 md:order-none">
          <img
            src={bgImg3}
            alt="About School"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
