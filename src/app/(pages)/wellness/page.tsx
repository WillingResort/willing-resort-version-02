import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: "Wellness || Willing Resort",
        description: "Our wellness sanctuary combines ancient Bhutanese traditions with modern therapies. Set against the backdrop of natural mountain views, the spa offers a complete journey of rejuvenation in a natural setting.",
    };
}

const WellnessPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage="https://willingresort.github.io/assests-hosting/homepage/slider-04.jpg"
                headingText=''
                bodyText=''
            />
            <Breadcrumb
                items={[
                    { label: "Wellness" },
                ]}
            />
            <TopTextSection
                title="SPA Treatements"
                description={`
                        Our wellness sanctuary combines ancient Bhutanese traditions with 
                        modern therapies. Set against the backdrop of natural mountain views, the spa offers a 
                        complete journey of rejuvenation in a natural setting.
                    `}
            />
            <div className='mt-6 sm:mt-[100px] mb-6 sm:mb-[100px]'>
                <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                    <div className='flex flex-wrap w-full sm:flex-row'>
                        {/* Image on the Left */}
                        <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[60%] sm:pr-[40px]">
                            <Image
                                className="h-[500px] lg:h-[650px] w-full object-cover object-center"
                                src='https://willingresort.github.io/assests-hosting/images/wellness-01.jpeg'
                                alt='wellness'
                                width={800}
                                height={500}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center ">
                            <h1 className="font-normal text-center text-heading tracking-heading text-secondaryColor uppercase">
                                SPA Treatments at Willing Resort
                            </h1>
                            <p className="mt-5">
                                Our wellness sanctuary combines ancient Bhutanese traditions with modern therapies.
                                Set against the backdrop of natural mountain views, the spa offers a complete journey
                                of rejuvenation in a natural setting.
                            </p>
                            <p className='italic pt-4 text-start'>Facilities: </p>
                            <ul className='pt-2 list-disc pl-5 text-start'>
                                <li>Sauna and Steam Bath: Indulge in our sauna and steam baths surrounded by nature and the wilderness.</li>
                                <li>Outdoor Infinity Pool: Swim in the infinity pool, beautifully adorned with rhododendron flowers in spring and the swirling clouds above during summer.</li>
                            </ul>
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WellnessPage