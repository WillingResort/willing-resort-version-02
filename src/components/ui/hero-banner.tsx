import React from 'react';

interface HeroBannerProps {
    heroBannerBgImage: string;
    headingText: string;
    bodyText: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBannerBgImage, headingText, bodyText }) => {
    return (
        <>
            <div
                className="relative min-h-[70vh] bg-cover bg-center flex flex-col justify-end"
                style={{ backgroundImage: `url(${heroBannerBgImage})` }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
                {/* Hide on small screens */}
                <div className="container px-5 sm:px-0 mx-auto pb-[100px] relative z-10 hidden sm:block">
                    <h1 className="text-[26px] font-[500] leading-[32.5px] lg:w-[30%] tracking-heading text-white uppercase">
                        {headingText}
                    </h1>
                    <p className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[40%] !text-white mt-5">
                        {bodyText}
                    </p>
                </div>
            </div>

            {/* Show on small screens */}
            <div className="container px-5 sm:px-0 mx-auto mt-6 sm:hidden">
                <h1 className="text-[20px] font-[500] leading-[32.5px] text-center tracking-heading text-black uppercase">
                    {headingText}
                </h1>
                <p className="!text-black text-center mt-2">
                    {bodyText}
                </p>
            </div>
        </>
    );
};

export default HeroBanner;
