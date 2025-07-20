import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

// Circular data grouped by month
const circularData = {
  January: [
    {
      id: 1,
      title: "New Year Holiday",
      date: "2025-01-01",
      description: "School closed on 1st Jan for New Year.",
      fileUrl: "/circulars/new-year.pdf",
    },
  ],
  February: [
    {
      id: 2,
      title: "Result Day – Term 1",
      date: "2025-02-10",
      description: "Result declaration for Term 1.",
      fileUrl: "/circulars/result-term1.pdf",
    },
  ],
  March: [],
  April: [],
  May: [],
  June: [],
  July: [
    {
      id: 3,
      title: "PTM Notice",
      date: "2025-07-20",
      description: "Parent-Teacher Meeting on 25th July.",
      fileUrl: "/circulars/ptm-july.pdf",
    },
  ],
  August: [
    {
      id: 4,
      title: "Independence Day Circular",
      date: "2025-08-12",
      description: "School closed on 15th Aug.",
      fileUrl: "/circulars/independence.pdf",
    },
  ],
  September: [],
  October: [],
  November: [],
  December: [
    {
      id: 5,
      title: "Annual Day Invitation",
      date: "2025-12-10",
      description: "Annual Day celebration on 20th Dec. All are invited!",
      fileUrl: "/circulars/annual-day.pdf",
    },
  ],
};

const months = Object.keys(circularData);

const SchoolCircular = () => {
  const [activeMonth, setActiveMonth] = useState("July");

  return (
    <div className="px-4 py-10 bg-gray-50 min-h-screen font-playfair">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📢 School Circulars – Month-wise
      </h2>

      {/* Month Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeMonth === month
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-blue-700 border border-blue-600"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Circular Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {circularData[activeMonth].length > 0 ? (
          circularData[activeMonth].map((circular) => (
            <div
              key={circular.id}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-600"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {circular.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                📅 {new Date(circular.date).toDateString()}
              </p>
              <p className="text-gray-700 mb-4">{circular.description}</p>
              <a
                href={circular.fileUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <FaCloudDownloadAlt className="mr-2" /> Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No circulars for {activeMonth} yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default SchoolCircular;
