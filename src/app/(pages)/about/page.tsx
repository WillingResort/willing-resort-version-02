import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "About | Willing Resort",
        description: "Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern comfort.Stay in one of 16 elegant suites and soak in breathtaking views of Trongsa Dzong, mountains, and the Mangdi River.",
    };
}

const AboutPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/NZ7_4477.jpg'
                headingText='Luxurious Accommodation at Willing Resort'
                bodyText={`
                      Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern
                        comfort. Stay in one of 16 elegant suites and soak in breathtaking views of
                        Trongsa Dzong, mountains, and the Mangdi River.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "About" },
                ]}
            />
        </React.Fragment>
    )
}

export default AboutPage