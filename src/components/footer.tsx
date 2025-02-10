/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const quickLinks1 = [
        { label: 'Rooms', href: '/resort-Information/rooms/' },
        { label: 'Dining', href: '/resort-Information/dinning/' },
        { label: 'Our Destination', href: '/destination/location/' },
        { label: 'Travel Information', href: '/destination/travel-information/' },
    ];

    const quickLinks2 = [
        { label: 'About Us', href: '/about-us/' },
        { label: 'Our Story', href: '/destination/introduction/' },
        { label: 'Culture & Conservation', href: '/culture-and-conservations/' },
        { label: 'Willing Waterfall Cafe', href: '/willing-waterfall-cafe/' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-[#F6F4F4] pt-5 mt-5">
            <div className="container mx-auto px-4 pt-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h6 className="text-dark font-semibold">Quick Links</h6>
                        <hr className="border-t-2 my-3" />
                        <div className="flex flex-wrap gap-5 pt-3">
                            <div className="flex flex-col gap-2">
                                {quickLinks1.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-sm text-[#6B6B6B] font-light hover:underline">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {quickLinks2.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-sm text-[#6B6B6B] font-light hover:underline">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h6 className="text-dark font-semibold">Contact Us</h6>
                        <hr className="border-t-2 my-3" />
                        <div className="flex flex-col gap-2 pt-3">
                            <span className="text-sm text-[#6B6B6B] font-light">
                                Location - Willing Resort
                                <br />
                                Yueling Village, Nubee Geog, Trongsa Bhutan
                            </span>
                            <Link href="tel:+97517166888" className="text-sm text-[#6B6B6B] font-light hover:underline">
                                Phone - +975 17166888 OR +975 77166888
                            </Link>
                            <Link href="tel:+97517346988" className="text-sm text-[#6B6B6B] font-light hover:underline">
                                For Willing Waterfall Cafe - +975 17346988
                            </Link>
                            <Link href="mailto:willingbhutan@gmail.com" className="text-sm text-[#6B6B6B] font-light hover:underline">
                                Email - willingbhutan@gmail.com
                            </Link>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.google.com/maps/place/Willing+Resort/@27.509853,90.4927458,17z/data=!3m1!4b1!4m9!3m8!1s0x375f23aaf28f68a9:0xa76d1198c409bb3c!5m2!4m1!1i2!8m2!3d27.5098483!4d90.4953207!16s%2Fg%2F11flz3hlgh?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                                className="text-sm text-[#6B6B6B] font-light hover:underline"
                            >
                                Get Direction to Willing Resort
                            </Link>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h6 className="text-dark font-semibold">Follow Us</h6>
                        <hr className="border-t-2 my-3" />
                        <div className="flex gap-4 pt-3">
                            <Link target="_blank" href="https://www.tiktok.com/discover/Willing-resort">
                                <img src="/icons/tiktok.svg" alt="tiktok icon" className="w-8 h-8" />
                            </Link>
                            <Link target="_blank" href="https://www.facebook.com/drukwillingresort/">
                                <img src="/icons/facebook.svg" alt="facebook icon" className="w-8 h-8" />
                            </Link>
                            <Link target="_blank" href="https://www.instagram.com/willing_resort/">
                                <img src="/icons/instagram.svg" alt="instagram icon" className="w-8 h-8" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm bg-background py-5 mt-10  font-light">
                Copyright © Willing Resort {currentYear}. All Rights Reserved.
            </div>
        </section>
    );
};

export default Footer;
