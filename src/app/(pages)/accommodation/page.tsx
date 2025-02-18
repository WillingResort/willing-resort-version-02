import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Accommodation | Willing Resort",
        description: "Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern comfort.Stay in one of 16 elegant suites and soak in breathtaking views of Trongsa Dzong, mountains, and the Mangdi River.",
    };
}

const AccomodationPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/rooms/luxury-01.jpg'
                headingText='Luxurious Accommodation at Willing Resort'
                bodyText={`
                      Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern
                        comfort. Stay in one of 16 elegant suites and soak in breathtaking views of
                        Trongsa Dzong, mountains, and the Mangdi River.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Accommodation" },
                ]}
            />
            <div className="container mt-5 mx-auto px-4">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
                        Discover Tranquility and Elegance
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                            Nestled in the breathtaking landscapes of Trongsa, Willing Resort offers an
                            exquisite blend of traditional Bhutanese architecture and modern comforts.
                            Each suite is thoughtfully designed to provide an immersive experience,
                            surrounded by panoramic views of mountains, rivers, and cultural landmarks.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Junior Suite"
                    description={`
                          Our 12 Junior Suites (34 sqm) offer stunning mountain, valley, and 
                          Trongsa Dzong views. Enjoy large windows, abundant natural light, and elegant 
                          Bhutanese décor with modern comforts. Suites 805-812 feature Dzong views, 
                          while 813-816 offer forest views.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/rooms/junior-suite-01.jpg"
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Deluxe Suite"
                    imagePosition='right'
                    description={`
                            Our two Deluxe Suites (48 sqm) feature a private balcony with an outdoor
                            soaking tub, offering breathtaking valley and mountain views. 
                            With spacious interiors and handcrafted Bhutanese furnishings, 
                            they’re perfect for couples seeking romance and relaxation.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/rooms/deluxe-02.png"
                />
            </div>

            <div className='mt-6 sm:mt-[100px] mb-6 sm:mb-[100px]'>
                <FeatureSection
                    title="Luxury Suite"
                    imagePosition='left'
                    description={`
                        Our two Luxury Suites (95 sqm) offer expansive living areas with a traditional 
                        wood-burning fireplace. Enjoy private balconies with uninterrupted views of 
                        Trongsa Dzong and the Mangdi River, complemented by handcrafted Bhutanese 
                        décor and plush furnishings.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/rooms/luxury-02.jpg"
                />
            </div>

        </React.Fragment>
    )
}

export default AccomodationPage