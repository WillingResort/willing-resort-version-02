import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'
import { festivals } from '../data/festival';
import Breadcrumb from '@/components/ui/breadcrumb';

async function FestivalDetailsPage({
    params, }: {
        params: Promise<{ festivalId: string }>
    }) {
    const festivalId = (await params).festivalId;

    const festivalData = festivals.find(festival => festival.id === festivalId);
    if (!festivalData || !festivalId) {
        return (
            <>
                <h1>Festival not found</h1>
            </>
        )
    }
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage={festivalData.image}
                headingText={festivalData.name}
                bodyText={festivalData.description}
            />
            <Breadcrumb
                items={[
                    { label: "Festival", href: "/festivals" },
                    { label: festivalData.name },
                ]}
            />
            <div className='container px-4 sm:px-[40px] md:px-[40px] lg:px-[70px] mx-auto mb-5 sm:mb-[100px]'>
                <p>
                    {festivalData?.detailsDescription}
                </p>
            </div>

        </React.Fragment>
    )
}

export default FestivalDetailsPage