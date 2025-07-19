// src/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import AboutUs from '../component/AboutUs';
// import Footer from '../component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EducationalOffers from '../component/EducationalOffers';
import Principalmessage from '../component/Principalmessage';
import Testimonials from '../component/Testimonials';
import AcademicSections from '../component/AcademicSections';
import RecentActivities from '../component/RecentActivities';
import MeetOurToppers from '../component/MeetOurToppers';
import EnquiryForm from '../component/EnquiryForm';
import Events from '../component/Events/Events';
import SchoolFAQ from '../component/SchoolFAQ';
import Facilities from '../component/Facilities';
import CoreValues from '../component/CoreValues';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <EducationalOffers />
      <AboutUs />
      <Principalmessage />
      <Events />
      <Facilities />
      <CoreValues />
      <AcademicSections />
      <RecentActivities />
      <MeetOurToppers />
      <EnquiryForm />
      <Testimonials />
      <SchoolFAQ />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
