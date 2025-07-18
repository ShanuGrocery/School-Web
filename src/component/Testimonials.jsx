import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import parent1 from "../assets/pra1.jpeg"
import parent2 from "../assets/pra2.jpeg"
import parent3 from "../assets/pra3.png"

const testimonials = [
  {
    name: "Pradeep Kr Pandey",
    role: "Parent",
    message:
      " yaha ka teaching environment bahut hi acha hai बच्चे हर दिन कुछ नया सीखते हैं, और स्कूल जाने के लिए उत्साहित रहते हैं",
    image: parent3,
  },
  {
    name: "Sujit Kumar",
    role: "Parent",
    message:
      "The school encourages creativity and discipline equally.सौहार्द स्कूल ने हमारे बच्चे को न सिर्फ शिक्षा दी, बल्कि संस्कार भी दिए !",
    image: parent1,
  },
  {
    name: "Ranjan sah",
    role: "Parent",
    message:
      "Working at Sauhardh has been a rewarding journey. हमारे बच्चे की आत्मविश्वास और बोलने की क्षमता में जो विकास हुआ है, वह अद्भुत है!.",
    image: parent2,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-12">
          💬 What Parents Say
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
              <h4 className="text-lg font-semibold text-purple-600 font-playfair">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500 font-playfair">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
