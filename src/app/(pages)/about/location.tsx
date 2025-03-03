import TimelineItem from '@/components/ui/timeline-items'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function WillingResortLocation() {
    return (
        <div className='mt-6 sm:mt-[35px] mb-6 sm:mb-[100px]'>
            <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                <div className='flex flex-wrap w-full sm:flex-row'>
                    <div className="w-full sm:w-[50%]">
                        <h1 className="font-normal text-heading text-secondaryColor capitalize">
                            By Road
                        </h1>
                        <div className="mt-6">
                            <TimelineItem
                                icon={
                                    <Icon icon="ix:car-filled" width={20} />}
                                title="Paro to Willing Resort"
                                description="6.5 hours including stops"
                            />
                            <TimelineItem
                                icon={<Icon icon="ix:car-filled" width={20} />}
                                title="Thimphu to Willing Resort"
                                description="5 hours including stops"
                            />
                            <TimelineItem
                                icon={<Icon icon="ix:car-filled" width={20} />}
                                title="Punakha to Willing Resort"
                                description="4 hours including stops"
                            />
                            <TimelineItem
                                icon={<Icon icon="ix:car-filled" width={20} />}
                                title="Gangtey (Phobjikha Valley) to Willing Resort"
                                description="2.5 hours"
                            />
                            <TimelineItem
                                icon={<Icon icon="ix:car-filled" width={20} />}
                                title="Bumthang to Willing Resor"
                                description="2.5 hours"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%]">
                        <h1 className="font-normal text-heading text-secondaryColor capitalize">
                            By Air
                        </h1>
                        <div className="mt-6">
                            <TimelineItem
                                icon={
                                    <Icon icon="mingcute:flight-takeoff-fill" width={20} />}
                                description="There are two airlines operating in Bhutan: Drukair and Bhutan Airlines. Paro International Airport is Bhutan's only international airport with flight connections from Bangkok, Singapore, Kathmandu, Dubai, Delhi, Kolkata, Mumbai, Bangalore, Gaya, Guwahati, Ho Chi Minh City and Dhaka."
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:flight-takeoff-fill" width={20} />}
                                description="Within Bhutan, Drukair operates domestic flights to three airports: Bathpalathang Airport (Bumthang), Yongphulla Airport (Trashigang), and Gelephu Airport. From Paro Airport, guests can opt for the convenience of the Royal Bhutan Helicopter Services 40-minute helicopter transfer directly to Willing Resort."
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:flight-takeoff-fill" width={20} />}
                                description="Alternatively, you can also fly into Bathpalathang Airport and enjoy a scenic 2.5-hour drive to the resort through the gorgeous Bumthang valley."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WillingResortLocation