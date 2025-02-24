import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className="container px-4 sm:px-[40px] md:px-[40px] lg:px-[70px] py-10 mx-auto">
            <ol className="flex space-x-2 text-sm">
                <li>
                    <Link href="/" className="text-black text-[12px] font-[700]" style={{ fontFamily: "Arial" }}>
                        HOME
                    </Link>
                    <span className="mx-2">›</span>
                </li>
                {items.map((item, index) => (
                    <li key={index} className={`${item.href ? "text-black" : "text-gray-500"} uppercase !text-[12px] !font-[700]`}>
                        {item.href ? (
                            <Link href={item.href} className="text-black">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span className="mx-2">›</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
