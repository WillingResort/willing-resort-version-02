// import Image from "next/image";
import React from "react";

interface FestivalCardProps {
    festival: {
        image: string;
        name: string;
        date: string;
        description: string;
        subEvent?: any;
    };
    onClick: () => void;
}

const FestivalCard: React.FC<FestivalCardProps> = ({ festival, onClick }) => {
    return (
        <div className="bg-[#F3EEE7] shadow-md rounded-lg overflow-hidden">
            {/* <Image
                src={festival.image}
                alt={festival.name}
                width={600}
                height={300}
                className="w-full h-[300px] object-cover object-center"
                loading="lazy"
            /> */}
            <div className="p-5">
                <h3 className="text-xl font-semibold">{festival.name}</h3>
                <p className="text-sm text-gray-500">{festival.date}</p>
                <p className="mt-2 text-gray-700">{festival.description}</p>
                <button
                    onClick={onClick}
                    className="mt-4 block w-full border-2 border-[#4444] text-black text-center py-2 rounded hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default FestivalCard;
