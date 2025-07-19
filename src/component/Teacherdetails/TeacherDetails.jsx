import React, { useState } from 'react';
import {
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaFileAlt,
} from 'react-icons/fa';

const TeacherDetails = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
  });

  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp redirect
    const whatsappNumber = '917739692245'; // change to your school's WhatsApp number
    const message = `Hello, I am applying for a teaching position.

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
📘 Subject: ${form.subject}

📎 Resume: ${resumeFile ? resumeFile.name : 'Resume file to be shared separately.'}

Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8 font-playfair">
          <FaChalkboardTeacher className="inline-block mr-2 font-playfair" />
          Apply for a Teaching Position
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg font-playfair">
            <FaUserTie className="text-blue-600 text-xl" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg font-playfair">
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

          {/* Phone */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg font-playfair">
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

          {/* Subject */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg font-playfair">
            <FaChalkboardTeacher className="text-blue-600 text-xl" />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject Specialization"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Resume Upload */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg font-playfair">
            <FaFileAlt className="text-blue-600 text-xl" />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition duration-300 font-playfair"
            >
              Submit Application 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeacherDetails;
