'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const WaterFallCafeCard = () => {
    const router = useRouter()
    return (
        <div className="container mt-5 sm:mt-[150px]  mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
            <div className="flex flex-col-reverse  sm:flex-row flex-wrap w-full">
                <div className="w-full sm:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center">
                    <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
                        Willing Waterfall Cafe
                    </h1>
                    <p className="mt-5 text-center">
                        Set against a breathtaking 50-meter waterfall, our café is a must-visit along Bhutan’s east-west highway. Just 15 minutes from Willing Resort, it offers fresh coffee, local teas, and light meals, providing a perfect stop between Trongsa and Bumthang
                    </p>
                    <button onClick={() => router.push('/waterfall-cafe')} className="outline mt-10 outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none">
                        Explore More
                    </button>
                </div>
                <div className="w-full sm:w-[70%] sm:pl-[60px]">
                    <img className="h-[500px] w-[100%]" style={{ objectFit: 'cover', objectPosition: 'bottom' }} src="https://willingresort.github.io/assests-hosting/images/cafe/DSC_3633.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WaterFallCafeCard