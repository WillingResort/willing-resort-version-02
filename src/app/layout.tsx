import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import ClientLayout from "@/components/layout/client-layout";


export const metadata: Metadata = {
  title: "Willing Resort",
  description:
    "Willing Resort in Trongsa is truly an enchanting destination, nestled amidst the captivating landscape of central Bhutan.",
  keywords: "Willing Resort, accommodation, Bhutan, Trongsa Resort,Resort in Bhutan, luxury suites, scenic views",
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
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
