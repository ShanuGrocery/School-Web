import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
  FaMusic,
  FaGlobeAsia,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Science Fair 2025",
    description:
      "Students showcased innovative projects and models in physics, chemistry, and biology.",
    date: "2025-06-10",
    color: "bg-purple-500",
  },
  {
    icon: <FaUsers />,
    title: "Parents-Teachers Meeting",
    description:
      "An interactive session to discuss students' progress and future goals.",
    date: "2025-06-05",
    color: "bg-pink-500",
  },
  {
    icon: <FaAward />,
    title: "Annual Sports Day",
    description:
      "A vibrant day of competitions and awards, promoting teamwork and sportsmanship.",
    date: "2025-05-28",
    color: "bg-yellow-500",
  },
  {
    icon: <FaMusic />,
    title: "Cultural Fest",
    description:
      "Music, drama, and art exhibitions to explore and celebrate student talent.",
    date: "2025-05-15",
    color: "bg-red-500",
  },
  {
    icon: <FaGlobeAsia />,
    title: "World Environment Day",
    description:
      "Students participated in tree plantation drives and environmental awareness rallies.",
    date: "2025-06-05",
    color: "bg-green-500",
  },
];

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
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-white mb-14">
          🗓️ Recent Activities
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300"
            >
              {/* Rotating Icon 360° */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-lg absolute -top-6 left-6 ${activity.color} transition-transform duration-500 group-hover:[transform:rotate(360deg)]`}
              >
                {activity.icon}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {activity.description}
                </p>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  📅 {formatDate(activity.date)}
                </p>
              </div>

              {/* Gradient Border Effect on Hover */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-400 blur-sm z-[-1] transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
