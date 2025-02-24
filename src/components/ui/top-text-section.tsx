import React from "react";

type TopTextSectionProps = {
    title: string;
    description: string;
};

const TopTextSection: React.FC<TopTextSectionProps> = ({ title, description }) => {
    return (
        <div className="container mt-5 mx-auto px-4">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="font-normal w-[100%] sm:w-[50%] text-heading tracking-heading text-secondaryColor uppercase text-center">
                    {title}
                </h1>
                <div className="flex flex-col justify-center items-center">
                    <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopTextSection;
