import React from "react";

interface TimelineItemProps {
    icon: React.ReactNode;
    title?: string;
    description: string;
    paddingBottom?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, description, paddingBottom }) => {
    return (
        <div className="flex gap-x-3 relative">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#22232289]">
                <div className="relative z-10 bg-[#222322] text-white rounded-full size-7 flex justify-center items-center">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="pb-2">
                {title && (
                    <h4 className="text-lg font-[600]">{title}</h4>
                )}
                <p className={`text-gray-500 ${paddingBottom ? paddingBottom : ''}`}>{description}</p>
            </div>
        </div>
    );
};

export default TimelineItem;
