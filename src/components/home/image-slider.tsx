'use client'
import React, { useState } from 'react';

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: "https://willingresort.github.io/assests-hosting/homepage/slider-01.jpg", alt: "Slide 1" },
        { src: "https://willingresort.github.io/assests-hosting/homepage/slider-02.jpg", alt: "Slide 2" },
        { src: "https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg", alt: "Slide 3" },
        { src: "https://willingresort.github.io/assests-hosting/homepage/slider-01.jpg", alt: "Slide 1" },
        { src: "https://willingresort.github.io/assests-hosting/homepage/slider-02.jpg", alt: "Slide 2" },
        { src: "https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg", alt: "Slide 3" },
    ];

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full">
            <div className="flex w-full gap-2 overflow-hidden">
                {/* Left Image */}
                <div
                    className={`w-[25%] h-[70vh] transition-transform duration-500 ease-in-out`}
                    style={{
                        transform: `translateX(${(currentImageIndex - 1 + images.length) % images.length === 0 ? "-100%" : "0%"})`,
                    }}
                >
                    <img
                        className="h-full w-full object-cover"
                        src={images[(currentImageIndex - 1 + images.length) % images.length].src}
                        alt="Left"
                    />
                </div>

                {/* Middle Image (Active Image) */}
                <div
                    className="w-[50%] h-[70vh] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                >
                    <img
                        className="h-full w-full object-cover"
                        src={images[currentImageIndex].src}
                        alt="Middle"
                    />
                </div>

                {/* Right Image */}
                <div
                    className={`w-[25%] h-[70vh] transition-transform duration-500 ease-in-out`}
                    style={{
                        transform: `translateX(${(currentImageIndex + 1) % images.length === 0 ? "100%" : "0%"})`,
                    }}
                >
                    <img
                        className="h-full w-full object-cover"
                        src={images[(currentImageIndex + 1) % images.length].src}
                        alt="Right"
                    />
                </div>
            </div>

            {/* Slider buttons (Prev and Next) */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &#60;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &#62;
            </button>
        </div>
    );
};

export default ImageSlider;
