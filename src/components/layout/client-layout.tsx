"use client";
import Navbar from "@/components/header";
import PhoneMenu from "@/components/phone/phone-menu";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
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
            <ProgressBar
                height="10px"
                color="green"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </React.Fragment>
    );
}
