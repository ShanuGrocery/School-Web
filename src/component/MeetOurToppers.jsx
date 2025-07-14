import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../assets/sip1.png"
import image2 from "../assets/sip2.png"
import image3 from "../assets/sip3.png"
import image4 from "../assets/sip4.png"

const MeetOurToppers = () => {
  const [toppers, setToppers] = useState([]);
  const [selectedTopper, setSelectedTopper] = useState(null);

  useEffect(() => {
    const fetchToppers = async () => {
      const data = [
        {
          id: 1,
          name: "Aarav Sharma",
          standard: "Class 10",
          rank: "1st Rank",
          subject: "Science",
          marks: "98.7%",
          image: image1,
        },
        {
          id: 2,
          name: "Diya Verma",
          standard: "Class 12",
          rank: "1st Rank",
          subject: "Mathematics",
          marks: "97.3%",
          image: image2,
        },
        {
          id: 3,
          name: "Kabir Mehta",
          standard: "Class 8",
          rank: "2nd Rank",
          subject: "English",
          marks: "95.4%",
          image: image3,
        },
        {
          id: 4,
          name: "Anaya Singh",
          standard: "Class 9",
          rank: "3rd Rank",
          subject: "Social Studies",
          marks: "94.6%",
          image: image4,
        },
      ];
      setToppers(data);
    };
    fetchToppers();
  }, []);

  return (
    <section className="bg-purple-50 py-16 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">Meet Our Toppers</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Celebrating the hard work, dedication, and excellence of our brilliant students who made us proud!
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {toppers.map((topper, index) => (
            <SwiperSlide key={topper.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => setSelectedTopper(topper)}
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-md mb-4">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{topper.name}</h3>
                <p className="text-purple-500 font-medium">{topper.standard}</p>
                <p className="text-gray-600">{topper.rank}</p>
                {topper.subject && (
                  <p className="text-sm text-gray-500">
                    Subject: <span className="font-medium">{topper.subject}</span>
                  </p>
                )}
                {topper.marks && (
                  <p className="text-sm text-gray-500">
                    Marks: <span className="font-medium">{topper.marks}</span>
                  </p>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Below Swiper */}
        <div className="custom-swiper-pagination mt-6 flex justify-center"></div>

        <div className="mt-10">
          <a
            href="/toppers"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition duration-300 shadow"
          >
            View All Toppers
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedTopper && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedTopper(null)}
              className="absolute top-3 right-3 text-purple-600 hover:text-purple-800 text-xl"
            >
              <FaTimes />
            </button>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-md mb-4">
                <img
                  src={selectedTopper.image}
                  alt={selectedTopper.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{selectedTopper.name}</h3>
              <p className="text-purple-500">{selectedTopper.standard}</p>
              <p className="text-gray-700 mb-2">{selectedTopper.rank}</p>
              {selectedTopper.subject && (
                <p className="text-sm text-gray-600">
                  Subject: <span className="font-medium">{selectedTopper.subject}</span>
                </p>
              )}
              {selectedTopper.marks && (
                <p className="text-sm text-gray-600 mb-4">
                  Marks: <span className="font-medium">{selectedTopper.marks}</span>
                </p>
              )}
              <a
                href={`/certificates/${selectedTopper.id}.pdf`}
                download
                className="inline-block mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MeetOurToppers;
