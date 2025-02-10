/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from 'react';

const slides = [
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-01.jpg", alt: "Slide 1" },
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-02.jpg", alt: "Slide 2" },
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg", alt: "Slide 3" },
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-04.jpg", alt: "Slide 4" },
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-05.jpg", alt: "Slide 5" },
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-06.jpg", alt: "Slide 6" },
    { src: "https://willingresort.github.io/assests-hosting/homepage/slider-07.jpg", alt: "Slide 7" }
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative z-0 w-full h-[400px] md:h-[700px]">
            {/* Carousel Images */}
            <div className="relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            loading="lazy"
                            decoding="async"
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white opacity-75' : 'bg-white opacity-50'} transition-opacity duration-300`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
