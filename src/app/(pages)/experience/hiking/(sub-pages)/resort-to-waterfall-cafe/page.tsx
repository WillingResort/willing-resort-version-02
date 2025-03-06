import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import TimelineItem from '@/components/ui/timeline-items';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import Image from 'next/image';

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
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_9618.JPG'
                headingText='Singye Thang from Willing Resort and return via Semjee Village'
                bodyText={`
                    This hike is designed to be a more leisurely experience, suitable for families and children. It follows a farm road from Willing Resort to Semjee Village, providing a scenic and culturally rich journey.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience / Hiking", href: "/experience/hiking" },
                    { label: "Resort to Waterfall Cafe" }
                ]}
            />
            <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                <div className='flex flex-wrap w-full sm:flex-row'>
                    <div className="w-full sm:w-[70%] sm:pr-[40px]">
                        <Image
                            className="h-[500px] w-full object-cover object-bottom"
                            src='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_3164.jpeg'
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
                                description="Starting Point: Willing Resort"
                            />
                            <TimelineItem
                                icon={<Icon icon="gis:location-man" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Final Destination: Arrive at Singye Thang (Lion’s Ground)"
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:arrow-up-fill" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Initial Ascent: Steep 45-degree climb"
                            />
                            <TimelineItem
                                icon={<Icon icon="material-symbols:elevation" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Elevation: 3950 meters"
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:time-fill" width={20} />}
                                description="Total Duration:  Approximately 4-5 hours"
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 sm:mt-[50px] sm:mb-[100px]'>
                    <p>
                        This challenging route begins at Willing Resort, reaching Tafi Goenba after one hour before continuing to Singye Thang for another two hours. Unlike the Dorji Goenba route, this trail features a demanding 45-degree uphill climb through blueberry shrubs and rhododendron flowers.
                    </p>
                    <p className='pt-4'>
                        The panoramic views of Nubi Geog villages reward hikers on the side of the opposite valley. The return journey includes a visit to Semjee Village for traditional Bhutanese tea, followed by a one-hour hike back to Willing Resort. The trail showcases the region's rich biodiversity, from rhododendron flowers to blueberry shrubs.
                    </p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ExperiencePage