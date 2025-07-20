import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const Feebackform = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    feedback: "",
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

    const message = `📋 *Feedback Form*\n\n👤 Role: ${formData.role}\n🧑 Name: ${formData.name}\n📧 Email: ${
      formData.email || "N/A"
    }\n💬 Feedback:\n${formData.feedback}`;

    const whatsappNumber = "917739692245"; // Replace with your school's WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-green-50 py-16 px-4 font-playfair">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          🗣️ Feedback Form
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We value your opinion! Please share your feedback about our school.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">You are a</label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email (optional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Your Feedback</label>
            <textarea
              name="feedback"
              required
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              placeholder="Share your thoughts about the school..."
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
          >
            <FaCommentDots />
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feebackform;
