/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import menuItems from './menu';

interface MenuItem {
    label: string;
    link: string;
    submenu?: { label: string; link: string }[];
}

const PhoneMenu: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSubmenuToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='z-10'>
            {/* Open Menu Button */}
            <button
                className="flex gap-2 border-0 bg-transparent"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <div className="flex flex-col gap-1">
                    {[...Array(3)].map((_, rowIdx) => (
                        <div key={rowIdx} className="flex gap-1">
                            {[...Array(3)].map((_, idx) => (
                                <span key={idx} className="block w-2 h-2 bg-gray-800"></span>
                            ))}
                        </div>
                    ))}
                </div>
            </button>

            {/* Sidebar Menu */}
            <div
                className={`fixed z-10 inset-0 w-3/4 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
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
                    <ul className="space-y-3">
                        {menuItems.map((menuItem: MenuItem, idx: number) => (
                            <li key={idx} className="relative">
                                <div className="flex justify-between items-center">
                                    <Link href={menuItem.link} className="text-gray-900 hover:text-blue-600 font-medium py-2">
                                        {menuItem.label}
                                    </Link>
                                    {menuItem.submenu && (
                                        <button
                                            onClick={() => handleSubmenuToggle(idx)}
                                            className="text-gray-700 text-lg"
                                            aria-label="Toggle submenu"
                                        >
                                            {activeIndex === idx ? '−' : '+'}
                                        </button>
                                    )}
                                </div>

                                {/* Submenu */}
                                {menuItem.submenu && (
                                    <ul
                                        className={`pl-4 mt-2 transition-all duration-300 ease-in-out ${activeIndex === idx ? 'block' : 'hidden'
                                            }`}
                                    >
                                        {menuItem.submenu.map((subItem, subIdx) => (
                                            <li key={subIdx} className="mb-2">
                                                <Link href={subItem.link} className="text-gray-700 hover:text-blue-500">
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PhoneMenu;
