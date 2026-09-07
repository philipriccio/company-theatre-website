import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";
import CanadaHelpsEmbed from "@/components/CanadaHelpsEmbed";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const canadaHelpsProfile =
  "https://www.canadahelps.org/en/charities/the-company-theatre/";

export const metadata: Metadata = {
  title: "Support The Company Theatre",
  description:
    "Support The Company Theatre with a secure one-time or monthly donation through CanadaHelps.",
  alternates: {
    canonical: "https://companytheatre.ca/support",
  },
  openGraph: {
    title: "Support The Company Theatre",
    description:
      "Help The Company Theatre keep creating fearless, radically live theatre.",
    url: "https://companytheatre.ca/support",
  },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <header className="bg-black px-6 pb-16 pt-32 text-white md:pb-24 md:pt-40">
        <div className="container-narrow text-center">
          <span className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            <Heart aria-hidden="true" size={18} />
            Support the work
          </span>
          <h1 className="heading-xl mb-8">Keep fearless theatre live.</h1>
          <p className="body-lg mx-auto max-w-2xl text-white/75">
            Your support helps The Company Theatre bring bold stories and
            extraordinary Canadian artists to the stage. Every contribution
            makes the next production possible.
          </p>
        </div>
      </header>

      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <div className="mb-10 text-center">
            <p className="body-sm mb-3 font-bold text-accent">Donate securely</p>
            <h2 className="heading-lg mb-5">Make a donation</h2>
            <p className="body-md mx-auto max-w-2xl text-gray-600">
              Choose a one-time or monthly gift below. CanadaHelps securely
              processes your donation and issues your charitable tax receipt.
            </p>
          </div>

          <div className="mx-auto max-w-3xl bg-white p-4 shadow-sm sm:p-8 md:p-10">
            <CanadaHelpsEmbed />
            <noscript>
              <p className="body-md text-center text-gray-700">
                JavaScript is required to display the donation form. Please use
                the CanadaHelps link below instead.
              </p>
            </noscript>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-gray-600">
              Having trouble with the form?
            </p>
            <Link
              href={canadaHelpsProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Donate on CanadaHelps
              <ExternalLink aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
