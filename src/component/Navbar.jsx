import React, { useState } from 'react';
import schoolLogo from '../assets/newlogo1.png';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import menuItems from '../data/menuData';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // For mobile

  const handleLinkClick = (title) => {
    setActive(title);
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={schoolLogo} alt="Logo" className="h-16 md:h-20" />
            <div className="text-lg md:text-2xl font-semibold text-orange-500 leading-tight font-playfair">
              Sauhardh <span className="text-black">International</span> School
              <span className="block text-sm text-gray-700">
                Making Harinagar Literate
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
              <li key={item.id} className="relative group">
                {item.link ? (
                  <a
                    href={item.link}
                    className={`hover:text-blue-600 ${
                      active === item.title ? 'text-blue-700' : ''
                    }`}
                    onClick={() => handleLinkClick(item.title)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <div className="relative group">
                    <span className="flex items-center cursor-pointer group-hover:text-blue-600">
                      {item.title}
                      <FaChevronDown className="ml-1 text-sm" />
                    </span>
                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20">
                      <ul className="py-2">
                        {item.submenu?.map((sub, index) => (
                          <li key={index}>
                            <a
                              href={sub.link}
                              className="block px-4 py-2 hover:bg-orange-100 whitespace-nowrap"
                              onClick={() => handleLinkClick(sub.title)}
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-purple-100 px-4 pb-4 space-y-2 text-gray-800 font-medium font-playfair">
            {menuItems.map((item) => (
              <li key={item.id}>
                <div
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === item.title ? null : item.title)
                  }
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      className={`${
                        active === item.title ? 'text-blue-700 font-semibold' : ''
                      }`}
                      onClick={() => handleLinkClick(item.title)}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <>
                      <span
                        className={`${
                          active === item.title ? 'text-blue-700 font-semibold' : ''
                        }`}
                      >
                        {item.title}
                      </span>
                      {item.submenu?.length > 0 && (
                        <FaChevronDown
                          className={`text-sm transition-transform ${
                            openSubmenu === item.title ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </>
                  )}
                </div>
                {openSubmenu === item.title && item.submenu?.length > 0 && (
                  <ul className="ml-4 pl-4 border-l border-purple-300 space-y-1">
                    {item.submenu.map((sub, index) => (
                      <li key={index}>
                        <a
                          href={sub.link}
                          className="text-sm text-gray-700 hover:text-blue-700 block"
                          onClick={() => handleLinkClick(sub.title)}
                        >
                          {sub.title}
                        </a>
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
