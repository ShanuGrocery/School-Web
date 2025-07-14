// src/components/Navbar.js

import React, { useState } from 'react';
import schoolLogo from '../assets/school_logo.png';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import menuItems from '../data/menuData';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // For mobile

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={schoolLogo} alt="Logo" className="h-16 md:h-20" />
            <div className="text-lg md:text-2xl font-semibold text-blue-800 leading-tight font-playfair">
              St <span className="text-black">Michal</span> Public School
              <span className="text-lg text-gray-600 font-playfair"><br />
                Making Narkatiagang literate
              </span>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-xl text-blue-800 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-semibold font-playfair items-center">
            {menuItems.map((item) => (
              <li key={item.title} className="relative group">
                <button
                  onClick={() => setActive(item.title)}
                  className={`cursor-pointer flex items-center gap-1 ${
                    active === item.title
                      ? 'text-blue-700 font-semibold'
                      : 'hover:text-blue-700'
                  }`}
                >
                  {item.title}
                  {item.submenu.length > 0 && (
                    <FaChevronDown className="text-xs mt-1" />
                  )}
                </button>

                {item.submenu.length > 0 && (
                  <ul className="absolute left-0 top-full mt-2 bg-white text-sm text-gray-800 shadow-md rounded-md z-50 min-w-[160px] hidden group-hover:block pointer-events-auto">
                    {item.submenu.map((sub, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-purple-100 cursor-pointer whitespace-nowrap"
                      >
                        <a href="#">{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-purple-100 px-4 pb-4 space-y-2 text-gray-800 font-medium font-playfair">
            {menuItems.map((item) => (
              <li key={item.title}>
                <div
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === item.title ? null : item.title)
                  }
                >
                  <span
                    className={`${
                      active === item.title ? 'text-blue-700 font-semibold' : ''
                    }`}
                    onClick={() => setActive(item.title)}
                  >
                    {item.title}
                  </span>
                  {item.submenu.length > 0 && (
                    <FaChevronDown
                      className={`text-sm transition-transform ${
                        openSubmenu === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                {openSubmenu === item.title && item.submenu.length > 0 && (
                  <ul className="ml-4 pl-4 border-l border-purple-300 space-y-1">
                    {item.submenu.map((sub, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 hover:text-blue-700 cursor-pointer"
                      >
                        <a href="#">{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
