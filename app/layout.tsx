import type { Metadata, Viewport } from "next";
import "./globals.css";
import { theatreInfo } from "@/lib/data";
import ClientScripts from "@/components/ClientScripts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OrganizationSchema } from "@/components/StructuredData";

const siteUrl = "https://companytheatre.ca";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${theatreInfo.name} | ${theatreInfo.tagline}`,
    template: `%s | ${theatreInfo.name}`,
  },
  description: "Toronto's award-winning theatre company. Twenty years of fearless productions featuring Canada's finest actors. Dora Award winners for Jerusalem, John, and more.",
  keywords: [
    "theatre", "Toronto theatre", "Company Theatre", "live performance", 
    "plays", "Philip Riccio", "Allan Hawco", "Kim Coates", "Jerusalem play",
    "Toronto plays", "Canadian theatre", "Dora Award", "independent theatre",
    "drama Toronto", "stage productions", "Jackpot Twins", "Seana McKenna",
    "Nora McLellan", "CAA Theatre", "Mirvish", "world premiere", "new comedy"
  ],
  authors: [{ name: "The Company Theatre" }],
  creator: "The Company Theatre",
  publisher: "The Company Theatre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: theatreInfo.name,
    description: "Twenty years of fearless theatre. World-class actors. Stories that stay with you.",
    url: siteUrl,
    siteName: theatreInfo.name,
    images: [
      {
        url: "/images/jackpot-twins/poster-web-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Jackpot Twins — A New Comedy by Philip Riccio. Coming Spring 2027.",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: theatreInfo.name,
    description: "Twenty years of fearless theatre. World-class actors. Stories that stay with you.",
    site: "@companytheatre",
    creator: "@companytheatre",
    images: ["/images/jackpot-twins/poster-web-1200x630.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <OrganizationSchema />
      </head>
      <body>
        {children}
        <ClientScripts />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
