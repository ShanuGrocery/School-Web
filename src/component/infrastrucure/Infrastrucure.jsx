import React from 'react';
import { FaSchool, FaFlask, FaLaptopCode, FaFutbol, FaBookReader } from 'react-icons/fa';
import mainGround from '../../assets/bg3.jpeg';
import schoolBuilding from '../../assets/school5.jpeg';
import scienceLab from '../../assets/sip1.png';
import computerLab from '../../assets/wed1.png';
import library from '../../assets/sunny6.jpeg';

const infrastructureItems = [
  {
    title: "Main Ground",
    description: "Spacious playground for sports and events with lush green grass.",
    icon: <FaFutbol className="text-3xl text-green-600" />,
    image: mainGround,
  },
  {
    title: "School Building",
    description: "Modern multi-storey building with smart classrooms.",
    icon: <FaSchool className="text-3xl text-blue-600" />,
    image: schoolBuilding,
  },
  {
    title: "Science Lab",
    description: "Well-equipped labs for Physics, Chemistry, and Biology.",
    icon: <FaFlask className="text-3xl text-purple-600" />,
    image: scienceLab,
  },
  {
    title: "Computer Lab",
    description: "High-tech computer lab with latest systems and fast internet.",
    icon: <FaLaptopCode className="text-3xl text-orange-600" />,
    image: computerLab,
  },
  {
    title: "Library",
    description: "Rich collection of books, e-books, and journals for all ages.",
    icon: <FaBookReader className="text-3xl text-yellow-600" />,
    image: library,
  },
];

const Infrastrucure = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 font-playfair">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Infrastructure</h2>
        <p className="text-gray-600 mb-10">
          We provide a world-class learning environment with top-notch facilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastrucure;
