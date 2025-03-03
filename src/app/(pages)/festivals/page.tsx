import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'
import FestivalsSection from './components/festival-section-card';

export async function generateMetadata() {
    return {
        title: "Festival || Willing Resort",
        description: "Bhutan’s festivals, known as Tshechus and Drubchens, are vibrant expressions of faith, devotion, and community spirit. Trongsa, the spiritual heartland of Bhutan, hosts some of the kingdom’s most sacred festivals. From ancient masked dances at Trongsa Dzong to the community-driven Black Mountain Festival, each event offers a rare glimpse into Bhutan’s living heritage.",
    };
}

const FestivalPage: React.FC = () => {

    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_5418.jpeg'
                headingText='Festivals in Trongsa'
                bodyText={`
                        Immerse yourself in Bhutan’s rich heritage through vibrant festivals, 
                        sacred rituals, and mesmerizing masked dances. Witness ancient traditions 
                        come to life in Trongsa, the spiritual heart of the Himalayan kingdom.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Festival" },
                ]}
            />
            <TopTextSection
                title="Festivals & Cultural Celebrations in Trongsa"
                description={`
                    Bhutan’s festivals, known as Tshechus and Drubchens, are vibrant expressions of faith, 
                    devotion, and community spirit. Trongsa, the spiritual heartland of Bhutan, hosts some of 
                    the kingdom’s most sacred festivals. From ancient masked dances at Trongsa Dzong to the 
                    community-driven Black Mountain Festival, each event offers a rare glimpse into Bhutan’s 
                    living heritage.
                    `}
            />
            <FestivalsSection />
        </React.Fragment>
    )
}

export default FestivalPage