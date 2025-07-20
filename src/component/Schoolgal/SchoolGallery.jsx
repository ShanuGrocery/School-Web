import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import 20 images from your assets folder
import school1 from "../../assets/lab1.jpeg";
import school2 from "../../assets/lab2.jpeg";
import school3 from "../../assets/lab3.jpeg";
import school4 from "../../assets/lab4.jpeg";
import school5 from "../../assets/lab5.jpeg";
import school6 from "../../assets/lab6.jpeg";
import school7 from "../../assets/lab7.jpeg";
import school8 from "../../assets/lab8.jpeg";
import school9 from "../../assets/lab9.jpeg";
import school10 from "../../assets/lab10.jpeg";
import school11 from "../../assets/lab11.jpeg";
import school12 from "../../assets/lab12.jpeg";
import school13 from "../../assets/lab13.jpeg";
import school14 from "../../assets/lab14.jpeg";
import school15 from "../../assets/lab15.jpeg";
import school16 from "../../assets/lab16.jpeg";
import school17 from "../../assets/lab17.jpeg";
import school18 from "../../assets/lab18.jpeg";
import school19 from "../../assets/lab19.jpeg";
import school20 from "../../assets/lab20.jpeg";
import school21 from "../../assets/lab21.jpeg";
import school22 from "../../assets/lab22.jpeg";
import school23 from "../../assets/lab23.jpeg";
import school24 from "../../assets/lab24.jpeg";
import school25 from "../../assets/lab25.jpeg";
import school26 from "../../assets/lab26.jpeg";
import school27 from "../../assets/lab27.jpeg";
import school28 from "../../assets/lab28.jpeg";
import school29 from "../../assets/lab29.jpeg";
import school30 from "../../assets/lab30.jpeg";
import school31 from "../../assets/lab31.jpeg";
import school32 from "../../assets/lab32.jpeg";
import school33 from "../../assets/lab33.jpeg";
import school34 from "../../assets/lab34.jpeg";
import school35 from "../../assets/lab35.jpeg";
import school36 from "../../assets/lab36.jpeg";
import school37 from "../../assets/lab37.jpeg";
import school38 from "../../assets/lab38.jpeg";
import school39 from "../../assets/lab39.jpeg";
import school40 from "../../assets/lab40.jpeg";



const images = [
  school1, school2, school3, school4, school5,
  school6, school7, school8, school9, school10,
  school11, school12, school13, school14, school15,
  school16, school17, school18, school19, school20,school21,
  school22,school23,school24,school25,school26,school27,school28,
  school29,school30,school31,school32,school33,school34,school35,school36,
  school37,school38,school39,school40
];

const SchoolGallery = () => {
  const [index, setIndex] = useState(-1); // for Lightbox

  return (
    <div className="bg-white py-16 px-4 font-playfair">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          🏫 Our School Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into our vibrant campus life, activities, and facilities.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setIndex(i)}
            >
              <img
                src={img}
                alt={`School ${i + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images.map((img) => ({ src: img }))}
        />
      </div>
    </div>
  );
};

export default SchoolGallery;
