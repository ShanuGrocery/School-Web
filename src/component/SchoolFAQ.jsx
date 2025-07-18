import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is the admission criteria at Sauhardh School?",
    answer:
      "Admissions are granted based on an entrance interaction or test and availability of seats. Nursery and KG levels require basic age eligibility.",
  },
  {
    question: "Which curriculum does the school follow?",
    answer:
      "We follow a modern curriculum based on CBSE guidelines, focusing on both academics and co-curricular development.",
  },
  {
    question: "Is transportation provided by the school?",
    answer:
      "Yes, we provide safe and GPS-enabled transportation facilities on designated routes.",
  },
  {
    question: "What are the school timings?",
    answer:
      "Timings are 8:00 AM to 2:00 PM for most grades. Pre-primary has slightly shorter hours.",
  },
  {
    question: "Are there co-curricular activities available?",
    answer:
      "Absolutely! We offer music, dance, art, sports, yoga, drama, and more as part of holistic development.",
  },
  {
    question: "How can I track my child’s progress?",
    answer:
      "Parents receive regular updates through the school app, report cards, and PTMs held every term.",
  },
  {
    question: "Is the school English medium?",
    answer:
      "Yes, the medium of instruction is English. Hindi and regional languages are taught as part of the curriculum.",
  },
  {
    question: "Does the school have modern facilities?",
    answer:
      "Yes, we offer smart classrooms, science & computer labs, a library, sports ground, CCTV security, and more.",
  },
];

const SchoolFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 dark:text-white mb-12 font-playfair">
          📚 Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-purple-600">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolFAQ;
