import type { Metadata } from "next";
import JackpotTwinsClientPage from "./JackpotTwinsClientPage";

export const metadata: Metadata = {
  title: "Jackpot Twins | The Company Theatre",
  description:
    "Jackpot Twins is a world premiere comedy by Philip Riccio, produced by The Company Theatre in co-production with Mirvish Productions.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "https://companytheatre.ca/jackpot-twins",
  },
  openGraph: {
    title: "Jackpot Twins | The Company Theatre",
    description:
      "A world premiere comedy by Philip Riccio, produced by The Company Theatre in co-production with Mirvish Productions.",
    type: "website",
    url: "https://companytheatre.ca/jackpot-twins",
    images: [
      {
        url: "https://companytheatre.ca/images/jackpot-twins/poster-web-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Jackpot Twins poster",
      },
    ],
  },
};

export default function JackpotTwinsPage() {
  return <JackpotTwinsClientPage />;
}
