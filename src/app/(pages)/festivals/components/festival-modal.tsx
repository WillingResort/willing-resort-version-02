import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface SubEvent {
    name: string;
    description?: string;
    programList?: string[];
}

interface Festival {
    name: string;
    date: string;
    description: string;
    subEvent?: SubEvent[];
    detailDesc?: string;
}

interface FestivalModalProps {
    festival: Festival | null;
    isOpen: boolean;
    onClose: () => void;
}

const FestivalModal: React.FC<FestivalModalProps> = ({ festival, isOpen, onClose }) => {
    if (!isOpen || !festival) return null;

    return (
        <div className="relative z-[999]" aria-labelledby="modal-title" aria-describedby="modal-description" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/60 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-[999] w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-[100px]">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-[70%]">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            {/* Close Button */}
                            <div className="flex justify-end">
                                <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-900">
                                    <Icon icon="mdi:close-thick" width={20} />
                                </button>
                            </div>
                            {/* Modal Content */}
                            <div>
                                <div className="mt-3 mb-3 sm:mt-0 sm:ml-4">
                                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                                        {festival.name}
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 underline">{festival.date}</p>
                                        <p className="text-sm pt-2 text-gray-700" id="modal-description">{festival.detailDesc}</p>
                                    </div>
                                    {festival.subEvent && (
                                        festival.subEvent.map((data, index) => (
                                            <div key={index} className="mt-2">
                                                <p className="text-sm text-black italic">{data.name}</p>
                                                {data.programList && (
                                                    <ul className="pt-2 list-disc pl-5">
                                                        {data.programList.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>

                                                )}
                                                {data.description && <p className="text-sm pt-2 text-gray-700" id="modal-description">{data.description}</p>}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FestivalModal;
