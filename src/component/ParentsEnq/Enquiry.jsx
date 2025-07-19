import React, { useState } from 'react';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaQuestionCircle,
  FaChevronDown,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    type: 'Admission',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '917739692245'; // your number here
    const message = `📩 School Enquiry

🔹 Type: ${form.type}
👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
💬 Message: ${form.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    toast.success('Redirecting to WhatsApp...', {
      position: 'top-center',
      autoClose: 2000,
    });

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      navigate('/thank-you'); // Make sure this route exists
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 font-playfair">
      <ToastContainer />
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          🗣️ Parent Enquiry Form
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions about admissions, transport or fees? Fill the form and we'll assist you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaUser className="text-blue-600 text-xl" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaEnvelope className="text-blue-600 text-xl" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Enquiry Type Dropdown */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaChevronDown className="text-blue-600 text-xl" />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none"
            >
              <option value="Admission">Admission</option>
              <option value="Transport">Transport</option>
              <option value="Fees">Fees</option>
              <option value="Curriculum">Curriculum</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
            <FaQuestionCircle className="text-blue-600 text-xl mt-1" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Question / Enquiry"
              rows="4"
              required
              className="w-full bg-transparent outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Send Enquiry 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Enquiry;
