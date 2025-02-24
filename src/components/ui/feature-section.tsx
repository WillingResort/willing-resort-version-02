'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'


interface FeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition?: 'left' | 'right';
    buttonText?: string;
    hrefLink?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    description,
    imageUrl,
    imagePosition = 'left',
    buttonText,
    hrefLink,
}) => {
    const router = useRouter()

    return (
        <div className="container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
            <div className={`flex flex-wrap w-full ${imagePosition === 'right' ? 'flex-col-reverse sm:flex-row' : ''}`}>
                {/* Image on the Left */}
                {imagePosition === 'left' && (
                    <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] sm:pr-[60px]">
                        <Image
                            className="h-[500px] w-full object-cover"
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
                    <p className="mt-5">{description}</p>
                    {buttonText && hrefLink && (
                        <button
                            onClick={() => router.push(hrefLink)}
                            className="mt-10 outline outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none"
                        >
                            {buttonText}
                        </button>
                    )}
                </div>

                {/* Image on the Right */}
                {imagePosition === 'right' && (
                    <div className="w-full sm:w-[70%] sm:pl-[60px]">
                        <Image
                            className="h-[500px] w-full object-cover"
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

export default FeatureSection;
