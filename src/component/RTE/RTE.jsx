import React from 'react';
import { FaBalanceScale, FaCheckCircle } from 'react-icons/fa';

const RTE = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-blue-800 mb-4 font-playfair">Right to Education (RTE)</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed font-playfair">
            Education is a fundamental right of every child. Under the <span className="font-semibold text-blue-600">RTE Act, 2009</span>, children aged 6 to 14 years are entitled to free and compulsory education in recognized schools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Feature 1 */}
          <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">
              <FaBalanceScale />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2 font-playfair">Equal Opportunity</h3>
            <p className="text-gray-600 font-playfair">
              Ensures that economically weaker and disadvantaged groups have access to quality education in private schools.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2 font-playfair">Free & Compulsory</h3>
            <p className="text-gray-600 font-playfair">
              Children admitted under RTE receive education free of cost, including tuition fees, books, and uniforms.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12">
          <a
            href="/rte-application"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition font-playfair"
          >
            Apply for RTE Admission
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default RTE;
