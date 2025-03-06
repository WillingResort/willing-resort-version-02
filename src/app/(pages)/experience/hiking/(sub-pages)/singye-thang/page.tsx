import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import TimelineItem from '@/components/ui/timeline-items';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: "Singye Thang (Lion’s ground) from Dorji Goenba | Willing Resort",
        description: "The hike from Dorji Goenba to Singye Thang (Lion’s Ground) spans approximately 4-5 hours, starting from an elevation of 2760 meters",
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
                    { label: "Experience / Hiking", href: "/experience/hiking" },
                    { label: "singye-thang" }
                ]}
            />
            <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                <div className='flex flex-wrap w-full sm:flex-row'>
                    <div className="w-full sm:w-[70%] sm:pr-[40px]">
                        <Image
                            className="h-[500px] w-full object-cover object-center"
                            src='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_0983.jpeg'
                            alt='hike'
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="w-full sm:w-[30%] flex flex-col justify-center">
                        <h1 className='text-lg font-[600]'>Route Highlights:</h1>
                        <div className='mt-5'>
                            <TimelineItem
                                icon={<Icon icon="ph:person-simple-hike-fill" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Starting Point: Dorji Goenba"
                            />
                            <TimelineItem
                                icon={<Icon icon="gis:location-man" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Final Destination: Singye Thang (Lion’s Ground)"
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:arrow-up-fill" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Initial Ascent: Steep 30-35-degree climb"
                            />
                            <TimelineItem
                                icon={<Icon icon="material-symbols:elevation" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Elevation: 3950 meters"
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:time-fill" width={20} />}
                                description="Total Duration: Approximately 4-5 hours"
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 sm:mt-[50px] sm:mb-[100px]'>
                    <p>
                        Beginning at 2760 meters, this trail was historically used by yak herders and villagers transporting timber and shingles for house construction. After 1.5 hours, hikers are rewarded with breathtaking views of Gangkar Phunsum, the world's highest unclimbed mountain. Another hour brings you to Tafi Goenba, a monastery built by the 1st king for meditation.
                    </p>
                    <p>
                        The surrounding landscape features rich alpine flora, including wild blueberry shrubs in early spring. It also offers northern views of Gangkar Phuensum and the Nubi Geog villages valley. The descent to Willing Resort takes approximately 1.5 hours.
                    </p>
                    <p>
                        The best months to hike are from October to April when the weather is most favorable for exploring the stunning landscapes.
                    </p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ExperiencePage