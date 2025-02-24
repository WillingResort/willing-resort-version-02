/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { menuItems } from './menu';

const PhoneMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const handleMenuClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='relative z-10'>
            {/* Open Menu Button */}
            <div className='container mx-auto px-4 h-[50px] bg-white flex justify-between items-center'>
                <div>
                    <Link href="/" className="block">
                        <img
                            src="https://willingresort.github.io/assests-hosting/images/logo.png"
                            alt="Logo"
                            width={50}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>
                <button
                    className="flex gap-2 border-0 bg-transparent"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <div className="text-textColor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21 6v2H3V6zM3 18h18v-2H3zm0-5h18v-2H3z" />
                        </svg>
                    </div>
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-20"
                    onClick={handleMenuClick} // Close the menu when clicking outside
                />
            )}

            {/* Sidebar Menu */}
            <div
                className={`fixed z-20 inset-0 w-3/4 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    <Link href="/" className="block">
                        <img
                            src="https://willingresort.github.io/assests-hosting/images/logo.png"
                            alt="Logo"
                            width={70}
                            height={60}
                            className="object-contain"
                        />
                    </Link>
                    <button
                        type="button"
                        className="text-gray-600 text-xl"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                    <div>
                        {menuItems.map((menuItem, idx) => (
                            <Link
                                href={menuItem.href}
                                key={idx}
                                className="py-2 flex items-center justify-between gap-2 border-t"
                                onClick={handleMenuClick} // Close the menu when a link is clicked
                            >
                                <span style={{ fontSize: '14px' }} className="text-gray-900 font-medium py-2">
                                    {menuItem.label}
                                </span>
                                {menuItem.hasIcon &&
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                                            <defs>
                                                <path id="weuiArrowOutlined0" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" />
                                            </defs>
                                            <use href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)" /></svg>
                                    </span>}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneMenu;
