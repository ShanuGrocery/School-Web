import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
  FaMusic,
  FaGlobeAsia,
} from "react-icons/fa";

import image1 from "../assets/wha3.jpeg";
import scienceImg from "../assets/wha2.jpeg";
import image2 from "../assets/sip.png";

const activities = [
  {
    title: "Tree Plantation",
    description:
      "Students planted saplings and took a pledge to protect our environment.",
    date: "2025-06-05",
    color: "bg-pink-500",
    image: scienceImg,
  },
  {
    title: "Annual Sports Day",
    description:
      "An energetic day filled with races, games, and a spirit of healthy competition.",
    date: "2025-05-28",
    color: "bg-yellow-500",
    image: image1,
  },
  {
    title: "Inter House Competition",
    description:
      "Houses battled it out in music, dance, and drama showcasing incredible talent.",
    date: "2025-05-15",
    color: "bg-red-500",
    image: image2,
  },
];

// Function to return icon based on title keywords
const getIconByTitle = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes("tree") || lower.includes("plantation")) return <FaUsers />;
  if (lower.includes("sport")) return <FaAward />;
  if (lower.includes("music") || lower.includes("competition") || lower.includes("dance")) return <FaMusic />;
  if (lower.includes("teacher") || lower.includes("workshop")) return <FaChalkboardTeacher />;
  if (lower.includes("world") || lower.includes("environment")) return <FaGlobeAsia />;
  return <FaAward />; // default icon
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const RecentActivities = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-white mb-14 font-playfair">
          🗓️ Recent Activities
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-40 object-cover"
                />

                {/* Dynamic Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-lg absolute -bottom-7 left-6 ${activity.color} transition-transform duration-500 group-hover:[transform:rotate(360deg)]`}
                >
                  {getIconByTitle(activity.title)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-purple-700 dark:text-white font-playfair">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-playfair">
                  {activity.description}
                </p>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  📅 {formatDate(activity.date)}
                </p>
              </div>

              {/* Gradient Border on Hover */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-400 blur-sm z-[-1] transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
