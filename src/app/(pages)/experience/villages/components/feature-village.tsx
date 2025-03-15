import Image from 'next/image';


interface FeatureVillageSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition?: 'left' | 'right';

}

const FeatureVillageSection: React.FC<FeatureVillageSectionProps> = ({
    title,
    description,
    imageUrl,
    imagePosition = 'left',

}) => {

    return (
        <div className="container mx-auto sm:mb-[70px] px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
            <div className={`flex flex-wrap w-full ${imagePosition === 'right' ? 'flex-col-reverse sm:flex-row' : ''}`}>
                {/* Image on the Left */}
                {imagePosition === 'left' && (
                    <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[60%] sm:pr-[60px]">
                        <Image
                            className="h-[500px] w-full object-cover object-center"
                            src={imageUrl ?? '/default-image.jpg'}
                            alt={title}
                            width={800}
                            height={500}
                        />
                    </div>
                )}

                {/* Content Section */}
                <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center text-center">
                    <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                        {title}
                    </h1>
                    <p className="mt-5">{description}</p>
                </div>

                {/* Image on the Right */}
                {imagePosition === 'right' && (
                    <div className="w-full sm:w-[60%] sm:pl-[60px]">
                        <Image
                            className="h-[500px] w-full object-cover object-left"
                            src={imageUrl ?? '/default-image.jpg'}
                            alt={title}
                            width={800}
                            height={500}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeatureVillageSection;
