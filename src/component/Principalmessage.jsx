import React from "react";
import { motion } from "framer-motion";
import image from "../assets/principal.png";

const principalData = {
  name: "Mr. Sameer Rai",
  position: "Principal",
  image: image,
  message:
    "Dear Students, Parents, and esteemed members of the School Community, At Sauhardh International School we believe that true education nurtures both the mind and the character. Our goal is to create an environment where students grow intellectually, emotionally and ethically. We are proud of our dedicated teachers who guide each child with care and commitment and are also grateful to parents for their unwavering support. Together, let us continue to inspire, innovate, and ignite a lifelong love for learning .",    
  prompts: [
    "Discipline and dedication are the pillars of success.",
    "We don't just teach — we inspire, guide, and lead.",
    
  ],
};

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 font-playfair">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section - On top in mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-900">
            Principal's Message
          </h2>
          <h2 className="text-3xl md:text-3xl font-bold text-orange-500">
            Learning Today, Leading Tomorrow
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {principalData.message}
          </p>

          <div className="space-y-2">
            {principalData.prompts.map((quote, idx) => (
              <blockquote
                key={idx}
                className="text-sm italic text-blue-900 border-l-4 border-purple-300 pl-4"
              >
                “{quote}”
              </blockquote>
            ))}
          </div>

          <div className="pt-4">
            <h4 className="text-base font-semibold text-gray-800">
              {principalData.name}
            </h4>
            <p className="text-sm text-purple-600">{principalData.position}</p>
          </div>
        </motion.div>

        {/* Image Section - On bottom in mobile, left side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <img
            src={principalData.image}
            alt={principalData.name}
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
