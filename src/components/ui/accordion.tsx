'use client'
import { useState } from "react";
import { Icon } from "@iconify/react";

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium">{title}</span>
                <Icon
                    icon="akar-icons:chevron-down"
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden bg-gray-100 transition-all duration-300 ${isOpen ? "max-h-40 p-4" : "max-h-0"
                    }`}
            >
                <p className="text-gray-700">{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
