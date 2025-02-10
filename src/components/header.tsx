/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type LinkItem = {
    text: string;
    href: string;
    hasIcon: boolean;
};

const Navbar: React.FC = () => {
    const linkItems: LinkItem[] = [
        { text: "ACCOMMODATION", href: "#", hasIcon: true },
        { text: "DINING", href: "#", hasIcon: true },
        { text: "WELLNESS", href: "#", hasIcon: true },
        { text: "EXPERIENCES", href: "#", hasIcon: true },
        { text: "FESTIVALS", href: "#", hasIcon: true },
        { text: "ABOUT", href: "#", hasIcon: false },
    ];

    return (
        <nav className="group z-10 bg-transparent absolute top-0 left-0 w-full py-4 px-5 transition-all duration-300 ease-in-out hover:bg-white">
            {/* Center Logo and Social Media */}
            <div className="container mx-auto relative flex items-center justify-between border-b border-white border-opacity-20 group-hover:border-borderColor px-4 sm:px-6 lg:px-4 w-full">
                {/* Left Spacer (Ensures Centering) */}
                <div className="flex-1" />

                {/* Centered Logo */}
                <div className="flex justify-center">
                    <Link href="/">
                        <img
                            className="pb-2 filter invert brightness-0 transition-all duration-300 ease-in-out group-hover:filter-none"
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                            src="https://willingresort.github.io/assests-hosting/images/logo.png"
                            alt="Logo"
                            width={70}
                            height={60}
                        />
                    </Link>
                </div>

                {/* Right Social Media Section */}
                <div className="flex-1 justify-end gap-5 hidden md:flex items-center">
                    <SocialLink
                        href="https://wa.me/17166888"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <circle cx="9" cy="9" r="1" />
                                    <circle cx="15" cy="15" r="1" />
                                    <path d="M8 9a7 7 0 0 0 7 7m-9 5.2A11 11 0 1 0 2.8 18L2 22Z" />
                                </g>
                            </svg>
                        }
                        label="What&apos;s App"
                    />
                    <SocialLink
                        href="mailto:willingbhutan@gmail.com"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
                            </svg>
                        }
                        label="Email"
                    />
                </div>
            </div>

            {/* Center Navigation */}
            <div className="container px-4 sm:px-6 lg:px-4 w-full mx-auto flex items-center justify-center gap-[30px] mt-3">
                {linkItems.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`text-sm font-normal text-white hover:!text-black group-hover:text-textColor transition-colors duration-300 relative group ${link.hasIcon ? "before:content-[''] before:absolute before:top-[45%] before:right-[-15px] before:w-[4px] before:h-[4px] before:bg-white group-hover:before:bg-textColor before:rounded-full" : ""}`}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

type SocialLinkProps = {
    href: string;
    icon: React.ReactNode;
    label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white group-hover:text-textColor font-light no-underline"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
};

export default Navbar;
