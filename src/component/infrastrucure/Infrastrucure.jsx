import React from 'react';
import {
  FaSchool,
  FaFlask,
  FaLaptopCode,
  FaFutbol,
  FaBookReader,
  FaUserTie,
  FaPhoneAlt,
  FaChild,
  FaChalkboardTeacher,
  FaTree,
  FaRestroom,
  FaPray,
  FaBuilding,
  FaBookOpen,
} from 'react-icons/fa';

import mainGround from '../../assets/lab36.jpeg';
import schoolBuilding from '../../assets/lab55.jpeg';
import library from '../../assets/lab33.jpeg';
import image1 from "../../assets/lab54.jpeg"
import image2 from "../../assets/lab53.jpeg"
import image3 from "../../assets/lab52.jpeg"
import image4 from "../../assets/lab51.jpeg"
import image5 from "../../assets/lab50.jpeg"
import image6 from "../../assets/lab44.jpeg"
import image7 from "../../assets/lab38.jpeg"
import image8 from "../../assets/lab47.jpeg"
import image9 from "../../assets/lab46.jpeg"
import image10 from "../../assets/lab31.jpeg"
import image11 from "../../assets/lab30.jpeg"
import image12 from "../../assets/lab34.jpeg"
import image13 from "../../assets/lab56.jpeg"
import image14 from "../../assets/sg12.jpeg"
import image15 from "../../assets/lab49.jpeg"

const infrastructureItems = [
  {
    title: 'Main Ground (2.30 Acres)',
    description: 'Expansive green field ideal for football, athletics, and school events.',
    icon: <FaFutbol className="text-3xl text-green-600" />,
    image: mainGround,
  },
  {
    title: 'Main School Building',
    description: 'Architecturally designed multi-storey building for modern learning.',
    icon: <FaBuilding className="text-3xl text-blue-600" />,
    image: schoolBuilding,
  },
  {
    title: 'Science Lab',
    description: 'Fully equipped Physics, Chemistry, and Biology labs for hands-on learning.',
    icon: <FaFlask className="text-3xl text-purple-600" />,
    image: image8,
  },
  {
    title: 'Computer Lab',
    description: 'Latest computers and fast internet to build digital skills.',
    icon: <FaLaptopCode className="text-3xl text-orange-500" />,
    image: image9,
  },
  {
    title: 'Library',
    description: 'Peaceful reading zone with books, magazines, and e-resources.',
    icon: <FaBookReader className="text-3xl text-yellow-500" />,
    image: library,
  },
  {
    title: 'Principal Office',
    description: 'Administrative hub led by the Principal for school governance.',
    icon: <FaUserTie className="text-3xl text-indigo-600" />,
    image: image10,
  },
  {
    title: 'Reception Area',
    description: 'Welcoming area for visitors and parents with friendly staff.',
    icon: <FaPhoneAlt className="text-3xl text-pink-500" />,
    image: image1,
  },
  {
    title: 'Junior Corridor',
    description: 'Bright, decorated passage designed for junior classes.',
    icon: <FaChild className="text-3xl text-rose-400" />,
    image: image2,
  },
  {
    title: 'Junior Classroom',
    description: 'Colorful and interactive classrooms tailored for young learners.',
    icon: <FaBookOpen className="text-3xl text-lime-500" />,
    image: image3,
  },
  {
    title: 'Senior Corridor',
    description: 'Spacious, neat corridors leading to higher grade classrooms.',
    icon: <FaChalkboardTeacher className="text-3xl text-cyan-600" />,
    image: image4,
  },
  {
    title: 'Corridor Area',
    description: 'Ventilated, clean pathways connecting all wings of the school.',
    icon: <FaSchool className="text-3xl text-blue-400" />,
    image: image5,
  },
  {
    title: 'Junior Playground',
    description: 'Safe and fun zone with swings and games for younger kids.',
    icon: <FaChild className="text-3xl text-yellow-600" />,
    image: image6,
  },
  {
    title: 'Garden View',
    description: 'Beautiful garden with plants and flowers for environmental learning.',
    icon: <FaTree className="text-3xl text-green-500" />,
    image: image7,
  },
  {
    title: 'Gardening Area',
    description: 'A place where students learn to care for nature hands-on.',
    icon: <FaTree className="text-3xl text-green-400" />,
    image: image11,
  },
  {
    title: 'Roof View',
    description: 'Panoramic view of the school and surroundings from the terrace.',
    icon: <FaBuilding className="text-3xl text-gray-500" />,
    image: image12,
  },
  {
    title: 'CNS Bathroom',
    description: 'Clean and hygienic bathrooms for comfort and sanitation.',
    icon: <FaRestroom className="text-3xl text-blue-500" />,
    image: image13,
  },
  {
    title: 'Morning Prayer Assembly',
    description: 'Daily gathering where students unite in prayer and discipline.',
    icon: <FaPray className="text-3xl text-red-400" />,
    image: image14,
  },
  {
    title: 'Classroom View',
    description: 'Spacious classrooms with modern teaching aids and seating.',
    icon: <FaChalkboardTeacher className="text-3xl text-violet-600" />,
    image: image15,
  },
];

const Infrastrucure = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-blue-50 py-16 px-4 font-playfair">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">🏫 Our Infrastructure</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Experience our thoughtfully designed infrastructure that fosters academic excellence, innovation, and all-round development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl"></div>
              <div className="p-6 relative z-10 text-left">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-2xl font-semibold text-blue-800">
                    {item.title}
                  </h3>
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
