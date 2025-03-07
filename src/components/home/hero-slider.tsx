'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

    // Auto slide every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % slides.length;
                console.log('Auto sliding to index:', nextIndex);  // Debugging log
                return nextIndex;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-0 w-full h-[80vh] md:h-[700px]">
            {/* Carousel Images */}
            <div className="relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-full h-full bg-gradient-to-r from-black/50 to-transparent"
                        initial={{ opacity: 0, scale: 1.1 }} // Initial state: fade out and slightly zoomed
                        animate={{
                            opacity: index === currentIndex ? 1 : 0,
                            scale: index === currentIndex ? 1 : 1.06,
                        }}
                        exit={{ opacity: 0, scale: 1.1 }} // Fade and zoom out on exit
                        transition={{
                            opacity: { duration: 1 },
                            scale: { type: 'spring', stiffness: 300, damping: 20 }, // Smooth spring animation for scaling
                        }}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            quality={100}
                            priority={index === 0}
                        />
                    </motion.div>
                ))}
            </div>
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-[30px] h-1  ${index === currentIndex ? 'bg-white opacity-100' : 'bg-white/50'} transition-opacity duration-300`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
