import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contactt = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    phone: "",
    message: "",
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

    const { role, name, phone, message } = formData;

    const whatsappNumber = "917739692245"; // Replace with your school's WhatsApp number
    const whatsappMessage = `📞 *Contact Request*\n\n👤 Role: ${role}\n🧑 Name: ${name}\n📱 Phone: ${phone}\n💬 Message:\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-16 font-playfair">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          📬 Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We're here to help! Submit your request and we’ll reach out via WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">You are a</label>
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
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
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
            <label className="block mb-1 text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
              placeholder="Enter 10-digit number"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
              placeholder="Type your query or request..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
          >
            <FaWhatsapp />
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactt;
