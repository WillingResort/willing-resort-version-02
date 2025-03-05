import Breadcrumb from '@/components/ui/breadcrumb'
import HeroBanner from '@/components/ui/hero-banner'
import TimelineItem from '@/components/ui/timeline-items'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const WaterFallCafe = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/cafe/cafe02.jpg'
                headingText='Willing Waterfall Café'
                bodyText={`
                        Set against a spectacular 50-meter waterfall, our café has become a cherished landmark along Bhutan's east-west highway. 
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Waterfall Cafe" },
                ]}
            />
            <div className='mt-4 sm:mt-[50px]'>
                <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                    <div className="flex flex-wrap w-full flex-col-reverse sm:flex-row">
                        {/* Image on the Left */}
                        <div className="w-full sm:w-[60%] sm:pr-[60px] mb-10 sm:mb-[100px]">
                            <Image
                                className="h-auto w-full object-cover object-bottom"
                                src="https://willingresort.github.io/assests-hosting/images/cafe/DSC_3643.jpg"
                                alt='Experience Our cafe'
                                width={800}
                                height={500}
                            />
                        </div>
                        {/* Content Section */}
                        <div className="w-full sm:w-[35%]  p-6 flex flex-col justify-center items-center text-center">
                            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                                Willing Waterfall Café
                            </h1>
                            <p className="mt-5">
                                Set against a spectacular 50-meter waterfall, our café has become a cherished landmark along Bhutan's east-west highway.
                                Located just 15 minutes from Willing Resort, this unique destination draws local Bhutanese and international travelers,
                                making it a perfect stop between Trongsa and Bumthang. We serve freshly brewed coffees,
                                local teas, artisanal juices, and light meals, allowing guests to refresh and rejuvenate
                                while taking in the majestic natural setting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WaterFallCafe