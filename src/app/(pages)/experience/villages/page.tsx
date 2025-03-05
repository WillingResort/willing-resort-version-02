import Breadcrumb from '@/components/ui/breadcrumb';
import FeatureSection from '@/components/ui/feature-section';
import HeroBanner from '@/components/ui/hero-banner';
import React from 'react'

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
                heroBannerBgImage='https://willingresort.github.io/assests-hosting/images/dinning/dinning-03.JPG'
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
                    title="Trongsa Dzong"
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
            <div className='mt-6 sm:mt-[100px]'>
                <FeatureSection
                    title="Kinga Rabten"
                    imagePosition='left'
                    description={`
                        This is one of three royal homes in central Trongsa, which is situated at an elevation of roughly 1,750 meters above the Mangde Chhu river on the north side of the valley. It was built in 1929 as the second King's winter residence. The trip will give you an idea of what life was like in Bhutan's early kingdom. On the way, you'll pass beneath the fertile rice paddies of the lower Mangde Chhu valley, Takse Goemba, and a massive waterfall.
                        `}
                    imageUrl="https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Ta-Dzong-Bhutan-National-museum-at-Paro-the-old-capital-of-Bhutan.jpg"
                />
            </div>
            <div className='mt-6 mb-6 sm:mt-[100px] sm:mb-[100px]'>
                <FeatureSection
                    title="Karma Drubdey Nunnery"
                    imagePosition='right'
                    description={`
                        The nunnery was established in 1968 by the esteemed scholar, teacher, and yogi Khenpo Tsultrim Gyamtsho Rinpoche. It is now home to approximately 127 Buddhist nuns who study and practice Buddhadharma in the Karma Kagyu tradition. Located on a hill and surrounded by mountains, the nunnery benefits from plenty of fresh air, making it an ideal setting for the nuns to study and retreat.
                        `}
                    imageUrl="https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Ta-Dzong-Bhutan-National-museum-at-Paro-the-old-capital-of-Bhutan.jpg"
                />
            </div>



        </React.Fragment>
    )
}

export default ExperiencePage