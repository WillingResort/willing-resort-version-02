import Breadcrumb from '@/components/ui/breadcrumb'
import FeatureSection from '@/components/ui/feature-section'
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
            <div className='mt-6 sm:mt-[50px]'>
                <FeatureSection
                    title="Experience Our cafe"
                    description={`
                        Waterfall Café, just 15 minutes from Willing Resort along the east-west highway, 
                        attracts both local Bhutanese and international travelers. It’s the ideal stop between 
                        Trongsa and Bumthang, offering freshly brewed coffees, local teas, artisanal juices, 
                        light meals, and stunning views of a 50-meter waterfall
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/cafe/cafe05.jpg"
                />
            </div>
            <div className='mt-6 sm:mt-[100px] mb-6 sm:mb-[100px]'>
                <div className="container mx-auto px-4 sm:px-[34px]">
                    <div className='flex flex-wrap w-full flex-col-reverse sm:flex-row'>
                        {/* Content Section */}
                        <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] p-6  flex flex-col justify-center ">
                            <h1 className="font-normal text-heading  text-secondaryColor uppercase">
                                Location, Cuisine, & Ambiance
                            </h1>
                            <div className="mt-6">
                                <TimelineItem
                                    icon={<Icon icon="mdi:map-marker-outline" width={20} />}
                                    title="Strategic Location"
                                    description="Conveniently located by the east-west highway, Waterfall Café rests at the foothill of a stunning 50-meter waterfall, offering a peaceful retreat in nature."
                                />
                                <TimelineItem
                                    icon={<Icon icon="mdi:food-variant" width={20} />}
                                    title="Culinary Delights"
                                    description="The café offers a variety of teas, coffees, pastries, pizza, burgers, hot chocolates, juices, and soft drinks. Guests can enjoy delicious breakfasts, lunches, and dinners with continental, Chinese, Indian, and Bhutanese dishes in a serene waterfall setting."
                                />
                                <TimelineItem
                                    icon={<Icon icon="mdi:waterfall" width={20} />}
                                    title="Ambiance and Attraction"
                                    description="The café offers a tranquil, picturesque ambiance, with the awe-inspiring beauty of the waterfall enhancing the entire experience."
                                />
                            </div>
                        </div>
                        {/* Image on the right */}
                        <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[60%] sm:pr-[40px]">
                            <Image
                                className="h-[500px] lg:h-[500px] w-full object-cover object-center"
                                src='https://willingresort.github.io/assests-hosting/images/cafe/cafe01.jpg'
                                alt='wellness'
                                width={800}
                                height={500}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WaterFallCafe