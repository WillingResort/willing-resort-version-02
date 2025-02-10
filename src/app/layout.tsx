import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/header";
import PhoneMenu from "@/components/phone/phone-menu";

export const metadata: Metadata = {
  title: "Willing Resort",
  description: "Willing Resort in Trongsa is truly an enchanting destination, nestled amidst the captivating landscape of central Bhutan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="relative">
        {/* Navbar shown on tablet and larger */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* PhoneMenu shown on mobile screens */}
        <div className="md:hidden">
          <PhoneMenu />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
