import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const contactInfo = [
  { icon: "📞", value: "+91 77396 92245" },
  { icon: "✉️", value: "sauhardhinternationalschool7739@gmail.com" },
  {
    icon: "📍",
    value: "Belaspur, Harinagar,\nWest Champaran, Bihar – 845103",
  },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Admission", href: "#" },
  { label: "Academics", href: "#" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
];

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (section) =>
    setActiveSection(activeSection === section ? null : section);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white pt-12 pb-6 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* School Info */}
        <div>
          <h3
            onClick={() => toggleSection("info")}
            className="text-2xl font-bold mb-4 flex justify-between items-center cursor-pointer md:cursor-default font-playfair"
          >
            Sauhardh international school
            <span className="md:hidden text-sm ml-2">
              {activeSection === "info" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          <div
            className={`md:block ${
              activeSection === "info" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-purple-100 leading-relaxed font-playfair">
              Curriculum: <span className="text-white font-playfair">CBSE, New Delhi</span>
              <br />
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            onClick={() => toggleSection("contact")}
            className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer md:cursor-default font-playfair"
          >
            Contact Us
            <span className="md:hidden text-sm ml-2">
              {activeSection === "contact" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>  
          </h3>  
          <ul
            className={`space-y-2 text-sm text-purple-100 font-playfair ${
              activeSection === "contact" ? "block" : "hidden"
            } md:block`}
          >
            {contactInfo.map((item, idx) => (
              <li key={idx}>
                {item.icon}{" "}
                {item.value.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            onClick={() => toggleSection("links")}
            className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer md:cursor-default font-playfair"
          >
            Quick Links
            <span className="md:hidden text-sm ml-2">
              {activeSection === "links" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          <ul
            className={`space-y-2 text-sm text-purple-100 font-playfair ${
              activeSection === "links" ? "block" : "hidden"
            } md:block`}
          >
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline hover:text-white transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3
            onClick={() => toggleSection("newsletter")}
            className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer md:cursor-default font-playfair"
          >
            Newsletter
            <span className="md:hidden text-sm ml-2">
              {activeSection === "newsletter" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </h3>
          <div
            className={`space-y-2 text-sm ${
              activeSection === "newsletter" ? "block" : "hidden"
            } md:block`}
          >
            <p className="text-purple-100 font-playfair">
              Stay updated with our latest news:
            </p>
            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-playfair">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition font-playfair"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex justify-center gap-6">
        {socialLinks.map(({ icon, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200 transition transform hover:scale-110 duration-300"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Back to Top */}
      <div className="text-center mt-8">
        <button
          onClick={scrollToTop}
          className="text-sm text-white underline hover:text-purple-200 transition font-playfair"
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Divider and Copyright */}
      <hr className="my-8 border-purple-300" />
      <p className="text-center text-xs text-purple-200 font-playfair">
        &copy; {new Date().getFullYear()} Sauhardh International School. All
        Rights Reserved.
      </p>
       {/* Powered by Webala */}
      <p className="text-center text-sm mt-4 text-white animate-blink font-playfair">
         Powered by{" "}
        <a
          href="https://webala.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-purple-200 transition font-playfair"
        >
          Webala
        </a>
      </p>
    </footer>
  );
};

export default Footer;
