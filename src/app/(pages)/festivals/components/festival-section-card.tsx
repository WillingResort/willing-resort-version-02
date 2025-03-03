"use client";
import Image from "next/image";
import React, { useState } from "react";
import { festivals } from "../data/festival";
import { Icon } from "@iconify/react/dist/iconify.js";

const FestivalsSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFestival, setSelectedFestival] = useState<any>(null);

    const openModal = (festival: any) => {
        setSelectedFestival(festival);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedFestival(null);
    };

    return (
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
                                onClick={() => openModal(festival)}
                                className="mt-4 block w-full border-2 border-[#444] text-black text-center py-2 rounded hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to show selected festival details */}
            {isModalOpen && selectedFestival && (
                <div className="relative z-[999]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500/60 transition-opacity" aria-hidden="true"></div>
                    <div className="fixed inset-0 z-[999] w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-[100px]">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    {/* Heading Section */}
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <Icon icon="mdi:close-thick" width={20} />
                                        </button>
                                    </div>
                                    {/* Modal Body Section */}
                                    <div>
                                        <div className="mt-3 sm:mt-0 sm:ml-4">
                                            <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                                                {selectedFestival.name}
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">{selectedFestival.date}</p>
                                                <p className="text-sm text-gray-700">{selectedFestival.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default FestivalsSection;
