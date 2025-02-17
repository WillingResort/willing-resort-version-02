import React from 'react'

interface HeroBannerProps {
    heroBannerBgImage: string;
    headingText: string;
    bodyText: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBannerBgImage, headingText, bodyText }) => {
    return (
        <div
            className="relative min-h-[70vh] bg-cover bg-center flex flex-col justify-end"
            style={{ backgroundImage: `url(${heroBannerBgImage})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
            <div className="container mx-auto pb-[100px] relative z-10">
                <h1 className="text-[26px] font-[500] leading-[32.5px] lg:w-[30%] tracking-heading text-white uppercase">
                    {headingText}
                </h1>
                <p className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[40%] !text-white mt-5">
                    {bodyText}
                </p>
            </div>
        </div>
    )
}

export default HeroBanner;
