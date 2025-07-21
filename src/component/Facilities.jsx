// src/components/Facilities.jsx
import {
  FaLightbulb,
  FaDesktop,
  FaLanguage,
  FaUserShield,
  FaFlask,
  FaRunning,
  FaBook,
  FaMobileAlt,
  FaCamera,
  FaUserFriends,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaLightbulb className="text-cyan-500 text-3xl" />,
    title: "Digital Class",
    desc: "All the classrooms have digital equipment enabled with all the teaching – learning resources to make the classroom activities interesting and engaging for the students.",
  },
  {
    icon: <FaDesktop className="text-cyan-500 text-3xl" />,
    title: "Computer Laboratory",
    desc: "The school has two computer Laboratories fully equipped with the latest facilities to enable the students to have access to the latest information technology.",
  },
  {
    icon: <FaFlask className="text-cyan-500 text-3xl" />,
    title: "Science Laboratory",
    desc: "The school has a full-fledged laboratory with all the equipment and instruments to cater to the needs of Senior Secondary School students.",
  },
  {
    icon: <FaCamera className="text-cyan-500 text-3xl" />,
    title: "CCTV Surveillance",
    desc: "The school has installed CCTV Surveillance system in the entire campus to ensure safety of the students and better monitoring of all the activities within the school campus.",
  },
  {
    icon: <FaLanguage className="text-cyan-500 text-3xl" />,
    title: "English Language Laboratory",
    desc: "The school takes special efforts to help the students from class three to class IX to enhance their language skills through software enabled English Language Laboratory.",
  },
  {
    icon: <FaRunning className="text-cyan-500 text-3xl" />,
    title: "Sports",
    desc: "The school takes special care to provide sufficient sports activities to the students to develop their talents and maintain a healthy body.",
  },
  {
    icon: <FaBook className="text-cyan-500 text-3xl" />,
    title: "Library",
    desc: "The school has a spacious Library with more than twenty thousand books. All the students of the school are encouraged to make use of this facility.",
  },
];

const Facilities = () => {
  return (
    <section className="py-12 px-4 sm:px-10 lg:px-20 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 font-playfair">
        FACILITIES AT SAUHARDH INTERNATIONAL SCHOOL, HARINAGAR
      </h2>
      <p className="text-lg text-gray-500 mb-10">We provide quality education.</p>
      <div className="w-20 h-1 mx-auto mb-10 bg-gray-400 rounded-full"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {facilities.map((facility, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="animate-bounce">{facility.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-1 font-playfair">{facility.title.toUpperCase()}</h3>
              <p className="text-gray-600 text-sm font-playfair">{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
