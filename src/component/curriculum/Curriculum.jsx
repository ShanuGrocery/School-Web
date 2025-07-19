import React from 'react';
import {
  FaBookOpen,
  FaFlask,
  FaCalculator,
  FaLanguage,
  FaGlobe,
  FaMusic,
  FaPaintBrush,
  FaLaptopCode,
  FaUserFriends,
} from 'react-icons/fa';

const curriculumData = [
  { title: 'English Language & Literature', icon: <FaBookOpen />, desc: 'Reading, grammar, writing, and comprehension.' },
  { title: 'Mathematics', icon: <FaCalculator />, desc: 'Concepts of numbers, geometry, algebra, and problem-solving.' },
  { title: 'Science', icon: <FaFlask />, desc: 'Hands-on learning in Physics, Chemistry, and Biology.' },
  { title: 'Social Studies', icon: <FaGlobe />, desc: 'History, Geography, Civics, and cultural studies.' },
  { title: 'Hindi & Regional Language', icon: <FaLanguage />, desc: 'Language development and literary exposure.' },
  { title: 'Computer Science', icon: <FaLaptopCode />, desc: 'Basics of coding, software skills, and digital literacy.' },
  { title: 'Art & Craft', icon: <FaPaintBrush />, desc: 'Creative expression through drawing, painting, and crafts.' },
  { title: 'Music & Dance', icon: <FaMusic />, desc: 'Rhythm, singing, classical and modern dance activities.' },
  { title: 'Value Education', icon: <FaUserFriends />, desc: 'Moral science, life skills, empathy, and behavior training.' },
];

const Curriculum = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 font-playfair">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">
          🎓 School Curriculum
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Our well-balanced curriculum is designed to foster holistic growth of every child — intellectually, creatively, emotionally, and socially.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 text-left transition transform hover:scale-[1.03]"
            >
              <div className="text-3xl text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
