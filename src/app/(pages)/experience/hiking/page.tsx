import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Experience || Willing Resort",
        description: "Discover a range of breathtaking hikes at Willing Resort, from family-friendly farm road trails to challenging mountain climbs. Experience Bhutan's natural beauty, rich culture, and historic sites",
    };
}

const ExperiencePage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_5758.jpeg'
                headingText='Unforgettable Moments, Timeless Memories'
                bodyText={`
                    Discover a range of breathtaking hikes at Willing Resort, from family-friendly farm road trails to challenging mountain climbs. Experience Bhutan's natural beauty, rich culture, and historic sites
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
                    title="Singye Thang – Lion’s Ground"
                    imagePosition='right'
                    description={`
                        The Singye Thang hike starts at Dorji Goenba (2760m) and ascends steeply to 3950m. Historically used by yak herders, it offers breathtaking views of Gangkar Phunsum. The trail features alpine flora and descends to Willing Resort. Ideal hiking months: October to April.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_3822.jpeg"
                    buttonText='Explore More'
                    hrefLink='/experience/hiking/singye-thang'
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Singye Thang via Semjee Village"
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
            <div className='mt-6 sm:mt-[100px]'>
                <TopTextSection
                    title="Short Adventure to Honey Bee Cliff (2 Hours)"
                    description={`
                    A brief but rewarding trek to a historic honey harvesting site. The impressive rocky cliff, 
                    complete with natural waterfalls, still houses large honey bee nests. Until recently, local 
                    villagers had harvested honey and wax here by suspending themselves from ropes. The honey 
                    served medicinal purposes, while the wax was essential for candles, yarn weaving, and other 
                    village needs.
                    `}
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Trongsa sightseeing - Taphey Goemba monastery hike"
                    imagePosition='right'
                    description={`
                        This rewarding trek near Trongsa climbs 930m to 3,410m, passing forests, sacred sites, and yak camps. Highlights include Dozhong Goemba, Singaythang’s lion-shaped rock, and stunning views of Gangkhar Puensum. Best visited in spring for flowers or autumn for clear skies.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/honey-bee-cliff.png"
                    buttonText='Explore More'
                    hrefLink='/experience/hiking/honey-bee-cliff'
                />
            </div>
            <div className='mt-6 sm:mt-[100px] mb-5 '>
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
            <div className="container mt-5 sm:mt-[100px] sm:mb-[100px] mx-auto px-4">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="font-normal w-[100%] sm:w-[50%] text-heading tracking-heading text-secondaryColor uppercase text-center">
                        Willing Resort to Willing Waterfall Café
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                            A family-friendly hike following a farm road from Willing Resort to Semjee Village. Perfect for those seeking a gentle introduction to Bhutan's natural beauty and cultural heritage. The trail winds through dense forest with bird-watching opportunities, culminating at the scenic Willing Waterfall Café.
                        </p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ExperiencePage