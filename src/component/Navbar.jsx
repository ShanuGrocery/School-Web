// src/components/Navbar.js

import React, { useState } from 'react';
import schoolLogo from '../assets/school_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    'Home',
    'About Us',
    'Admission',
    'Academics',
    'Beyond Academics',
    'Contacts',
    'ERP & Fee',
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Top Bar */}
     <div className="hidden md:flex bg-gray-800 text-white text-xs md:text-sm py-2 px-4 justify-between items-center">
  <div className="flex gap-4">
    <span>📞 +91 000000 | +91 0000000</span>
    <span>✉️ info@ShantiHariSudhanyaChand.com</span>
  </div>
  <div>
    📍Belbagh Bangali Colony, Bettiah, West Champaran, Bihar 845438
  </div>
</div>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={schoolLogo} alt="Logo" className="h-16 md:h-20" />
            <div className="text-lg md:text-2xl font-semibold text-blue-800 leading-tight">
              Shanti Hari Sudhanya Chand <br />
              <span className="text-sm text-gray-600">Public School</span>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden text-xl text-blue-800 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer relative transition-colors duration-200 ${
                  active === item ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
                }`}
              >
                <a href="#">{item}</a>
                {active === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-700 rounded"></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <ul className="md:hidden bg-purple-100 px-4 pb-4 space-y-2 text-gray-800 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors duration-200 ${
                  active === item ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
                }`}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
