import Breadcrumb from '@/components/ui/breadcrumb';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'
import FeatureVillageSection from './components/feature-village';
import TopTextSection from '@/components/ui/top-text-section';

export async function generateMetadata() {
    return {
        title: "Visit to Villages || Willing Resort",
        description: "Discover the rich history and breathtaking landscapes of Trongsa. Visit ancient dzongs, royal palaces, sacred monasteries, and traditional villages to experience Bhutan’s cultural heritage. Plan your journey today!",
    };
}

const ExperiencePage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/adventures-and-activities/place.jpg'
                headingText='Explore Villages In Trongsa'
                bodyText={`
                    The villages in Trongsa, each with its distinct history and cultural heritage, offer a 
                    fascinating look into the region's spiritual and social traditions
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience" },
                    { label: "Visit to villages" },
                ]}
            />
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureVillageSection
                    title="Yuling village - Yuling Lhakhang"
                    imagePosition='left'
                    description={`
                        Initially built to protect Trongsa Dzong from rebels, this building now 
                        serves as the National Museum of Bhutan. It houses a wide range of valuable 
                        treasures from the Wangchuck Dynasty, providing visitors with a fascinating glimpse 
                        into the country's rich history. The museum's collections include a variety of objects, 
                        such as ancient diamonds and sculptures of deities, all elegantly displayed for viewing.
                        `}
                    imageUrl="https://www.bhutantravelguru.com/wp-content/uploads/2022/01/paddy-field.jpg"
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <TopTextSection
                    title="Nabji village - Nabji Lhakhang"
                    description={`
                        Nabji village is about two hours drive from Trongsa town. It is in a vast, verdant valley that resembles a natural concave circular mandala. Nabji's history dates back to Guru Rinpoche's first visit to Bhutan, during which he made King Nawoche of Assam, India, and King Sindhu Raja of Bumthang an oath to live in harmony. Nabji Lhakhang was built by Khandro Tashi Khyidren, daughter of King Sindhu Raja, with the help of Guru Rinpoche. A tree near the entrance is believed to be Guru Rinpoche's walking staff.
                    `}
                />
            </div>
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureVillageSection
                    title="Korphu village - Korphu Lhakhang"
                    imagePosition='right'
                    description={`
                        This village is about 1.5 hours' walking from Nabji village. 'Korphu' is derived from 'gour' meaning stone and 'pho' meaning cave, literally translating to "stone cave." Korphu village is the farthest gewog in Trongsa Dzongkhag, falling under Jigme Singye Wangchuck National Park. Korphu Lhakhang in the village is said to have been constructed in the 15th century, after being prophesied by the great tertoen (treasure discoverer) Pema Lingpa.
                        `}
                    imageUrl="https://static.wixstatic.com/media/118af4_a5eb8f7e19ca40e9b0021467e316723f~mv2.jpg/v1/fill/w_708,h_480,al_c,lg_1,q_80/118af4_a5eb8f7e19ca40e9b0021467e316723f~mv2.jpg"
                />
            </div>
            <div className='mt-6 mb-6 sm:mt-[100px] sm:mb-[100px]'>
                <div className="container mt-5 mx-auto px-4">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="font-normal w-[100%] sm:w-[50%] text-heading tracking-heading text-secondaryColor uppercase text-center">
                            Nomadic Village
                        </h1>
                        <div className="flex flex-col justify-center items-center">
                            <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                                You can take some time to visit the nomadic village of Monpas. The Monpa community in Trongsa is spread across three villages: Jangbi, Phumzur, and Wamling, with approximately 375 Monpas. They inhabit the Mangdue and Wangdue valleys in central Bhutan and are often considered some of the country's first inhabitants.
                            </p>
                            <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center pt-2">
                                The Monpas are a close-knit community, living and working together in groups. They follow a joint family system, where the male head of the household typically makes family decisions. Traditionally, the Monpas wore a unique dress called the 'Pangay,' although this is now being replaced by the national dress. Their language, Monkha, is distinct and does not resemble any other language in Bhutan, though it shares roots with the Tibeto-Burman language family, similar to other languages spoken in the region.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default ExperiencePage