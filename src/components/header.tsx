/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="group z-10 bg-transparent absolute top-0 left-0 w-full py-4 transition-all duration-300 ease-in-out hover:bg-white">
            {/* Center Logo */}
            <div className="container flex mx-auto px-4 justify-center items-center w-full sm:px-6 lg:px-4 border-b border-white border-opacity-20 group-hover:border-borderColor">
                <Link href="/">
                    <img
                        className="pb-2 filter invert brightness-0 transition-all duration-300 ease-in-out group-hover:filter-none"
                        loading="lazy"
                        style={{ objectFit: 'contain' }}
                        src="https://willingresort.github.io/assests-hosting/images/logo.png"
                        alt="Logo"
                        width={70}
                        height={60}
                    />
                </Link>
            </div >

            {/* Center Navigation */}
            <div className="mx-auto flex items-center justify-center gap-6 mt-3" >
                <Link href="#" className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-textColor">
                    ACCOMMODATION
                </Link>
                <Link href="#" className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-textColor">
                    DINING
                </Link>
                <Link href="#" className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-textColor">
                    WELLNESS
                </Link>
                <Link href="#" className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-textColor">
                    EXPERIENCES
                </Link>
                <Link href="#" className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-textColor">
                    PRIVATE HOMES
                </Link>
                <Link href="#" className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-textColor">
                    ABOUT
                </Link>
            </div >
        </nav >
    );
};

export default Navbar;
