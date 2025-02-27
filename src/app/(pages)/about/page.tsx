import Accordion from '@/components/ui/accordion';
import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: "About | Willing Resort",
        description: "Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern comfort.Stay in one of 16 elegant suites and soak in breathtaking views of Trongsa Dzong, mountains, and the Mangdi River.",
    };
}

const items = [
    { title: "Authentic Bhutanese Experience", content: "Immerse yourself in traditional Bhutanese artistry, perfectly paired with modern indulgence." },
    { title: "Tranquil & Scenic Location", content: "Nestled amidst lush gardens, with panoramic views and serene landscapes." },
    { title: "Luxury Meets Tradition", content: "Experience the warmth of Bhutanese hospitality, combined with world-class comfort." },
    { title: "Escape. Reconnect. Experience.", content: "Book your stay at Willing Resort and discover Bhutan like never before." },
];



const AboutPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/NZ7_4477.jpg'
                headingText='About Willing Resort'
                bodyText={`
                    Nestled in Trongsa Valley, Willing Resort is a luxurious retreat offering an 
                    authentic Bhutanese experience. Surrounded by mountains, monasteries, and 
                    forests, it’s the perfect escape to reconnect with nature.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "About" },
                ]}
            />
            <TopTextSection
                title="Our Story"
                description={`
                    Willing Resort is named after the ancient village of Yueling, where Lam Ngagi
                    Wangchuk built the first meditation temple in 1543. The resort pays tribute to
                    Bhutan’s rich heritage and natural beauty, blending rustic charm with modern 
                    luxury. "Willing" reflects the village's name and conveys positivity. Spanning 
                    4 acres with stunning views, the land was acquired in 2010 by proprietor Mr. 
                    Pema Namgyel to create a luxury retreat honoring the area's historical significance.
                    `}
            />
            <div className='mt-6 sm:mt-[100px] mb-6 sm:mb-[100px]'>
                <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                    <div className='flex flex-wrap w-full sm:flex-row'>
                        {/* Image on the Left */}
                        <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[60%] sm:pr-[40px]">
                            <Image
                                className="h-[500px] lg:h-[650px] w-full object-cover object-center"
                                src='https://willingresort.github.io/assests-hosting/images/dinning/dinning-03.JPG'
                                alt='wellness'
                                width={800}
                                height={500}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] p-6  flex flex-col justify-center items-center ">
                            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                                Why Stay With Us?
                            </h1>
                            <div className="space-y-1 mt-5">
                                {items.map((item, index) => (
                                    <Accordion key={index} title={item.title} content={item.content} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutPage