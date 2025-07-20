import React from "react";
import {
  FaCalendarAlt,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUmbrellaBeach,
  FaFlag,
  FaPenFancy,
} from "react-icons/fa";

const calendarData = [
  {
    month: "April",
    title: "New Academic Session Begins",
    icon: <FaCalendarAlt />,
    description: "Start of the new academic year for all classes.",
  },
  {
    month: "June",
    title: "Unit Test - I",
    icon: <FaBookOpen />,
    description: "First Unit Test for all grades.",
  },
  {
    month: "July",
    title: "Parent Teacher Meeting",
    icon: <FaChalkboardTeacher />,
    description: "Discussion of Unit Test - I results.",
  },
  {
    month: "August",
    title: "Independence Day Celebration",
    icon: <FaFlag />,
    description: "Flag hoisting and cultural activities.",
  },
  {
    month: "September",
    title: "Mid-Term Examination",
    icon: <FaPenFancy />,
    description: "Half-yearly exams for all classes.",
  },
  {
    month: "December",
    title: "Winter Vacation",
    icon: <FaUmbrellaBeach />,
    description: "School will remain closed for winter holidays.",
  },
];

const AcademicCalender = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white px-4 py-12 min-h-screen font-playfair">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        🗓️ Academic Calendar – 2025
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 relative border-l-2 border-blue-300 pl-6">
        {calendarData.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 top-1 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
              {event.icon}
            </div>
            <div className="bg-white shadow-md rounded-xl p-5 ml-4 border-l-4 border-blue-600">
              <h4 className="text-lg font-semibold text-blue-800">
                {event.month} – {event.title}
              </h4>
              <p className="text-gray-600 text-sm mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalender;
