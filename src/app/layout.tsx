import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

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
