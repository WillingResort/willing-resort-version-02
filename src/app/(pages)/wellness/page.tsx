import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import TopTextSection from '@/components/ui/top-text-section';
import React from 'react'

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
                heroBannerBgImage="https://willingresort.github.io/assests-hosting/homepage/wellness.jpg"
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
                <FeatureSection
                    title="Traditional Bhutanese Healing Ritual"
                    imagePosition='left'
                    description={`
                            Relax and rejuvenate with our wellness experiences surrounded by nature. Enjoy a soothing 
                            sauna and steam bath, immersing yourself in the tranquility of the wilderness. 
                            Take a refreshing dip in our outdoor infinity pool, adorned with blooming rhododendrons
                            in spring and misty clouds in summer. Experience the **local hot stone bath, 
                            a unique and revitalizing traditional retreat.
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/wellness-01.jpeg"
                />
            </div>
        </React.Fragment>
    )
}

export default WellnessPage