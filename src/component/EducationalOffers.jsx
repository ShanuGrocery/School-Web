import React from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Icon mapping
const iconMap = {
  book: FaBook,
  teacher: FaChalkboardTeacher,
  graduation: FaGraduationCap,
};

// Data array
const educationData = [
  {
    id: 1,
    icon: "book",
    title: "Learning Materials",
    description: "Explore a vast collection of digital and printed resources to boost your knowledge.",
  },
  {
    id: 2,
    icon: "teacher",
    title: "Expert Tutors",
    description: "Learn from industry experts with real-world experience and teaching excellence.",
  },
  {
    id: 3,
    icon: "graduation",
    title: "Career Programs",
    description: "Enroll in career-oriented programs designed to launch you into your dream job.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
};

const EducationalOffers = () => {
  return (
    <section className=" max-w-7xl mx-auto px-6 py-12 font-playfair">
      <div className="grid md:grid-cols-4 gap-6 items-start">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-orange-500">
            What we<br />offer for you
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            It is a long established fact<br />
            that a reader readable.
          </p>
        </motion.div>

        {/* Dynamic Cards with Animation */}
        {educationData.map(({ id, icon, title, description }, index) => {
          const IconComponent = iconMap[icon];
          return (
            <motion.div
              key={id}
              className="bg-gray-100 hover:shadow-md hover:shadow-gray-300 transition-shadow duration-300 p-6 rounded-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariant}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <IconComponent className="text-3xl text-orange-500 animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed hover:text-orange-600">{description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationalOffers;
