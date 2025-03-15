import React from 'react'
import Button from '../ui/button'

const WaterFallCafeCard = () => {
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
                    <Button buttonText="Explore More" hrefLink="/waterfall-cafe" />
                </div>
                <div className="w-full sm:w-[70%] sm:pl-[60px]">
                    <img className="h-[500px] w-[100%] bg-gradient-to-r from-black/50 to-transparent" style={{ objectFit: 'cover', objectPosition: 'center' }}
                        src="https://willingresort.github.io/assests-hosting/images/cafe/waterfallcafe.jpeg" alt="water-fall image" />
                </div>
            </div>
        </div>
    )
}

export default WaterFallCafeCard