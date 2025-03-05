import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import Image from 'next/image';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Dinning || Willing Resort",
        description: "Our dining spaces offer an exquisite blend of Bhutanese tradition and contemporary elegance, paired with breathtaking views of the Trongsa Valley and Mangdi River.",
    };
}

const DinningPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/dinning/dinning.jpg'
                headingText='A Culinary Journey with a View'
                bodyText={`
                        Indulge in an exceptional dining experience at Willing Resort,
                         where breathtaking views of the Trongsa valley and mountains 
                         set the perfect backdrop for your culinary journey. Our dining 
                         spaces are designed to offer warmth and comfort, with a cozy 
                         fireplace corner enhancing the ambiance.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Dinning" },
                ]}
            />
            <div className='mt-6 sm:mt-[100px]'>
                <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                    <div className='flex flex-wrap w-full sm:flex-row'>
                        {/* Image on the Left */}
                        <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[60%] sm:pr-[40px]">
                            <Image
                                className="h-[500px] lg:h-[700px] w-full object-cover object-center"
                                src='https://willingresort.github.io/assests-hosting/images/dinning/DSC_4043.jpg'
                                alt='dinning image'
                                width={800}
                                height={500}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center text-center">
                            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                                Dining
                            </h1>
                            <p className="mt-5">
                                Our unique dining space, enriched by dramatic views of the valley and
                                mountains, creates a captivating setting to savor seasonal delicacies.
                                The cozy corner beside the fireplace offers a culinary haven, presenting
                                delectable meals in a truly serene ambiance.
                            </p>
                            <p className='mt-2'>
                                In addition to our own home-made range of pastries, the blueberry cake is made
                                from wild blueberries harvested above Willing Resort during the months of February and March.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dinning Card Section */}
            <div className='container mx-auto mt-6 sm:mt-[100px] px-4 sm:p-0 md:p-0 mb-8 sm:mb-[100px]'>
                <div className="flex flex-col gap-2 mt-4 sm:mt-[80px]">
                    <Image
                        className="h-[600px] w-full object-cover object-center"
                        src="https://willingresort.github.io/assests-hosting/images/dinning/DSC_4007.jpg"
                        alt="Sip & Savor"
                        width={800}
                        height={500}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default DinningPage