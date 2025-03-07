import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'
import StorySection from './our-story';
import WillingResortLocation from './location';
import WillingFactSheet from './fact-sheet';

export async function generateMetadata() {
    return {
        title: "About || Willing Resort",
        description: "Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern comfort.Stay in one of 16 elegant suites and soak in breathtaking views of Trongsa Dzong, mountains, and the Mangdi River.",
    };
}

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
            <StorySection />
            <WillingFactSheet />
            <div className='container mt-4 sm:mt-[40px] mx-auto px-4'>
                <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                    Location
                </h1>
                <p className='w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] mt-3'>
                    Willing Resort enjoys a superior location in Trongsa valley. Trongsa sits at the crossroads connecting the eastern reaches to western Bhutan, making it an ideal base to explore the kingdom's iconic destinations.
                </p>
            </div>
            <WillingResortLocation />
        </React.Fragment>
    )
}

export default AboutPage