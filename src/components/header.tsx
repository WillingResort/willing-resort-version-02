/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import React, { JSX, useEffect, useState } from 'react';

const linkItems = [
    { text: 'ACCOMMODATION', href: '#', hasIcon: true },
    { text: 'DINING', href: '#', hasIcon: true },
    { text: 'WELLNESS', href: '#', hasIcon: true },
    { text: 'EXPERIENCES', href: '#', hasIcon: true },
    { text: 'FESTIVALS', href: '#', hasIcon: true },
    { text: 'ABOUT', href: '#', hasIcon: false },
];

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`z-10 w-full py-4 px-5 transition-all duration-300
                 ease-in-out fixed top-0 left-0 
                 ${isSticky ? 'bg-white shadow-lg sticky-nav-bar' :
                    'bg-transparent hover:bg-white group'
                }`}
        >
            <div className="container mx-auto relative flex items-center 
            justify-between border-b px-4 sm:px-6 lg:px-4 w-full border-opacity-20
             group-hover:border-borderColor">
                <div className="flex-1" />
                <Logo isSticky={isSticky} />
                <SocialLinks isSticky={isSticky} />
            </div>
            <NavLinks isSticky={isSticky} />
        </nav>
    );
};

const Logo: React.FC<{ isSticky: boolean }> = ({ isSticky }) => (
    <div className="flex justify-center">
        <Link href="/">
            <img
                className={`pb-2 transition-all duration-300 ease-in-out 
                    ${isSticky ? 'filter-none' :
                        'filter invert brightness-0 group-hover:filter-none'
                    }`}
                loading="lazy"
                style={{ objectFit: 'contain' }}
                src="https://willingresort.github.io/assests-hosting/images/logo.png"
                alt="Logo"
                width={70}
                height={60}
            />
        </Link>
    </div>
);

const SocialLinks: React.FC<{ isSticky: boolean }> = ({ isSticky }) => {
    const textColor = isSticky ? 'text-textColor' : 'text-white';
    return (
        <div className="flex-1 justify-end gap-5 hidden md:flex items-center">
            <SocialLink href="https://wa.me/17166888" icon={WhatsAppIcon} label="WhatsApp" textColor={textColor} />
            <SocialLink href="mailto:willingbhutan@gmail.com" icon={EmailIcon} label="Email" textColor={textColor} />
        </div>
    );
};

const NavLinks: React.FC<{ isSticky: boolean }> = ({ isSticky }) => (
    <div className="container px-4 sm:px-6 lg:px-4 w-full mx-auto flex items-center justify-center gap-[30px] mt-3">
        {linkItems.map((link, index) => (
            <Link
                key={index}
                href={link.href}
                className={`text-sm font-normal hover:!text-black transition-colors duration-300 relative group ${isSticky ? 'text-textColor' : 'text-white group-hover:text-textColor'
                    } ${link.hasIcon
                        ? `before:content-[''] before:absolute before:top-[45%] before:right-[-15px] before:w-[4px] before:h-[4px] before:rounded-full 
                        ${isSticky ? 'before:bg-textColor' : 'before:bg-white group-hover:before:bg-textColor'
                        }`
                        : ''
                    }`}
            >
                {link.text}
            </Link>
        ))}
    </div>
);

const SocialLink: React.FC<{ href: string; icon: JSX.Element; label: string; textColor: string }> = ({ href, icon, label, textColor }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${textColor} group-hover:text-textColor font-light no-underline`}>
        {icon}
        <span>{label}</span>
    </Link>
);

const WhatsAppIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="9" cy="9" r="1" />
            <circle cx="15" cy="15" r="1" />
            <path d="M8 9a7 7 0 0 0 7 7m-9 5.2A11 11 0 1 0 2.8 18L2 22Z" />
        </g>
    </svg>
);

const EmailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
    </svg>
);

export default Navbar;