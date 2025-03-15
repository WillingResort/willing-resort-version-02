import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react';
import FeatureVillageSection from './components/feature-village';

export async function generateMetadata() {
    return {
        title: "Visit to Villages || Willing Resort",
        description: "Discover the rich history and breathtaking landscapes of Trongsa. Visit ancient dzongs, royal palaces, sacred monasteries, and traditional villages to experience Bhutan’s cultural heritage. Plan your journey today!",
    };
}

const ExperiencePage: React.FC = () => {
    const villageData = [
        {
            village: "Yuling village",
            site: "Yuling Lhakhang",
            imageUrl: "https://willingresort.github.io/assests-hosting/images/yueling-village.JPG",
            description:
                "Initially built to protect Trongsa Dzong from rebels, this building now serves as the National Museum of Bhutan. It houses a wide range of valuable treasures from the Wangchuck Dynasty, providing visitors with a fascinating glimpse into the country's rich history. The museum's collections include a variety of objects, such as ancient diamonds and sculptures of deities, all elegantly displayed for viewing."
        },
        {
            village: "Nabji village",
            site: "Nabji Lhakhang",
            imageUrl: "",
            description:
                "Nabji village is about two hours drive from Trongsa town. It is in a vast, verdant valley that resembles a natural concave circular mandala. Nabji's history dates back to Guru Rinpoche's first visit to Bhutan, during which he made King Nawoche of Assam, India, and King Sindhu Raja of Bumthang an oath to live in harmony. Nabji Lhakhang was built by Khandro Tashi Khyidren, daughter of King Sindhu Raja, with the help of Guru Rinpoche. A tree near the entrance is believed to be Guru Rinpoche's walking staff."
        },
        {
            village: "Nomadic Village",
            site: "Monpa Community",
            imageUrl: "",
            description:
                "You can take some time to visit the nomadic village of Monpas. The Monpa community in Trongsa is spread across three villages: Jangbi, Phumzur, and Wamling, with approximately 375 Monpas. They inhabit the Mangdue and Wangdue valleys in central Bhutan and are often considered some of the country's first inhabitants. The Monpas are a close-knit community, living and working together in groups. They follow a joint family system, where the male head of the household typically makes family decisions. Traditionally, the Monpas wore a unique dress called the 'Pangay,' although this is now being replaced by the national dress. Their language, Monkha, is distinct and does not resemble any other language in Bhutan, though it shares roots with the Tibeto-Burman language family, similar to other languages spoken in the region."
        }
    ];

    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage="https://willingresort.github.io/assests-hosting/images/village.JPG"
                headingText="Explore Villages In Trongsa"
                bodyText="The villages in Trongsa, each with its distinct history and cultural heritage, offer a fascinating look into the region's spiritual and social traditions."
            />
            <Breadcrumb
                items={[
                    { label: "Experience" },
                    { label: "Visit to villages" },
                ]}
            />
            {villageData.map((village, index) => (
                <React.Fragment key={index}>
                    {village.imageUrl && (
                        <FeatureVillageSection
                            key={index}
                            imageUrl={village.imageUrl}
                            title={`${village.village} - ${village.site}`}
                            imagePosition="left"
                            description={village.description}
                        />
                    )}
                    <div className="mb-6 sm:mb-[60px] pl-0 sm:pl-[70px]">
                        <div className="container mt-5 mx-auto px-4">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-normal w-[100%] sm:w-[50%] text-heading text-secondaryColor capitalize">
                                    {village.village} - {village.site}
                                </h1>
                                <div className="flex flex-col justify-center">
                                    <p className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%]">
                                        {village.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export default ExperiencePage;
