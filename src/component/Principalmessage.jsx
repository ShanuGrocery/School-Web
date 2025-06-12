import React from "react";
import { motion } from "framer-motion";
import image from "../assets/principal.png";

const principalData = {
  name: "Mr. Rajesh Kumar",
  position: "Principal",
  image: image,
  message:
    "Welcome to our institution where excellence is a tradition. Our goal is to provide holistic education and nurture every student's potential. We believe in empowering young minds through knowledge, discipline, and values.",
  prompts: [
    "Discipline and dedication are the pillars of success.",
    "We don't just teach — we inspire, guide, and lead.",
    "Every child is a spark of brilliance waiting to be ignited.",
    "Our classrooms are not limited to four walls — they extend into life itself.",
  ],
};

const PrincipalMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 font-playfair">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={principalData.image}
            alt={principalData.name}
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-purple-800">
            Principal's Message
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            {principalData.message}
          </p>

          {/* Prompts/Quotes */}
          <div className="space-y-2">
            {principalData.prompts.map((quote, idx) => (
              <blockquote
                key={idx}
                className="text-sm italic text-purple-700 border-l-4 border-purple-300 pl-4"
              >
                “{quote}”
              </blockquote>
            ))}
          </div>

          {/* Signature */}
          <div className="pt-4">
            <h4 className="text-base font-semibold text-gray-800">
              {principalData.name}
            </h4>
            <p className="text-sm text-purple-600">{principalData.position}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
