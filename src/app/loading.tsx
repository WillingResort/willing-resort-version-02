"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GlobalLoading() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            {/* Rotating Circular Border */}
            <motion.div
                className="relative flex justify-center items-center w-24 h-24 rounded-full border-4 border-gray-300"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
                {/* Inner Logo */}
                <div className="absolute inset-1 flex justify-center items-center bg-white rounded-full">
                    <Image
                        src="https://willingresort.github.io/assests-hosting/images/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
}
