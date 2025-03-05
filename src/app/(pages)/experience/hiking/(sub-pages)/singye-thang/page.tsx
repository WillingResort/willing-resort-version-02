import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Singye Thang (Lion’s ground) from Dorji Goenba | Willing Resort",
        description: "Perched on a scenic hill, Willing Resort blends Bhutanese charm with modern comfort.Stay in one of 16 elegant suites and soak in breathtaking views of Trongsa Dzong, mountains, and the Mangdi River.",
    };
}

const ExperiencePage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/place.jpg'
                headingText='Singye Thang (Lion’s ground) from Dorji Goenba'
                bodyText={`
                    The hike from Dorji Goenba to Singye Thang (Lion’s Ground) spans approximately 4-5 hours, starting from an elevation of 2760 meters
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience", href: "/experience" },
                    { label: "singye-thang" }
                ]}
            />

        </React.Fragment>
    )
}

export default ExperiencePage