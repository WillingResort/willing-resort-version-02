'use client'
import React, { useState, useEffect } from "react";

interface Festival {
    name: string;
    date: string;
    description: string;
    image: string;
}

const FestivalsSection: React.FC = () => {
    const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

    // List of festivals
    const festivals: Festival[] = [
        {
            name: "Trongsa Tshechu",
            date: "Lunar Month 11 | 5 Days",
            description:
                "One of Bhutan’s most significant religious festivals, featuring Cham dances and blessings.",
            image: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0336.jpeg",
        },
        {
            name: "Black Mountain Festival",
            date: "October 5-6, 2024",
            description:
                "A vibrant celebration of culture, food, and local crafts, with a 100km cycling challenge.",
            image: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_5448.jpeg",
        },
        {
            name: "Farmer’s Festival",
            date: "November 8 (Annual Event)",
            description:
                "A festival that promotes local agriculture, sustainable living, and Bhutanese farming traditions.",
            image: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_6456.jpeg",
        },
        {
            name: "Yeshey Goenpi Drubchen",
            date: "Lunar Month 9, Dates 23-25",
            description:
                "A powerful three-day Mahakala festival for purification and spiritual awakening.",
            image: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0322.jpeg",
        },
        {
            name: "Pelden Lhamoi Drupchen",
            date: "Lunar Month 12, Dates 23-25",
            description:
                "A sacred festival dedicated to Pelden Lhamo, featuring traditional monk dances and rituals.",
            image: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/wang.jpg",
        },
        {
            name: "Yundrocholing Tshechu",
            date: "Lunar Month 11, Dates 15-17",
            description:
                "A historic festival at Yundrocholing Palace, preserving ancient spiritual dances.",
            image: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/trongsa-tsechu.jpg",
        },
    ];

    // Handle click outside modal to close it
    const handleClickOutside = (e: MouseEvent) => {
        const modal = document.getElementById("festival-modal");
        if (modal && !modal.contains(e.target as Node)) {
            setSelectedFestival(null);
        }
    };

    // Disable background scrolling when modal is open
    useEffect(() => {
        if (selectedFestival) {
            document.body.style.overflow = "hidden";
            // Add event listener for clicks outside the modal
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.style.overflow = "auto";
            // Clean up event listener
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedFestival]);

    return (
        <div>
            {/* Festival Cards Section */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {festivals.map((festival, index) => (
                        <div
                            key={index}
                            className="bg-[#eee] shadow-md rounded-lg overflow-hidden hover:scale-105 transition"
                        >
                            <img
                                src={festival.image}
                                alt={festival.name}
                                className="w-full h-56 object-cover object-top"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{festival.name}</h3>
                                <p className="text-sm text-gray-500">{festival.date}</p>
                                <p className="mt-2 text-gray-700">{festival.description}</p>
                                <button
                                    onClick={() => setSelectedFestival(festival)}
                                    className="mt-4 block w-full border-2 border-[#444] text-black text-center py-2 rounded hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Festival Details */}
            {selectedFestival && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
                    <div
                        id="festival-modal"
                        className="bg-white rounded-lg p-6 max-w-lg shadow-lg relative"
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                            onClick={() => setSelectedFestival(null)}
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold mb-2">{selectedFestival.name}</h2>
                        <p className="text-gray-500">{selectedFestival.date}</p>
                        <img
                            src={selectedFestival.image}
                            alt={selectedFestival.name}
                            className="w-full mt-4 rounded-md"
                        />
                        <p className="mt-3">{selectedFestival.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FestivalsSection;
