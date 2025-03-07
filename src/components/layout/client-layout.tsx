"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/header";
import PhoneMenu from "@/components/phone/phone-menu";
import ChatBotWidget from "../bot/chatbot";
import Footer from "../footer";
import GlobalLoading from "@/app/loading";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false); // Hide loading when everything is loaded
        if (document.readyState === "complete") {
            handleLoad(); // If already loaded, remove loading immediately
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (loading) {
        return <GlobalLoading />;
    }

    return (
        <React.Fragment>
            {/* Navbar shown on tablet and larger */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* PhoneMenu shown on mobile screens */}
            <div className="md:hidden">
                <PhoneMenu />
            </div>

            {children}
            <ChatBotWidget />
            <Footer />
        </React.Fragment>
    );
}
