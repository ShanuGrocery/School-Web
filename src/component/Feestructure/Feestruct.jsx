import React from 'react';
import { FaRupeeSign, FaBus, FaSchool } from 'react-icons/fa';

const feeData = [
  {
    className: 'Pre-Primary (Nursery to KG)',
    tuition: 400,
    transport: 300,
    AdmissionFee: 2000,
  },
  {
    className: 'Primary (Class 1 to 5)',
    tuition: 450,
    transport: 350,
    AdmissionFee: 2000,
  },
  {
    className: 'Middle School (Class 6 to 8)',
    tuition: 550,
    transport: 400,
    AdmissionFee: 2000,
  },
  {
    className: 'Secondary (Class 9 & 10)',
    tuition: 850,
    transport: 500,
    AdmissionFee: 2000,
  },
  
];

const Feestruct = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 font-playfair">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
          🧾 Fee Structure
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Transparent and affordable fee structure for every class.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeData.map((fee, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-8 border-blue-600 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                🎓 {fee.className}
              </h3>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <FaRupeeSign className="text-green-600" />
                  <span>
                    <strong>Tuition Fee:</strong> ₹{fee.tuition}/month
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBus className="text-yellow-600" />
                  <span>
                    <strong>Transport Fee:</strong> ₹{fee.transport}/month
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaSchool className="text-red-600" />
                  <span>
                    <strong>Admission Fee:</strong> ₹{fee.AdmissionFee}/year
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-600 italic">
          * Fees are subject to change. Contact the school office for updates or special discounts.
        </p>
      </div>
    </section>
  );
};

export default Feestruct;
