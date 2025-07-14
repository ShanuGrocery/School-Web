import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/anualath.png";
import image2 from "../../assets/hero.png";

const events = [
  {
    name: "Annual Sports Day",
    image: image1,
    details:
      "A day filled with exciting sports competitions, team spirit, and fun activities for students.",
  },
  {
    name: "Cultural Fest",
    image: image2,
    details:
      "A vibrant celebration of music, dance, and drama reflecting diverse cultures and talents.",
  },
  {
    name: "Art & Craft Fair",
    image: image1,
    details:
      "Creative art and craftwork made by students displayed for parents and visitors.",
  },
];

const Events = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
          📅 Our School Events
        </h2>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-purple-300 dark:hover:shadow-purple-600 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white bg-purple-600 px-3 py-1 rounded-full shadow-md">
                  {event.name}
                </h3>
              </div>
              <div className="p-6 text-left">
                <p className="text-purple-600 dark:text-gray-300 text-sm leading-relaxed">
                  {event.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
