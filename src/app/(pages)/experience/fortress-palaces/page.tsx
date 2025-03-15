import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Fortress & Palaces || Willing Resort",
        description: "Discover the rich history and cultural heritage of Trongsa, Bhutan. Explore iconic landmarks like Trongsa Dzong, Ta Dzong Museum, Threupang Palace, Kinga Rabten, and Karma Drubdey Nunnery. Experience royal legacies, ancient treasures, and serene spiritual retreats in one of Bhutan's most historic regions",
    };
}

const FortressPalacesPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/homepage/slider-03.jpg'
                headingText='Explore the Historic Sites of Trongsa'
                bodyText={`
                    Explore Trongsa, Bhutan’s rich history and culture. Visit iconic landmarks 
                    like Trongsa Dzong, Ta Dzong Museum, Threupang Palace, Kinga Rabten, 
                    and Karma Drubdey Nunnery, experiencing royal legacies, ancient treasures, 
                    and spiritual retreats
                    `}
            />
            <Breadcrumb
                items={[
                    { label: "Experience" },
                    { label: "Fortress & Palaces" },
                ]}
            />
            <div className='mt-6 sm:mt-[10px]'>
                <FeatureSection
                    title="Trongsa Dzong"
                    imagePosition='left'
                    description={`
                        Trongsa Dzong overlooks the rushing Mangde Chhu River and is considered the most impressive dzong in Bhutan. 
                        Erected in 1644, its unique architecture stands out from a distance. The vast complex spans multiple levels and 
                        features a maze of courtyards, passageways, and corridors. You’d be surprised to know that there are 25 temples in Trongsa Dzong!
                        `}
                    imageUrl="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_1667.jpg"
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

export default FortressPalacesPage