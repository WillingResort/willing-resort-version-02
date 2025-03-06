import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import TimelineItem from '@/components/ui/timeline-items';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: "Trongsa sightseeing - Taphey Goemba monastery hike | Willing Resort",
        description: "The trail, 30 minutes north of Trongsa, offers a rewarding hike through forests, sacred sites, and wildlife. Highlights include Dozhong Goemba, wildlife sightings, Singaythang with Gangkhar Puensum views, Taphey Goemba, and Yuling Monastery, blending natural beauty and cultural heritage.",
    };
}

const ExperiencePage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://sonamwangchuk77jr.github.io/image-hosting/images/adventures-and-activities/DSC6286.jpg'
                headingText='Trongsa sightseeing - Taphey Goemba monastery hike'
                bodyText={`
                    This hike, just 30 minutes from Trongsa, takes you through beautiful forests, sacred sites like Dozhong Goemba, wildlife, and amazing views of Gangkhar Puensum, ending at the historic Yuling Monastery.
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience / Hiking", href: "/experience/hiking" },
                    { label: "Trongsa-sightseeing" }
                ]}
            />
            <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
                <div className='flex flex-wrap w-full sm:flex-row'>
                    <div className="w-full sm:w-[70%] sm:pr-[40px]">
                        <Image
                            className="h-[500px] w-full object-cover object-center"
                            src='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_5758.jpeg'
                            alt='hike'
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="w-full sm:w-[30%] flex flex-col justify-center">
                        <h1 className='text-lg font-[600]'>Route Highlights:</h1>
                        <div className='mt-5'>
                            <TimelineItem
                                icon={<Icon icon="ph:person-simple-hike-fill" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Starting Point: Dorji Goenba"
                            />
                            <TimelineItem
                                icon={<Icon icon="gis:location-man" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Final Destination: Singye Thang (Lion’s Ground)"
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:arrow-up-fill" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Initial Ascent: Steep 30-35-degree climb"
                            />
                            <TimelineItem
                                icon={<Icon icon="material-symbols:elevation" width={20} />}
                                paddingBottom='pb-[20px]'
                                description="Elevation: 3950 meters"
                            />
                            <TimelineItem
                                icon={<Icon icon="mingcute:time-fill" width={20} />}
                                description="Total Duration: Approximately 4-5 hours"
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 sm:mt-[50px] sm:mb-[100px]'>
                    <p>
                        The trailhead is just 30 minutes north of Trongsa to one of Bhutan's most rewarding hikes.
                        This trek winds through pristine forests and sacred grounds, climbing 930m to reach heights of 3,410m.
                    </p>
                    <p className='pt-2'>
                        The journey begins at Dozhong Goemba, where ancient stories tell of a sacred stone
                        tub used by the local deity Yulha Menmo. With its simple yet elegant architecture,
                        this traditional temple holds deep historical connections to Bhutan's spiritual leaders.
                    </p>
                    <p className='pt-2'>
                        As the trail climbs, you'll walk through forests rich with wildlife. Lucky
                        hikers might spot the brilliant Himalayan Monal, Blood Pheasant, or elusive
                        Satyr Tragopan among the ancient conifers and blooming rhododendrons.
                    </p>
                    <p className='pt-2'>
                        Past a rustic yak herders' camp lies Singaythang - the Place of Lion - marked
                        by a distinctive lion-shaped rock formation. Here, the views reveal the mighty
                        Gangkhar Puensum (7,570m), Bhutan's highest unclimbed peak, alongside sweeping
                        vistas of traditional villages and the Trongsa valley below.
                    </p>
                    <p className='pt-2'>
                        The trail then descends to Taphey Goemba, where eight monks maintain
                        their meditation retreat around a magnificent two-storey statue of the 1001-armed
                        Chenresig. Your journey concludes at the historic Yuling Monastery, a sacred site
                        chosen by the great master Yongzin Ngagi Wangchuk in 1541, still housing precious
                        relics from his time.
                    </p>
                    <p className='pt-2'>
                        This trek perfectly balances natural wonders with Bhutan's rich cultural heritage,
                        offering an unforgettable journey through the heart of the kingdom.
                    </p>
                    <p>
                        Visit in spring (January-May) to witness hillsides ablaze with rhododendron
                        blooms, or choose autumn and winter (October-December) for crystal-clear views
                        of snow-capped Himalayas.
                    </p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ExperiencePage