import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import ClientLayout from "@/components/layout/client-layout";
import JotFormWidget from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Willing Resort",
  description:
    "Willing Resort in Trongsa is truly an enchanting destination, nestled amidst the captivating landscape of central Bhutan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="relative">
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <JotFormWidget /> {/* Add JotForm Widget here */}
      </body>
    </html>
  );
}
