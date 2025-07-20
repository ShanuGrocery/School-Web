import React from "react";
import { FaHandshake, FaComments, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Parentsteacher = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-8 font-playfair">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-6">
          🤝 Parents-Teacher Association
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          The <span className="text-orange-500 font-semibold">Parents-Teacher Association (PTA)</span> at Sauhardh International School fosters collaboration between parents and educators to create a nurturing and effective learning environment.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-xl p-6 text-center"
          >
            <FaHandshake className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strong Partnership</h3>
            <p className="text-gray-600">
              We believe education is a shared journey between home and school. PTA builds trust and unity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-xl p-6 text-center"
          >
            <FaComments className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Open Communication</h3>
            <p className="text-gray-600">
              Regular meetings and discussions ensure parents’ voices are heard and valued.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-xl p-6 text-center"
          >
            <FaCalendarCheck className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Events & Collaboration</h3>
            <p className="text-gray-600">
              From annual functions to academic planning, the PTA plays a vital role in school activities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Parentsteacher;
