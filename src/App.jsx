// src/App.js
import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EducationalOffers from './component/EducationalOffers';
import Principalmessage from './component/Principalmessage';
import Testimonials from './component/Testimonials';
import AcademicSections from './component/AcademicSections';
import RecentActivities from './component/RecentActivities';
import MeetOurToppers from './component/MeetOurToppers';
import EnquiryForm from './component/EnquiryForm';
// import RecentActivities from './component/RecentActivities';



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
      <EducationalOffers/>
      <AboutUs/>
      <Principalmessage/>
      {/* <RecentActivities/> */}
      <AcademicSections/>
      <RecentActivities/>
      <MeetOurToppers/>
      <EnquiryForm/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
