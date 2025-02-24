import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Wellness | Willing Resort",
        description: "Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern comfort.Stay in one of 16 elegant suites and soak in breathtaking views of Trongsa Dzong, mountains, and the Mangdi River.",
    };
}

const WellnessPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/homepage/wellness.jpg'
                headingText='SPA Treatements'
                bodyText={`
                        Our wellness sanctuary combines ancient Bhutanese traditions with 
                        modern therapies. Set against the backdrop of natural mountain views, the spa offers a 
                        complete journey of rejuvenation in a natural setting.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Wellness" },
                ]}
            />
        </React.Fragment>
    )
}

export default WellnessPage