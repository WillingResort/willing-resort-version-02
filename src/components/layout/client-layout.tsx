import Navbar from "@/components/header";
import PhoneMenu from "@/components/phone/phone-menu";
import React from "react";
import ChatBotWidget from "../bot/chatbot";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            {/* Navbar shown on tablet and larger */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* PhoneMenu shown on mobile screens */}
            <div className="md:hidden sticky top-0">
                <PhoneMenu />
            </div>

            {children}
            <ChatBotWidget />

        </React.Fragment>
    );
}
