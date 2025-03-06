import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'
import Image from 'next/image';


export async function generateMetadata() {
    return {
        title: "Mangdue Foot Trail (Between Dzong and Thugma Drag, Viewpoint) | Willing Resort",
        description: "The Mangdue Foot Trail, a 2-hour hike each way, connects Trongsa Dzong’s gates, passes the historic bridge, and climbs steeply to Thumang Drag, offering a glimpse of Bhutan’s historical trade routes.",
    };
}

const ExperiencePage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/homepage/slider-05.jpg'
                headingText='Mangdue Foot Trail (Between Dzong and Thugma Drag, Viewpoint)'
                bodyText={`
                        The Mangdue Foot Trail, a 2-hour hike each way, connects Trongsa Dzong’s gates, passes the historic bridge, and climbs steeply to Thumang Drag, offering a glimpse of Bhutan’s historical trade routes.
                    `}
            />

            <Breadcrumb
                items={[
                    { label: "Experience / Hiking", href: "/experience/hiking" },
                    { label: "Mangdue-Foot-Trail" }
                ]}
            />
            <div className="container mb-6 sm:mb-[100px] mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                <div className='flex flex-wrap w-full sm:flex-row'>
                    <div className="w-full sm:w-[60%] sm:pr-[40px]">
                        <Image
                            className="h-[500px] w-full object-cover object-center"
                            src='https://sonamwangchuk77jr.github.io/image-hosting/images/adventures-and-activities/DSC6286.jpg'
                            alt='hike'
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="w-full sm:w-[40%] flex flex-col justify-center">
                        <h1 className='text-lg font-[600]'>Mangdue Foot Trail (Between Dzong and Thugma Drag, Viewpoint)</h1>
                        <p>(Duration: 2 hours each way)</p>
                        <div className='mt-5'>
                            <p>
                                Historically, the road connecting eastern and western Bhutan passed through Trongsa Dzong's courtyard. The massive doors of the dzong could be shut on the Penlop's (Governor's) command, effectively dividing the country and allowing the governor to control trade and collect larger tax revenues.
                            </p>
                            <p className='pt-2'>
                                The ancient foot trail passes through the Eastern Gate and exits through the Western Gate, descending downhill to the Mangdi River. The traditional bridge stands as a testament to historical architecture. From there, the trail climbs steadily and steeply up the other side of the hill towards the historic Thumang Drag.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ExperiencePage