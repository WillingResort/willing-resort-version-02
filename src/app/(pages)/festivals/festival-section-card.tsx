"use client";
import Image from "next/image";
import React, { useState } from "react";
import { festivals } from "./data/festival";

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
            {/* Festival Cards Section */}
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
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                    <div className="fixed inset-0 z-[999] w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                            <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
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
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={closeModal}
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 sm:ml-3 sm:w-auto"
                                    >
                                        Close
                                    </button>
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
