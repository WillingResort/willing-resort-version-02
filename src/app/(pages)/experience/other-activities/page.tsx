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
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        description: "Immerse yourself in the ancient art of textile dyeing at the Tarayana Foundation's nettle textile centre in Langthel, Trongsa. Here, local artisans keep alive the traditional dyeing processes using naturally available ingredients. Watch and learn as they create vibrant colors from symplocos (zim), stic lac (jatsoe), madder (tsoe), and buckwheat flour. Guests are invited to participate in the dyeing process, creating their own naturally dyed textiles under expert guidance.",
    },
    {
        title: "Making Pottery",
        imagePosition: "right",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        description: "Journey to the Pottery Centre in Langthel, a cultural treasure established by Her Majesty the Queen Mother Ashi Dorji Wangmo Wangchuck through the Tarayana Foundation. Located 1.5 hours south of Trongsa, this centre preserves the ancient pottery traditions of the indigenous Monpa community. This enriching experience offers insight into Bhutanese craftsmanship while supporting local artisans.",
        duration: "One day trip combined with a visit to Samcholing Tea Garden",
    },
    {
        title: "Samcholing Tea Garden",
        imagePosition: "left",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        description: "Discover the unique story of Samcholing Tea, cultivated in the pristine environment of Samcholing Village. This organic tea plantation, a cherished gift from the Second King, continues to be a source of pride and livelihood for the Samdrupcholing community. Nestled in the high Himalayas, the garden produces exceptional tea while preserving Bhutanese heritage.",
        duration: "One day trip combined with a visit to the Pottery Centre",
    },
    {
        title: "Bow and Arrow",
        imagePosition: "right",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        description: "Experience Bhutan's national sport with complimentary archery sessions at the resort. Practice with a traditional 'pagshing' bow, masterfully crafted from thick bamboo, and arrows made from lightweight bamboo stems. Learn the traditional scoring system where teams compete for points.",
        isFree: true,
    },
    {
        title: "Cooking Class by local villagers",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "left",
        description: "Willing Resort can arrange local cooking classes for guests, offering an opportunity to learn about Bhutanese culinary traditions and cooking techniques directly from local villagers. These intimate cooking sessions reveal traditional techniques, local ingredients, and time-honored recipes passed through generations.",
    },
    {
        title: "Private BBQ Lunch or Dinner in The Woods",
        imagePosition: "right",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        description: "Enhance your stay with a private dining experience in the wilderness surrounding Willing Resort. Choose between lunch or dinner served in the pristine forest setting, where traditional flavors meet natural splendor.",
    },
    {
        title: "Astrology reading",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "left",
        description: "Step into a world where ancient wisdom meets modern living as Mr. Pema Namgyel introduces the principles of Feng Shui and the art of living in harmony with Mother Nature. This enlightening session offers practical insights into creating a balanced and harmonious environment.",
        additionalDetails: "During your session, discover your personality traits, receive guidance on life decisions, and explore your untapped potential.",
    },
    {
        title: "Choechong",
        imagePosition: "right",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        description: "Experience the rare opportunity to consult with a medium oracle, a sacred tradition in Bhutanese spirituality. The oracle offers prophetic insights and celestial wisdom through traditional religious rituals and sermons.",
        duration: "2 hours",
    },
    {
        title: "Ceremonial Procession of the Monk Body",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "left",
        description: "Witness one of Trongsa's most magnificent spiritual spectacles - the ceremonial movement of the monk body between their seasonal residences. This grand procession occurs twice annually according to the lunar calendar.",
        duration: "1 day",
    },
    {
        title: "Tshepamey Wang in Trongsa Dzong",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "right",
        description: "Participate in one of Trongsa's most significant spiritual ceremonies - the Tshepamey Wang (Blessing of Long Life). This profound ritual honors Tshepamey (Amitayus), the Buddha of Long Life.",
        duration: "1 day (held annually on the 15th day of the 8th lunar month)",
    },
    {
        title: "A Robe for A Monk – Taphey Goenba Monastery",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "left",
        description: "Support the spiritual practice of monks at Taphey Goemba Monastery by donating traditional robes and essential items. This meaningful gesture directly supports the monastery's retreat practitioners.",
    },
    {
        title: "Donate Meals to The Monks in Taphey Goemba Monastery",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "right",
        description: "Guests at Willing Resort can donate meals to the 20 monks undergoing a three-year retreat at Taphey Goemba Monastery. The monks offer prayers for the donors' wellbeing and good fortune.",
    },
    {
        title: "Morning and Evening Prayers at Trongsa Dzong",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "left",
        description: "The sacred daily rituals of Bhutanese monks at Trongsa Dzong feature group chanting, traditional music, and sacred offerings. Guests are welcome to observe these authentic expressions of Buddhist devotion within the dzong's ancient temples.",
        duration: "2-3 hours",
    },
    {
        title: "An Offering to Penday Lhamo (Female Deity) Trongsa Dzong",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "right",
        description: "Participate in a special offering to Palden Lhamo, the female protective deity. Join prayers and rituals in her sacred temple within Trongsa Dzong, seeking her blessings and protection.",
        duration: "2 hours",
    },
    {
        title: "Butter Lamp Offering at Willing Village Monastery",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "left",
        description: "Join in lighting a thousand lamps, traditionally made with cow butter or vegetable oil, in a meaningful ceremony at Willing Village Monastery. This practice connects participants to an ancient tradition of illuminating both outer and inner darkness.",
        duration: "1-2 hours",
    },
    {
        title: "Prayer Hoisting Ceremony at Willing Lhakhang",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*loOpqugNmKXHl4BAw0gq8A.jpeg",
        imagePosition: "right",
        description: "Join the local community and monks in the sacred practice of hoisting prayer flags at Willing Monastery. These colorful banners, believed to carry blessings on the wind, are hoisted during this meaningful cultural and spiritual activity.",
        duration: "2 hours",
    },
];

export async function generateMetadata() {
    return {
        title: "Place To Visit Trongsa || Willing Resort",
        description: "Experience Bhutan’s rich culture at Willing Resort with oracle readings, Feng Shui, and traditional crafts, and explore Trongsa’s historic sites, including Trongsa Dzong, Ta Dzong Museum, and royal palaces",
    };
}

const PlaceToVisitPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/dinning/dinning-03.JPG'
                headingText='Bhutan’s Spiritual & Cultural Wonders - Trongsa'
                bodyText={`
                    Experience Bhutan’s rich culture at Willing Resort with oracle readings, Feng Shui, 
                    and traditional crafts, and explore Trongsa’s historic sites, including Trongsa Dzong, 
                    Ta Dzong Museum, and royal palaces
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience" },
                    { label: "other activities" },
                ]}
            />
            {otherActivities.map((activity, index) => (
                <div className='mb-6 sm:mb-[100px]'>
                    <FeatureSection
                        title={activity.title}
                        imagePosition={activity.imagePosition}
                        description={activity.description}
                        imageUrl={activity.imageUrl}
                    />
                </div>
            ))}

            <div className='mt-6 sm:mt-[10px]'>
                <FeatureSection
                    title="Trongsa Dzong"
                    imagePosition='left'
                    description={`
                        Trongsa Dzong overlooks the rushing Mangde Chhu River and is considered the most impressive dzong in Bhutan. 
                        Erected in 1644, its unique architecture stands out from a distance. The vast complex spans multiple levels and 
                        features a maze of courtyards, passageways, and corridors. You’d be surprised to know that there are 25 temples in Trongsa Dzong!
                        `}
                    imageUrl="https://live.staticflickr.com/4874/45712564602_5a993fb85d_b.jpg"
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Ta Dzong"
                    imagePosition='right'
                    description={`
                        Initially built to protect Trongsa Dzong from rebels, this building now 
                        serves as the National Museum of Bhutan. It houses a wide range of valuable 
                        treasures from the Wangchuck Dynasty, providing visitors with a fascinating glimpse 
                        into the country's rich history. The museum's collections include a variety of objects, 
                        such as ancient diamonds and sculptures of deities, all elegantly displayed for viewing.
                        `}
                    imageUrl="https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Ta-Dzong-Bhutan-National-museum-at-Paro-the-old-capital-of-Bhutan.jpg"
                />
            </div>
            <div className="container mx-auto mt-8 flex flex-col items-center">
                <h1 className="font-normal text-heading tracking-heading uppercase text-center">
                    Threupang Palace
                </h1>
                <p className="w-[90%] mt-5 text-center">
                    The palace was constructed by Jigme Wangchuck, the Second King. It was the
                    birthplace of Jigme Dorji Wangchuck, the Third King, in 1928. Nowadays, the Fifth
                    King stays here when he passes through Trongsa. The palace continues to be a symbol
                    of the monarchy, and a testimony of the lifestyle that the Second and Third Kings had
                    of changing valleys according to seasons. The palace is a modest two-story structure resembling
                    a big house with a beautiful front courtyard with lush green lawn.
                </p>
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Kinga Rabten"
                    imagePosition='left'
                    description={`
                        This is one of three royal homes in central Trongsa, which is situated at an elevation of roughly 1,750 meters above the Mangde Chhu river on the north side of the valley. It was built in 1929 as the second King's winter residence. The trip will give you an idea of what life was like in Bhutan's early kingdom. On the way, you'll pass beneath the fertile rice paddies of the lower Mangde Chhu valley, Takse Goemba, and a massive waterfall.
                        `}
                    imageUrl="https://media1.thrillophilia.com/filestore/gg9ggmf81wxlen4cll560d6f6wdn_4963129388_dbb9797d17_k.jpg"
                />
            </div>
            <div className='mt-6 mb-6 sm:mt-[100px] sm:mb-[100px]'>
                <FeatureSection
                    title="Karma Drubdey Nunnery"
                    imagePosition='right'
                    description={`
                        The nunnery was established in 1968 by the esteemed scholar, teacher, and yogi Khenpo Tsultrim Gyamtsho Rinpoche. It is now home to approximately 127 Buddhist nuns who study and practice Buddhadharma in the Karma Kagyu tradition. Located on a hill and surrounded by mountains, the nunnery benefits from plenty of fresh air, making it an ideal setting for the nuns to study and retreat.
                        `}
                    imageUrl="https://www.holidify.com/images/cmsuploads/compressed/01-copy8-800x533_20190905162055.jpg"
                />
            </div>
        </React.Fragment>
    )
}

export default PlaceToVisitPage


