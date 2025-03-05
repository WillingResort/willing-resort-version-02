import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Experience || Willing Resort",
        description: "Discover a world of cultural, spiritual, and adventure-filled experiences at Willing Resort. Whether you seek serenity, exploration, or authentic Bhutanese traditions, our curated activities offer something special for every traveler.",
    };
}

const ExperiencePage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_5758.jpeg'
                headingText='Unforgettable Moments, Timeless Memories'
                bodyText={`
                    Discover a world of cultural, spiritual, and adventure-filled experiences 
                    at Willing Resort. Whether you seek serenity, exploration, or authentic Bhutanese traditions,
                    our curated activities offer something special for every traveler.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience" },
                    { label: "Hiking" },
                ]}
            />
            <TopTextSection
                title="Adventure All Year Round"
                description={`
                     Adventure awaits in Trongsa all year round! Spring brings lush blooms and flowing
                     rivers, summer is perfect for trekking and biking, autumn paints the landscape 
                     in golden hues, and winter offers serene, snow-covered escapes. At Willing Resort, 
                     experience Bhutan’s beauty in every season—where nature, culture, and adventure blend 
                     seamlessly for unforgettable memories.
                    `}
            />
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Singye Thang (Lion’s ground) from Dorji Goenba"
                    imagePosition='right'
                    description={`
                            The hike from Dorji Goenba to Singye Thang spans approximately 4-5 hours,
                            starting from an elevation of 2760 meters. Historically, this trail was used by yak and
                            cow herders, and by the Willing and Semjee villagers for transporting timber and shingles.
                            It offers a rich blend of historical and natural experiences.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_3822.jpeg"
                    buttonText='Explore More'
                    hrefLink='/experience/hiking/singye-thang'
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Hike to Lion’s Ground from Willing Resort"
                    imagePosition='left'
                    description={`
                            This hike is designed to be a more leisurely experience, suitable for 
                            families and children. It follows a farm road from Willing Resort to 
                            Semjee Village, providing a scenic and culturally rich journey.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_9618.JPG"
                    buttonText='Explore More'
                    hrefLink='/experience/hiking/resort-to-waterfall-cafe'
                />
            </div>
            <div className="container mt-5 sm:mt-[100px] md:mt-[100px] lg:mt-[100px]  mx-auto px-4 h-[70vh] bg-[url('https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_3164.jpeg')] bg-cover bg-bottom flex flex-col justify-end relative">
            </div>

            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Adventures to Honey Bee Cliff (2 Hours)"
                    imagePosition='right'
                    description={`
                        Embark on an adventurous visit to the honeybee and wax harvesting cliffside, 
                        offering breathtaking views of rocky cliffs and waterfalls. Once, local 
                        villagers harvested honey and wax by hanging themselves with ropes. The honey 
                        served medicinal purposes, while wax was used for candles, yarn, and domestic 
                        needs. This unique site provides a fascinating glimpse into traditional, cultural practices.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/honey-bee-cliff.png"
                    buttonText='Explore More'
                    hrefLink='/experience/hiking/honey-bee-cliff'
                />
            </div>
            <div className='mt-6 sm:mt-[100px] mb-5 sm:mb-[100px]'>
                <FeatureSection
                    title="Mangdue Foot Trail"
                    imagePosition='left'
                    description={`
                        Historically, the road connecting eastern and western Bhutan passed through 
                        Trongsa Dzong's courtyard. The massive doors of the dzong could be shut on the Penlop’s 
                        (Governor’s) command, effectively dividing the country 
                        and allowing the governor to control trade and collect larger tax revenues.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/homepage/slider-05.jpg"
                    buttonText='Explore More'
                    hrefLink='/experience/hiking/mangdue-foot-trail'
                />
            </div>

        </React.Fragment>
    )
}

export default ExperiencePage