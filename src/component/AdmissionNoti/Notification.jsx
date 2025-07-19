import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

const notifications = [
  {
    title: 'Admission Open for 2025–26',
    date: 'July 20, 2025',
    details: 'Admissions are now open for all classes from Pre-Primary to Grade 12. Limited seats available!',
  },
  {
    title: 'Last Date for RTE Applications',
    date: 'August 10, 2025',
    details: 'Submit RTE admission forms before the deadline. Forms available in the office and online.',
  },
  {
    title: 'Entrance Test – Class 6 to 10',
    date: 'August 5, 2025',
    details: 'Entrance exam will be conducted at 10:00 AM in the main campus. Admit cards will be shared via email.',
  },
];

const Notification = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 font-playfair">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          <FaBullhorn className="inline-block mr-2" />
          Admission Notifications
        </h2>

        <div className="space-y-6">
          {notifications.map((note, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{note.title}</h3>
              <p className="text-sm text-gray-500 mb-1">📅 {note.date}</p>
              <p className="text-gray-700">{note.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notification;
