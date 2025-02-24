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
                headingText='Unforgettable Moments, Timeless Memories'
                bodyText={`
                    Discover a world of cultural, spiritual, and adventure-filled experiences 
                    at Willing Resort. Whether you seek serenity, exploration, or authentic Bhutanese traditions,
                    our curated activities offer something special for every traveler.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience", href: "/experience" },
                    { label: "Mangdue-Foot-Trail" }
                ]}
            />

        </React.Fragment>
    )
}

export default ExperiencePage