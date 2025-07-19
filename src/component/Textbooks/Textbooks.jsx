import React from 'react';
import { FaBook, FaWhatsapp } from 'react-icons/fa';

const textbooks = [
  {
    className: 'Class 1',
    books: ['English', 'Mathematics', 'EVS', 'Hindi'],
  },
  {
    className: 'Class 2',
    books: ['English', 'Mathematics', 'Science', 'Hindi'],
  },
  {
    className: 'Class 3',
    books: ['English', 'Math', 'Science', 'Social Studies', 'Hindi'],
  },
  {
    className: 'Class 4',
    books: ['English', 'Mathematics', 'Science', 'EVS', 'Computer'],
  },
  {
    className: 'Class 5',
    books: ['English', 'Math', 'Science', 'Social Science', 'GK'],
  },
  // Add more classes as needed
];

const whatsappNumber = '917739692245'; // your number without + sign

const Textbooks = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 font-playfair">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
          📚 Class-wise Textbooks
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore subject-wise textbooks for each class and order via WhatsApp.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textbooks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                📘 {item.className}
              </h3>

              <ul className="space-y-2 mb-4 text-gray-700">
                {item.books.map((subject, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaBook className="text-green-600" />
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20to%20buy%20textbooks%20for%20${encodeURIComponent(
                  item.className
                )}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-full transition"
              >
                <FaWhatsapp />
                Buy Now on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Textbooks;
