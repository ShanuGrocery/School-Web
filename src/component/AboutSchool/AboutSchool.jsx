import React from "react";
import schoolImg from "../../assets/lab39.jpeg"; // Replace with your actual image path

const AboutSchool = () => {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* School Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src={schoolImg}
            alt="Sauhardh International School"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            About <span className="text-blue-800">Sauhardh International School</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <strong className="text-blue-800 uppercase">Sauhardh International School</strong>, where learning goes beyond textbooks and classrooms. Our mission is to nurture each student’s unique potential by offering a holistic education grounded in values, innovation, and creativity.
          </p>
          <p className="text-gray-600 text-md leading-relaxed">
            With a blend of modern infrastructure, experienced faculty, and a child-friendly atmosphere, we ensure every child feels safe, supported, and inspired to grow. Our school fosters academic excellence, life skills, discipline, and character-building to shape responsible future citizens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;
