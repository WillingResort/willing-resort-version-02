import Breadcrumb from '@/components/ui/breadcrumb';
import Card from '@/components/ui/card';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import Image from 'next/image';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Dinning | Willing Resort",
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
            <div className="container mt-5 mx-auto px-4">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="font-normal w-[100%] sm:w-[50%] text-heading tracking-heading text-secondaryColor uppercase text-center">
                        Authentic Bhutanese  & International Cuisine
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                            Our chefs blend Bhutanese flavors with international cuisine, using fresh,
                            locally sourced ingredients. Enjoy traditional dishes like <b>Ema Datshi</b> or
                            global favorites crafted with organic produce and aromatic spices. Indulge in our
                            <b> signature blueberry cake</b>, made from wild blueberries.
                            Every meal at Willing Resort is a celebration of taste and culture.
                        </p>
                    </div>
                </div>
            </div>
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
                                Scenic Dining at Willing Resort
                            </h1>
                            <p className="mt-5">
                                Indulge in a dining experience like no other, where breathtaking mountain views meet
                                exquisite cuisine. At Willing Resort, enjoy a leisurely breakfast or a gourmet meal in
                                the fresh mountain air, surrounded by nature’s beauty. Savor locally inspired flavors,
                                fresh fruits, and handcrafted beverages while taking in the serene landscape. Whether
                                it’s a quiet morning coffee or a vibrant sunset dinner, every moment at our outdoor
                                dining space is designed to delight your senses and create unforgettable memories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dinning Card Section */}
            <div className='container mx-auto mt-6 sm:mt-[100px] px-4 sm:p-0 md:p-0 mb-8 sm:mb-[100px]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card
                        imageSrc="https://willingresort.github.io/assests-hosting/images/dinning/dinning-02.jpg"
                        title="Dining Venues"
                        description={`
                            The Main Restaurant offers a cozy ambiance with valley views and a seasonally curated menu.
                            The Fireplace Lounge provides a warm setting by the hearth, perfect for a comforting meal or evening drink. 
                            For open-air dining, the Outdoor Terrace offers fresh mountain air and panoramic views, ideal for breakfast, 
                            lunch, or a romantic candlelit dinner.`}
                    />
                    <Card
                        imageSrc="https://willingresort.github.io/assests-hosting/images/dinning/dinning-01.JPG"
                        title="Private Dining"
                        description={`
                         Enjoy a Private BBQ in the Woods, a secluded dining experience with a delicious barbecue feast. 
                         Treehouse Dining offers a unique meal with stunning nature views. Just 15 minutes away, 
                         Willing Waterfall Café serves freshly brewed coffee, local teas, and artisanal juices beside a 
                         breathtaking 50-meter waterfall for a truly serene escape.`}
                    />
                    <Card
                        imageSrc="https://willingresort.github.io/assests-hosting/images/dinning/DSC_4007.jpg"
                        title="Sip & Savor"
                        description={`
                            Pair your meals with Bhutanese herbal teas, handcrafted cocktails, or fine wines. 
                            Savor a steaming cup of Suja (butter tea) or enjoy a classic international drink. 
                            Whether you prefer something traditional or contemporary, our bar and lounge offer 
                            a selection that caters to all tastes, enhancing your dining experience with every sip.
                            `}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default DinningPage