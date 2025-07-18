import React from "react";
import bgImg3 from "../assets/bg3.jpeg";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="fade-right" className="order-1 md:order-none">
          <h2 className="text-4xl font-semibold text-blue-900 dark:text-white mb-4 font-playfair">
            About Sauhardh
          </h2>
          <div className="w-16 h-1 bg-lime-500 mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-orange-500 font-playfair">
            Shaping Future through quality Education
          </h2> <br />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-playfair">
            Established in 2015, <span className="text-orange-500">Sauhardh International School</span> has grown into a
            center of excellence, dedicated to nurturing young minds for a
            brighter tomorrow. Our mission is to empower students with
            knowledge, character, and confidence to face the challenges of the
            future. At the heart of our philosophy lies a commitment to academic
            rigor balanced with holistic development. We believe that education
            goes beyond textbooks. Our campus buzzes with creativity,
            sportsmanship, leadership activities, and innovation.
          </p>
        </div>

        {/* Image Section with Hover Details */}
        <div
          data-aos="fade-left"
          className="order-2 md:order-none flex justify-center"
        >
          <div className="relative group w-full max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg">
            <img
              src={bgImg3}
              alt="About School"
              className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-purple-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-6 text-white text-center">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Our school combines strong academic values with co-curricular
                engagement, aiming to build future-ready, confident individuals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Details */}
      <div className="mt-12 text-left text-lg text-gray-600 dark:text-gray-700 font-playfair">
  <p><span className="font-bold text-orange-500">UDISE No: </span> 100111212011</p>
  <p><span className="font-bold text-orange-500">RTE Registration No: </span>203101420221221152234</p>
  <p><span className="font-bold text-orange-500">CBSE Affiliation No: </span> </p>
</div>

    </section>
  );
};

export default AboutUs;
