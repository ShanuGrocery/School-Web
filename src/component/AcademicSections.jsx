import React from "react";
import { motion } from "framer-motion";
import { FaBaby, FaBookOpen, FaGraduationCap } from "react-icons/fa";

// Import images
import prePrimaryImg from "../assets/sip1.png";
import primaryImg from "../assets/sip2.png";
import secondaryImg from "../assets/sip3.png";

const sections = [
  {
    title: "Pre-Primary",
    icon: <FaBaby className="text-pink-500 dark:text-pink-300 text-4xl mb-2" />,
    image: prePrimaryImg,
    color: "from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
    prompts: [
      "Learning through play and activities",
      "Motor skills and emotional development",
      "Foundations in language and numbers",
    ],
  },
  {
    title: "Primary",
    icon: <FaBookOpen className="text-blue-500 dark:text-blue-300 text-4xl mb-2" />,
    image: primaryImg,
    color: "from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
    prompts: [
      "Interactive classrooms and basic subjects",
      "Exploration through curiosity-driven tasks",
      "Focus on reading, writing, math & environment",
    ],
  },
  {
    title: "Secondary",
    icon: <FaGraduationCap className="text-purple-500 dark:text-purple-300 text-4xl mb-2" />,
    image: secondaryImg,
    color: "from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800",
    prompts: [
      "Subject specialization begins",
      "Project-based and exam-oriented learning",
      "Focus on analytical thinking and collaboration",
    ],
  },
];

const AcademicSections = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-14 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent"
        >
          🎓 Our Academic Divisions
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group bg-gradient-to-br ${section.color} p-6 rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-md transform transition-transform hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 mb-3">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 right-0 bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                  {section.title}
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-left text-sm leading-relaxed">
                {section.prompts.map((prompt, idx) => (
                  <li key={idx} className="transition-all duration-300 group-hover:translate-x-1">
                    {prompt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSections;
