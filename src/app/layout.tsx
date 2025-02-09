import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";

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
      <body className="relative">
        <Header />
        {children}

        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
