"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { delay } from "framer-motion/dom";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition?: "left" | "right";
    buttonText?: string;
    hrefLink?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    description,
    imageUrl,
    imagePosition = "left",
    buttonText,
    hrefLink,
}) => {
    const router = useRouter();

    // Controls for animation
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false, // Allow reverse animation when scrolling back
        threshold: 0.1, // Triggers when 80% of the element is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    // Animation Variants
    const variants = {
        hidden: (direction: "left" | "right") => ({
            x: direction === "left" ? -100 : 100,
            opacity: 0,
            scale: 0.5,
            transition: {
                type: "spring",
                stiffness: 80, // Less stiff for smoother movement
                damping: 60, // Make it less bouncy
                duration: 0.9, // Slightly longer duration
                ease: "easeInOut", // Smooth ease in and out
            },
        }),
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 40,
                duration: 0.9,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div
            ref={ref}
            className="scroll-right-div container mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]"
        >
            <div
                className={`flex flex-wrap w-full ${imagePosition === "right" ? "flex-col-reverse sm:flex-row" : ""
                    }`}
            >
                {/* Image on the Left */}
                {imagePosition === "left" && (
                    <motion.div
                        custom="left"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] sm:pr-[60px]"
                    >
                        <Image
                            className="h-[500px] w-full object-cover"
                            src={imageUrl ?? "/default-image.jpg"}
                            alt={title}
                            width={800}
                            height={500}
                        />
                    </motion.div>
                )}

                {/* Content Section */}
                <motion.div
                    custom={imagePosition === "left" ? "right" : "left"}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center text-center"
                >
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
                </motion.div>

                {/* Image on the Right */}
                {imagePosition === "right" && (
                    <motion.div
                        custom="right"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="w-full sm:w-[70%] sm:pl-[60px]"
                    >
                        <Image
                            className="h-[500px] w-full object-cover object-center"
                            src={imageUrl ?? "/default-image.jpg"}
                            alt={title}
                            width={800}
                            height={500}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default FeatureSection;
