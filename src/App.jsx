// src/App.js
import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer/>
    </div>
  );
}

export default App;
