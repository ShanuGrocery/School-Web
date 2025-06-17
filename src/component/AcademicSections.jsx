import React from "react";
import { FaBaby, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const sections = [
  {
    title: "Pre-Primary",
    icon: <FaBaby className="text-pink-500 dark:text-pink-300 text-4xl mb-3" />,
    color: "from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
    prompts: [
      "Learning through play and activities",
      "Motor skills and emotional development",
      "Foundations in language and numbers",
    ],
  },
  {
    title: "Primary",
    icon: <FaBookOpen className="text-blue-500 dark:text-blue-300 text-4xl mb-3" />,
    color: "from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
    prompts: [
      "Interactive classrooms and basic subjects",
      "Exploration through curiosity-driven tasks",
      "Focus on reading, writing, math & environment",
    ],
  },
  {
    title: "Secondary",
    icon: <FaGraduationCap className="text-purple-500 dark:text-purple-300 text-4xl mb-3" />,
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
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-purple-700 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
  🎓 Our Academic Divisions
</h2>


        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${section.color} p-6 rounded-2xl shadow-lg dark:shadow-md transition-transform hover:-translate-y-2 duration-300`}
            >
              <div className="flex flex-col items-center">
                {section.icon}
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  {section.title}
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-left">
                {section.prompts.map((prompt, idx) => (
                  <li key={idx}>{prompt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSections;
