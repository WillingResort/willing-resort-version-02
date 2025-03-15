import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

interface Activity {
    title: string;
    imageUrl: string;
    imagePosition: "left" | "right";
    description: string;
    duration?: string;
    additionalDetails?: string;
    isFree?: boolean;
}

const otherActivities: Activity[] = [
    {
        title: "Dye textiles",
        imagePosition: "left",
        imageUrl: "https://bhutan-textiles.com/wp-content/uploads/2022/08/Diapositive4.jpeg",
        description: "Immerse yourself in the ancient art of textile dyeing at the Tarayana Foundation's nettle textile centre in Langthel, Trongsa. Here, local artisans keep alive the traditional dyeing processes using naturally available ingredients. Watch and learn as they create vibrant colors from symplocos (zim), stic lac (jatsoe), madder (tsoe), and buckwheat flour. Guests are invited to participate in the dyeing process, creating their own naturally dyed textiles under expert guidance.",
    },
    {
        title: "Making Pottery",
        imagePosition: "right",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/pottery-01.jpg",
        description: "Journey to the Pottery Centre in Langthel, a cultural treasure established by Her Majesty the Queen Mother Ashi Dorji Wangmo Wangchuck through the Tarayana Foundation. Located 1.5 hours south of Trongsa, this centre preserves the ancient pottery traditions of the indigenous Monpa community. This enriching experience offers insight into Bhutanese craftsmanship while supporting local artisans.",
        duration: "One day trip combined with a visit to Samcholing Tea Garden",
    },
    {
        title: "Samcholing Tea Garden",
        imagePosition: "left",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/Samcholing-tea-garden.jpg",
        description: "Discover the unique story of Samcholing Tea, cultivated in the pristine environment of Samcholing Village. This organic tea plantation, a cherished gift from the Second King, continues to be a source of pride and livelihood for the Samdrupcholing community. Nestled in the high Himalayas, the garden produces exceptional tea while preserving Bhutanese heritage.",
        duration: "One day trip combined with a visit to the Pottery Centre",
    },
    {
        title: "Bow and Arrow",
        imagePosition: "right",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/activities02.svg",
        description: "Experience Bhutan's national sport with complimentary archery sessions at the resort. Practice with a traditional 'pagshing' bow, masterfully crafted from thick bamboo, and arrows made from lightweight bamboo stems. Learn the traditional scoring system where teams compete for points.",
        isFree: true,
    },
    {
        title: "Cooking Class by local villagers",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/activities03.svg",
        imagePosition: "left",
        description: "Willing Resort can arrange local cooking classes for guests, offering an opportunity to learn about Bhutanese culinary traditions and cooking techniques directly from local villagers. These intimate cooking sessions reveal traditional techniques, local ingredients, and time-honored recipes passed through generations.",
    },
    {
        title: "Private BBQ Lunch or Dinner in The Woods",
        imagePosition: "right",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/activities01.svg",
        description: "Enhance your stay with a private dining experience in the wilderness surrounding Willing Resort. Choose between lunch or dinner served in the pristine forest setting, where traditional flavors meet natural splendor.",
    },
    {
        title: "Feng Shui Consultantion",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/other03.svg",
        imagePosition: "left",
        description: "Step into a world where ancient wisdom meets modern living as Mr. Pema Namgyel introduces the principles of Feng Shui and the art of living in harmony with Mother Nature. This enlightening session offers practical insights into creating a balanced and harmonious environment.",
        additionalDetails: "During your session, discover your personality traits, receive guidance on life decisions, and explore your untapped potential.",
    },
    {
        title: "Ceremonial Procession of the Monk Body",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_6499.JPG",
        imagePosition: "left",
        description: "Witness one of Trongsa's most magnificent spiritual spectacles - the ceremonial movement of the monk body between their seasonal residences. This grand procession occurs twice annually according to the lunar calendar.",
        duration: "1 day",
    },
    {
        title: "Tshepamey Wang in Trongsa Dzong",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/wang.jpg",
        imagePosition: "right",
        description: "Participate in one of Trongsa's most significant spiritual ceremonies - the Tshepamey Wang (Blessing of Long Life). This profound ritual honors Tshepamey (Amitayus), the Buddha of Long Life.",
        duration: "1 day (held annually on the 15th day of the 8th lunar month)",
    },
    {
        title: "A Robe for A Monk – Taphey Goenba Monastery",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/other06.png",
        imagePosition: "left",
        description: "Support the spiritual practice of monks at Taphey Goemba Monastery by donating traditional robes and essential items. This meaningful gesture directly supports the monastery's retreat practitioners.",
    },
    {
        title: "Donate Meals to The Monks in Taphey Goemba Monastery",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/other07.svg",
        imagePosition: "right",
        description: "Guests at Willing Resort can donate meals to the 20 monks undergoing a three-year retreat at Taphey Goemba Monastery. The monks offer prayers for the donors' wellbeing and good fortune.",
    },
    {
        title: "Morning and Evening Prayers at Trongsa Dzong",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/morning-prayer.jpg",
        imagePosition: "left",
        description: "The sacred daily rituals of Bhutanese monks at Trongsa Dzong feature group chanting, traditional music, and sacred offerings. Guests are welcome to observe these authentic expressions of Buddhist devotion within the dzong's ancient temples.",
        duration: "2-3 hours",
    },
    {
        title: "An Offering to Penday Lhamo (Female Deity) Trongsa Dzong",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/pendayLhamo.svg",
        imagePosition: "right",
        description: "Participate in a special offering to Palden Lhamo, the female protective deity. Join prayers and rituals in her sacred temple within Trongsa Dzong, seeking her blessings and protection.",
        duration: "2 hours",
    },
    {
        title: "Butter Lamp Offering at Willing Village Monastery",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/culture-and-conservation/butter-lamp.jpg",
        imagePosition: "left",
        description: "Join in lighting a thousand lamps, traditionally made with cow butter or vegetable oil, in a meaningful ceremony at Willing Village Monastery. This practice connects participants to an ancient tradition of illuminating both outer and inner darkness.",
        duration: "1-2 hours",
    },
    {
        title: "Prayer Hoisting Ceremony at Willing Lhakhang",
        imageUrl: "https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_3164.jpeg",
        imagePosition: "right",
        description: "Join the local community and monks in the sacred practice of hoisting prayer flags at Willing Monastery. These colorful banners, believed to carry blessings on the wind, are hoisted during this meaningful cultural and spiritual activity.",
        duration: "2 hours",
    },
];

export async function generateMetadata() {
    return {
        title: "Other Activities || Willing Resort",
        description: "Experience Bhutan’s rich culture at Willing Resort with oracle readings, Feng Shui, and traditional crafts, and explore Trongsa’s historic sites, including Trongsa Dzong, Ta Dzong Museum, and royal palaces",
    };
}

const PlaceToVisitPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/events-activities/img-01.jpeg'
                headingText='Bhutan’s Spiritual & Cultural Wonders - Trongsa'
                bodyText={``}
            />
            <Breadcrumb
                items={[
                    { label: "Experience" },
                    { label: "other activities" },
                ]}
            />
            {otherActivities.map((activity, index) => (
                <div key={index} className='mb-6 sm:mb-[100px]'>
                    <FeatureSection
                        title={activity.title}
                        imagePosition={activity.imagePosition}
                        description={activity.description}
                        imageUrl={activity.imageUrl}
                    />
                </div>
            ))}


        </React.Fragment>
    )
}

export default PlaceToVisitPage


