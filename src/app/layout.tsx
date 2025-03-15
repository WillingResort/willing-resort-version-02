import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

export const metadata: Metadata = {
  title: "Willing Resort",
  description: "Discover the beauty of Bhutan at Willing Resort. Nestled in the heart of central Bhutan, our resort offers tranquility, scenic views, and authentic cultural experiences.",
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
      </body>
    </html>
  );
}
