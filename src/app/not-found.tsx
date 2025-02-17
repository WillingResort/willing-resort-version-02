import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Not Found | Willing Resort",
    };
}

const NotFound: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/rooms/luxury-01.jpg'
                headingText='Page Not Found'
                bodyText={``}
            />
            <Breadcrumb
                items={[
                    { label: "Not Found" },
                ]}
            />
        </React.Fragment>
    )
}

export default NotFound