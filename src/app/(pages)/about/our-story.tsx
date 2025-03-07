'use client'
import TopTextSection from '@/components/ui/top-text-section';
import { motion } from 'framer-motion';
import { useState } from 'react';

const StorySection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div>
            <TopTextSection
                title="Our Story"
                description={`
                    Cradled in the arms of the majestic Trongsa valley, Willing Resort is a luxurious sanctuary that blends rustic charm with modern design. Our name, lovingly pronounced "Willing" by locals, pays homage to the ancient village of Yueling where Lam Ngagi Wangchuk built the first meditation temple in 1543 on these sacred grounds.
                `}
            />
            {isExpanded && (
                <div className="container mt-5 mx-auto px-4 flex flex-col gap-4 justify-center items-center">
                    <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                        Standing on an intimate hilltop haven, the resort offers a spectacular view of Trongsa's iconic dzongs and the serene Mangdi River. Just a 15-minute drive from the historic Trongsa Dzong and Ta Dzong museum, guests are enveloped by the region's rich cultural tapestry.
                    </p>

                    <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                        Step through the doors of Willing Resort and let yourself be enveloped in the warm embrace of genuine Bhutanese hospitality. Our friendly team extends a caring welcome and eagerly ensures your utmost comfort and contentment from the moment you arrive. You'll be treated with excellent personalized service, helping you to fully relax and enjoy the tranquility of nature.
                    </p>

                    <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                        The resort's meticulous design seamlessly blends traditional Bhutanese artistry with modern luxuries. The lush gardens accentuate the intricate architectural features, enveloping you in the enchantment of Bhutan’s last Shangri-La and offering a luxurious retreat from the demands of the outside world.
                    </p>

                    <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
                        Here, you'll find far more than peace - this sanctuary will help you regain balance, replenishing mind, body and spirit amidst the kingdom's pristine natural wonders. This is a place to rediscover harmony, where rustic charm and sumptuous indulgences come together to rejuvenate your soul!
                    </p>
                </div>
            )}
            <div className="container mt-2 mx-auto px-4 flex justify-center items-center">
                <motion.button onClick={toggleExpansion}
                    className="outline px-8 h-[50px] outline-1 mt-5 outline-black uppercase text-[14px] sm:text-base"
                    whileHover={{ scale: 1.1, backgroundColor: "black", color: "white", outline: "none" }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </motion.button>
            </div>
        </div >
    );
};

export default StorySection;
