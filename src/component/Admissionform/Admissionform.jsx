import React, { useState } from 'react';
import { FaUser, FaPhoneAlt, FaEnvelope, FaSchool, FaUserFriends } from 'react-icons/fa';

const Admissionform = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    classSeeking: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, we are applying for admission.

👦 Student Name: ${formData.studentName}
👨‍👩‍👦 Parent Name: ${formData.parentName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
🏫 Class Applying For: ${formData.classSeeking}

Please contact us for further steps.`;

    const whatsappNumber = '917739692245'; // Replace with your official number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 font-playfair">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          📝 Admission Application Form
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Please fill out the form below. Our admissions team will get in touch shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Student Name */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaUser className="text-blue-600 text-xl" />
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student's Full Name"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Parent Name */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaUserFriends className="text-blue-600 text-xl" />
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent/Guardian Name"
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
              value={formData.phone}
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Class Seeking Admission */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaSchool className="text-blue-600 text-xl" />
            <input
              type="text"
              name="classSeeking"
              value={formData.classSeeking}
              onChange={handleChange}
              placeholder="Class Seeking Admission For (e.g., Class 8)"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admissionform;
