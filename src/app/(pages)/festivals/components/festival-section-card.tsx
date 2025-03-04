"use client";
import React, { useState } from "react";
import { festivals } from "../data/festival";
import FestivalCard from "./festival-card";
import FestivalModal from "./festival-modal";


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
                    <FestivalCard key={index} festival={festival} onClick={() => openModal(festival)} />
                ))}
            </div>

            {/* Modal */}
            <FestivalModal festival={selectedFestival} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default FestivalsSection;
