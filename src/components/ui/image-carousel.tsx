"use client";
import React from "react";
const images = [
  { src: "https://willingresort.github.io/assests-hosting/homepage/slider-01.jpg", alt: "Slide 1" },
  { src: "https://willingresort.github.io/assests-hosting/homepage/slider-02.jpg", alt: "Slide 2" },
  { src: "https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg", alt: "Slide 3" },
  { src: "https://willingresort.github.io/assests-hosting/homepage/slider-01.jpg", alt: "Slide 1" },
  { src: "https://willingresort.github.io/assests-hosting/homepage/slider-02.jpg", alt: "Slide 2" },
  { src: "https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg", alt: "Slide 3" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center w-full h-[70vh] overflow-hidden">
        {/* Left Image */}
        <div
          className="w-[25%] h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${(currentIndex - 1 + images.length) % images.length === 0 ? "-100%" : "0%"})`,
          }}
        >
          <img
            className="h-full w-full object-cover"
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Left"
          />
        </div>

        {/* Middle Image (Active Image) */}
        <div
          className="w-[50%] h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <img
            className="h-full w-full object-cover"
            src={images[currentIndex].src}
            alt="Middle"
          />
        </div>

        {/* Right Image */}
        <div
          className="w-[25%] h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${(currentIndex + 1) % images.length === 0 ? "100%" : "0%"})`,
          }}
        >
          <img
            className="h-full w-full object-cover"
            src={images[(currentIndex + 1) % images.length].src}
            alt="Right"
          />
        </div>
      </div>

      {/* Previous Slide Button */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
      >
        <span className="text-3xl text-gray-800">&#8592;</span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Next Slide Button */}
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
      >
        <span className="text-3xl text-gray-800">&#8594;</span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

