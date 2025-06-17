import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Parent",
    message:
      "Sauhardh International School has provided my child with a nurturing environment. I’m truly grateful to the teachers for their dedication.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ravi Kumar",
    role: "Student",
    message:
      "The school encourages creativity and discipline equally. I’ve grown so much academically and personally!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Meena Rathi",
    role: "Teacher",
    message:
      "Working at Sauhardh has been a rewarding journey. The management is supportive and the students are enthusiastic learners.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-12">
          💬 What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition hover:scale-105 duration-300"
            >
              <FaQuoteLeft className="text-purple-400 text-3xl mb-4" />
              <p className="text-gray-700 italic mb-6">{testimonial.message}</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-purple-400 mb-3"
              />
              <h4 className="text-lg font-semibold text-purple-600">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
