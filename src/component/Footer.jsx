import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-white pt-10 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* School Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Shanti Hari Sudhanya Chand Public School</h3>
          <p className="text-sm leading-relaxed">
            Curriculum: <span className="font-medium">CBSE, New Delhi</span><br />
            Co-Education with <span className="font-medium">A/C Hostel Facility</span>
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 0000000000, +91 0000000001</li>
            <li>✉️ info@ShantiHariSudhanyaChand.com</li>
            <li>
              📍 Belbagh Bangali Colony, Bettiah,<br />
              West Champaran, Bihar – 845438
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Admission', 'Academics', 'Beyond Academics', 'Contacts', 'ERP & Fee'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 flex justify-center space-x-6 text-white">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-100 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-100 transition"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-100 transition"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Copyright */}
      <hr className="my-6 border-purple-100" />
      <div className="text-center text-xs text-purple-100">
        &copy; {new Date().getFullYear()} Shanti Hari Sudhanya Chand Public School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
