'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ButtonProps {
    buttonText: string;
    hrefLink: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, hrefLink }) => {
    const router = useRouter();

    return (
        <motion.button
            onClick={() => router.push(hrefLink)}
            className="outline px-8 h-[50px] outline-1 mt-5 outline-black uppercase text-[14px] sm:text-base"
            whileHover={{ scale: 1.1, backgroundColor: "black", color: "white", outline: "none" }}
            whileTap={{ scale: 0.9 }}
        >
            {buttonText}
        </motion.button>
    );
};

export default Button;
