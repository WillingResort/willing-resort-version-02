"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { festivals } from "./data/festival";


const FestivalsSection: React.FC = () => {
    const router = useRouter();

    return (
        <div className="container mx-auto py-12 px-4">
            {/* Festival Cards Section */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {festivals.map((festival, index) => (
                        <div
                            key={index}
                            className="bg-[#eee] shadow-md rounded-lg overflow-hidden"
                        >
                            <Image
                                src={festival.image}
                                alt={festival.name}
                                width={600}
                                height={300}
                                className="w-full h-[300px] object-cover object-center"
                                loading="lazy"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{festival.name}</h3>
                                <p className="text-sm text-gray-500">{festival.date}</p>
                                <p className="mt-2 text-gray-700">{festival.description}</p>
                                <button
                                    onClick={() =>
                                        router.push(`/festivals/${festival.id}`)
                                    }
                                    className="mt-4 block w-full border-2 border-[#444] text-black text-center py-2 rounded hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default FestivalsSection;
