import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: "Wellness | Willing Resort",
        description: "Our wellness sanctuary combines ancient Bhutanese traditions with modern therapies. Set against the backdrop of natural mountain views, the spa offers a complete journey of rejuvenation in a natural setting.",
    };
}

const WellnessPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage="https://willingresort.github.io/assests-hosting/images/wellness-01.jpeg"
                headingText='SPA Treatements'
                bodyText={`
                        Our wellness sanctuary combines ancient Bhutanese traditions with 
                        modern therapies. Set against the backdrop of natural mountain views, the spa offers a 
                        complete journey of rejuvenation in a natural setting.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Wellness" },
                ]}
            />
            <TopTextSection
                title="Nature's Healing Instinct"
                description={`
                        Make time for mind, body, and soul connection in the tranquil sanctuary 
                        of the Willing Resort Spa Treatments. Championing holistic health, this is
                        the destination for relaxation and recreation, wrapped in the wonders of Willing's
                        expansive ecosystems.
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
                        <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center text-center">
                            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                                Traditional Bhutanese Healing Ritual
                            </h1>
                            <p className="mt-5">
                                Relax and rejuvenate with our wellness experiences surrounded by nature. Enjoy a soothing
                                sauna and steam bath, immersing yourself in the tranquility of the wilderness.
                                Take a refreshing dip in our outdoor infinity pool, adorned with blooming rhododendrons
                                in spring and misty clouds in summer. Experience the local hot stone bath,
                                a unique and revitalizing traditional retreat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WellnessPage