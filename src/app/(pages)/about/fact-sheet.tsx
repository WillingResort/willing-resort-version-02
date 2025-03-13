
import React from 'react'
import Image from 'next/image'

const WillingFactSheet: React.FC = () => {
    return (
        <React.Fragment>
            <div className='mt-6 sm:mt-[100px] mb-6 sm:mb-[100px]'>
                <div className="container mx-auto px-4">
                    <div className='flex flex-wrap w-full sm:flex-row'>
                        <div className="w-full sm:w-[55%] sm:pr-[50px]">
                            <Image
                                className="h-[500px] w-full rounded-[10px] object-cover object-center  bg-gradient-to-r from-black/50 to-transparent"
                                src='https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg'
                                alt='willing resort building'
                                width={800}
                                height={500}
                            />
                        </div>
                        <div className="w-full sm:w-[45%] flex flex-col justify-center items-start mt-6 sm:mt-0">
                            <h1 className="font-normal uppercase text-heading tracking-heading text-secondaryColor">
                                Willing Resort
                            </h1>
                            <div className='mt-5'>
                                <p>
                                    Bhutan, the great Himalayan kingdom, is a land of ancient Buddhist traditions and pristine natural beauty. A deeply spiritual nation, it has fiercely guarded its culture and environment against modern encroachments.
                                </p>
                                <p className='pt-2'>
                                    Nestled amidst the grandeur of Bhutan's eastern Himalayas lies Trongsa, a region steeped in history and natural wonders. This spiritual heartland is home to Willing Resort, offering an authentic Bhutanese experience cradled by majestic mountains where ancient monasteries grace the mountains.
                                </p>
                                <p className='pt-2'>
                                    Trongsa holds a special place in the kingdom's cultural heritage as the ancestral home of Bhutan's revered monarchy. The imposing Trongsa Dzong, originally a meditation site dating back to 1543, is a silent witness to the nation's unification under the Wangchuck dynasty. Its fortified walls and sacred shrines have borne testament to Bhutan's storied past.
                                </p>
                                <p className='pt-2'>
                                    Beyond the historical significance, Trongsa enchants with its natural splendor. Pristine forests, rushing glacier-fed rivers, and vibrant Bhutanese architecture harmoniously blend into breathtaking landscapes. This is a place where ancient wisdom meets modern comforts, and where you can truly disconnect and experience the last Shangri-La.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default WillingFactSheet