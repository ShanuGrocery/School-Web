import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Recept = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    rollNo: "",
    receipt: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.receipt) {
      alert("Please upload a screenshot or PDF.");
      return;
    }

    const { studentName, className, rollNo, receipt } = formData;

    const message = `Hello, I have uploaded the fee receipt.\n\nStudent Name: ${studentName}\nClass: ${className}\nRoll No: ${rollNo}\nFile: ${receipt.name}`;

    const phone = "917739692245"; // Add your school's WhatsApp number here (with country code, no +)
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 font-playfair">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
        📤 Upload Fee Receipt
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
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
          <input
            type="text"
            name="className"
            required
            value={formData.className}
            onChange={handleChange}
            placeholder="e.g. Class 5"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
          />
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
          <label className="block font-medium text-gray-700 mb-1">
            Upload Receipt (Image or PDF)
          </label>
          <input
            type="file"
            name="receipt"
            accept="image/*,application/pdf"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-blue-600 hover:file:bg-blue-700"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
        >
          <FaUpload />
          Upload Receipt
        </button>
      </form>
    </div>
  );
};

export default Recept;
