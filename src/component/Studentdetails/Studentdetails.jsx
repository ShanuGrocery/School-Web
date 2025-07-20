import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

// Class-wise data
const studentData = [
  { className: "Nursery", students: 25 },
  { className: "LKG", students: 28 },
  { className: "UKG", students: 30 },
  { className: "Class 1", students: 32 },
  { className: "Class 2", students: 31 },
  { className: "Class 3", students: 29 },
  { className: "Class 4", students: 27 },
  { className: "Class 5", students: 26 },
  { className: "Class 6", students: 28 },
  { className: "Class 7", students: 24 },
  { className: "Class 8", students: 26 },
];

const Studentdetails = () => {
  const total = studentData.reduce((sum, item) => sum + item.students, 0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen px-4 py-12 font-[sans-serif]">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-3">
        🎓 Class-wise Student Details
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Total Students:{" "}
        <span className="font-semibold text-blue-700">{total}</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {studentData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="bg-white border-l-4 border-blue-600 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full p-3 mr-3 text-xl">
                <FaUserGraduate />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {item.className}
              </h3>
            </div>
            <p className="text-gray-700 text-md">
              👨‍🎓 Students Enrolled:{" "}
              <span className="font-semibold text-blue-700">
                {item.students}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Studentdetails;
