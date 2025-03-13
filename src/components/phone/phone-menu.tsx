'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { menuItems } from './menu';
import { useRouter } from 'next/navigation';

const PhoneMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const router = useRouter()

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const handleMenuClick = () => {
        setIsOpen(false);
        setActiveSubMenu(null);
    };
    const handleNavigate = (hrefLink: string) => {
        router.push(hrefLink)
        setIsOpen(false);
        setActiveSubMenu(null);
    }

    const toggleSubMenu = (label: string) => {
        setActiveSubMenu(activeSubMenu === label ? null : label);
    };

    return (
        <div className='relative z-[9999]'>
            {/* Open Menu Button */}
            <div className='container fixed top-0 mx-auto px-4 h-[70px] bg-white flex justify-between items-center'>
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
                    onClick={handleMenuClick}
                />
            )}

            {/* Sidebar Menu */}
            <div
                className={`fixed z-[9999] inset-0 w-3/4 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
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
                        onClick={handleMenuClick}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                    {menuItems.map((menuItem, idx) => (
                        <div key={idx} className="border-t">
                            {/* Main Menu Item */}
                            <div
                                className="py-3 flex items-center justify-between gap-2 text-black cursor-pointer"
                                onClick={() => {
                                    if (menuItem.submenu) {
                                        toggleSubMenu(menuItem.label);
                                    } else {
                                        handleNavigate(menuItem.href)
                                    }
                                }}
                            >
                                <Link href={menuItem.href} className="text-black font-medium text-sm">
                                    {menuItem.label}
                                </Link>
                                {menuItem.hasIcon && (
                                    <span>
                                        {menuItem.submenu ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"
                                                className={`transition-transform ${activeSubMenu === menuItem.label ? 'rotate-90' : ''}`}
                                            >
                                                <defs>
                                                    <path id="weuiArrowOutlined0" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" />
                                                </defs>
                                                <use href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)" />                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                                                <defs>
                                                    <path id="weuiArrowOutlined0" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" />
                                                </defs>
                                                <use href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)" />
                                            </svg>
                                        )}
                                    </span>
                                )}
                            </div>

                            {/* Submenu Items */}
                            {menuItem.submenu && activeSubMenu === menuItem.label && (
                                <div className="ml-4 border-l pl-4 pb-2">
                                    {menuItem.subLabel?.map((subItem, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            href={subItem.href}
                                            className="block py-2 text-sm text-gray-600 uppercase"
                                            onClick={handleMenuClick}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhoneMenu;
