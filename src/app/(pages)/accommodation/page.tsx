import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'
import SuiteFeatureSection from './components/accomdation-feature-section';

export async function generateMetadata() {
    return {
        title: "Accommodation || Willing Resort",
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
                            Willing Resort spans more than 4 acres and was opened in the spring of 2023. The property features a main building and 5 suite villas sprawled atop a hill, overlooking the valley with 16 rooms attached with luxurious amenities.
                            Each suite in villas is architecturally unique and custom-designed with Bhutanese architecture.
                            All our suite rooms offer breathtaking views of the valley, including the landmark Fortress,
                            the Trongsa Dzong, the mountains and the Mangdi River.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <SuiteFeatureSection
                    title="Junior Suite"
                    area='12 rooms 34 sqm 370 sq ft'
                    description={`
                        Framed by large windows, each suite captures stunning views of the mountains, valley, 
                        and iconic landmarks. Rooms 805-812 showcase the beautiful view of the Dzong fortress 
                        and the traditional bridge, while rooms 813-816 offer the serene view of the forest and 
                        mountain vistas.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/rooms/junior-suite-01.jpg"
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <SuiteFeatureSection
                    title="Deluxe Suite"
                    area='2 rooms 48 sqm 516 sq ft'
                    imagePosition='right'
                    imageHeight='600px'
                    objectPosition='object-center'
                    description={`
                            Private balconies feature outdoor soaking tubs, perfectly positioned to 
                            take in the panoramic views of the valley and mountains, creating an intimate 
                            connection with Bhutan's natural beauty.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/rooms/DSC_3789-Enhanced-NR.jpg"
                />
            </div>
            <div className='mt-6 sm:mt-[100px] mb-6 sm:mb-[100px]'>
                <SuiteFeatureSection
                    title="Luxury Suite"
                    area='2 rooms 95 sqm 1,022 sq ft'
                    imagePosition='left'
                    description={`
                        Spacious sanctuaries with separate living areas and private balconies offering 
                        uninterrupted views of the Trongsa Dzong, Watch Tower, and Mangdi River. 
                        Enhanced experience with the addition of a traditional wood-burning fireplace for 
                        cozy evenings.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/rooms/luxury-04.jpg"
                />
            </div>

        </React.Fragment>
    )
}

export default AccomodationPage