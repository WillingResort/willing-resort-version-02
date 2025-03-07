'use client'
import Button from '@/components/ui/button';
import Image from 'next/image';

interface SuiteFeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition?: 'left' | 'right';
    buttonText?: string;
    hrefLink?: string;
    area: string;
    objectPosition?: 'object-center' | 'object-right' | 'object-left' | 'object-top' | 'object-bottom';
    imageHeight?: string;
}

const SuiteFeatureSection: React.FC<SuiteFeatureSectionProps> = ({
    title,
    description,
    imageUrl,
    imagePosition = 'left',
    buttonText,
    hrefLink,
    area,
    objectPosition = 'object-center',
    imageHeight = '500px',
}) => {

    return (
        <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
            <div className={`flex flex-wrap w-full ${imagePosition === 'right' ? 'flex-col-reverse sm:flex-row' : ''}`}>
                {/* Image on the Left */}
                {imagePosition === 'left' && (
                    <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] sm:pr-[60px]">
                        <Image
                            className={`h-[${imageHeight}] w-full object-cover  ${objectPosition} bg-gradient-to-r from-black/50 to-transparent`}
                            src={imageUrl ?? '/default-image.jpg'}
                            alt={title}
                            width={800}
                            height={500}
                        />
                    </div>
                )}

                {/* Content Section */}
                <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center text-center">
                    <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
                        {title}
                    </h1>
                    <p>( {area} )</p>
                    <p className="mt-4">{description}</p>
                    {buttonText && hrefLink && (
                        <Button buttonText={buttonText} hrefLink={hrefLink} />
                    )}
                </div>

                {/* Image on the Right */}
                {imagePosition === 'right' && (
                    <div className="w-full sm:w-[70%] sm:pl-[60px">
                        <Image
                            className={`h-[${imageHeight}] w-full object-cover ${objectPosition} bg-gradient-to-r from-black/50 to-transparent`}
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

export default SuiteFeatureSection;
