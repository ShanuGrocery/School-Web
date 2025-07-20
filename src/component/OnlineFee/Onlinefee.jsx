import React, { useState } from "react";
import feeImage from "../../assets/scanner.jpeg"; // Add a relevant image in your assets

const Onlinefee = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    rollNo: "",
    feeType: "",
    amount: "",
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
    alert("Redirecting to payment gateway with:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="bg-blue-50 min-h-screen px-4 py-12 font-playfair">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
        💳 Online Fee Payment
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">📝 Student Information</h3>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Class</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              placeholder="e.g. Class 5"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Fee Type</label>
            <select
              name="feeType"
              value={formData.feeType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded bg-white focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="Tuition Fee">Tuition Fee</option>
              <option value="Admission Fee">Admission Fee</option>
              <option value="Exam Fee">Exam Fee</option>
              <option value="Transport Fee">Transport Fee</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
          >
            Pay Now
          </button>
        </form>

        {/* Right side - Image + Bank Details */}
        <div className="space-y-6 text-gray-800">

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h4 className="text-xl font-bold text-green-700 mb-2">🏦 School Bank Details</h4>
            <p><strong>Bank Name:</strong> HDFC Bank</p>
            <p><strong>Account Name:</strong> Sauhardh International School</p>
            <p><strong>Account Number:</strong> 123456789012</p>
            <p><strong>IFSC Code:</strong> HDFC0001234</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <h4 className="text-xl font-bold text-purple-700 mb-2">📱 UPI Payment</h4>
            <p><strong>UPI ID:</strong> <span className="text-blue-800">sauhardhschool@upi</span></p>
            <p className="text-sm text-gray-500 mt-2">
              You can also scan our UPI QR from the school office or contact admin for help.
            </p>
            
          </div>
          <img
            src={feeImage}
            alt="Fee Illustration"
            className="w-full max-h-80 object-contain rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Onlinefee;
