import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Transfercertificate = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    rollNo: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, className, rollNo, reason } = formData;

    const whatsappMessage = `Transfer Certificate Request\n\nStudent Name: ${studentName}\nClass: ${className}\nRoll No: ${rollNo}\nReason: ${reason}`;
    const whatsappURL = `https://wa.me/917739692245?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-blue-50 py-16 px-4 font-playfair">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          📝 Apply for Transfer Certificate
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Student Name</label>
            <input
              type="text"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Class</label>
            <select
              name="className"
              required
              value={formData.className}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Class</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              required
              value={formData.rollNo}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Reason for Transfer</label>
            <textarea
              name="reason"
              required
              value={formData.reason}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Explain briefly..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
          >
            <FaPaperPlane />
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transfercertificate;
