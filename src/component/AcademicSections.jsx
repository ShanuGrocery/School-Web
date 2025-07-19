import React, { useState } from "react";
import {
  FaBullseye,
  FaBaby,
  FaBook,
  FaBrain,
  FaGraduationCap,
} from "react-icons/fa";
import preprimaryImg from "../assets/sunny4.jpeg";
import primaryImg from "../assets/sunny5.jpeg";
import secondaryImg from "../assets/sunny6.jpeg";
import seniorSecondaryImg from "../assets/comeing.png";
import { motion, AnimatePresence } from "framer-motion";

const sectionData = [
  {
    key: "Preprimary",
    title: "Preprimary",
    icon: <FaBaby size={24} />,
    image: preprimaryImg,
    description:
      "The Preprimary Section focuses on early childhood education and lays the foundation for lifelong learning through play, exploration, and social interaction.",
    prompts: [
      "Learning through play",
      "Safe and friendly environment",
      "Development of motor & social skills",
      "Colorful classrooms with learning toys",
    ],
    bg: "bg-gradient-to-tr from-pink-100 via-pink-50 to-white",
    reverse: false,
  },
  {
    key: "Primary",
    title: "Primary",
    icon: <FaBook size={24} />,
    image: primaryImg,
    description:
      "The Primary Section emphasizes basic literacy, numeracy, and personal development, fostering curiosity and creativity in young learners.",
    prompts: [
      "Strong foundation in core subjects",
      "Activity-based learning",
      "Development of curiosity",
      "Interactive smart classrooms",
    ],
    bg: "bg-gradient-to-tr from-yellow-100 via-orange-50 to-white",
    reverse: true,
  },
  {
    key: "Secondary",
    title: "Secondary",
    icon: <FaBrain size={24} />,
    image: secondaryImg,
    description:
      "The Secondary Section prepares students for higher education and the future by encouraging critical thinking, problem-solving, and deeper subject understanding.",
    prompts: [
      "Advanced subject learning",
      "Science & computer labs",
      "Critical thinking focus",
      "Leadership opportunities",
    ],
    bg: "bg-gradient-to-tr from-slate-100 via-gray-50 to-white",
    reverse: false,
  },
  {
    key: "Senior Secondary",
    title: "Senior Secondary",
    icon: <FaGraduationCap size={24} />,
    image: seniorSecondaryImg,
    description:
      "yet to come.",
    prompts: [
      "Career-oriented curriculum",
      "Competitive exam training",
      "Expert faculty guidance",
    ],
    bg: "bg-gradient-to-tr from-indigo-100 via-purple-50 to-white",
    reverse: true,
  },
];

const AcademicSections = () => {
  const [activeTab, setActiveTab] = useState(sectionData[0].key);
  const activeSection = sectionData.find((section) => section.key === activeTab);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 font-playfair">
            Our School Sections
          </h1>
          <p className="text-gray-600 mt-3 text-lg sm:text-xl font-playfair">
            Discover the educational journey at every stage of development
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectionData.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-xl shadow-md border border-orange-300 font-medium flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-orange-500 text-white scale-105 shadow-xl font-playfair"
                  : "bg-white text-gray-800 hover:bg-orange-100 hover:text-orange-600 font-playfair"
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.key}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${
              activeSection.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl backdrop-blur-md bg-white/70 dark:bg-white/10 ${activeSection.bg}`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={activeSection.image}
                alt={activeSection.title}
                className="w-full h-full max-h-[340px] rounded-2xl border-4 border-orange-300 object-cover shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 flex items-center justify-center lg:justify-start gap-3 font-playfair">
                {activeSection.icon}
                {activeSection.title} Section
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-playfair">
                {activeSection.description}
              </p>
              <ul className="mt-4 space-y-3 text-base text-gray-800 font-playfair">
                {activeSection.prompts.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 hover:translate-x-1 transition duration-200"
                  >
                    <FaBullseye className="text-orange-500 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AcademicSections;
