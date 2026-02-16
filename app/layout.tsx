import type { Metadata } from "next";
import "./globals.css";
import { theatreInfo } from "@/lib/data";
import ClientScripts from "@/components/ClientScripts";

export const metadata: Metadata = {
  title: `${theatreInfo.name} | ${theatreInfo.tagline}`,
  description: theatreInfo.description,
  keywords: ["theatre", "Toronto", "Company Theatre", "live performance", "plays", "Philip Riccio"],
  openGraph: {
    title: theatreInfo.name,
    description: theatreInfo.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
