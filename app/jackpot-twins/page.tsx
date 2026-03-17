import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jackpot Twins | The Company Theatre",
  description: "JACKPOT TWINS — a world premiere from Philip Riccio, co-produced with Mirvish Productions. Details coming soon.",
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
    description: "A world premiere from Philip Riccio. Details coming soon.",
    type: "website",
    url: "https://companytheatre.ca/jackpot-twins",
  },
};

export default function JackpotTwinsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20 bg-black text-white">
        <div className="bg-accent">
          <div className="container-main px-6 py-3 flex items-center justify-between gap-4">
            <span className="text-white text-sm font-semibold uppercase tracking-wide">
              Coming March 31
            </span>
            <Link
              href="/"
              className="text-white/80 text-sm hover:text-white flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_40%),linear-gradient(180deg,#0a0a0a_0%,#000_55%,#050505_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="relative container-main px-6 py-20 md:py-28 lg:py-36">
            <div className="max-w-5xl">
              <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6">
                A world premiere from Philip Riccio
              </p>
              <h1 className="heading-xl text-white mb-6 text-balance">JACKPOT TWINS</h1>
              <p className="text-white/80 text-lg md:text-2xl font-medium max-w-3xl mb-10">
                Co-produced with Mirvish Productions for the CAA Theatre, Toronto.
              </p>
              <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white/80">
                <Sparkles size={16} className="text-accent" />
                Announcement coming March 31
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="btn-secondary flex-1 sm:flex-none justify-center">More Information Soon</span>
                <span className="btn-primary flex-1 sm:flex-none justify-center opacity-50 cursor-not-allowed">
                  Tickets Coming Soon
                </span>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <span className="text-gray-500 text-sm uppercase tracking-wide w-24 shrink-0">Playwright</span>
                  <span className="font-medium">Philip Riccio (World Premiere)</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-500 text-sm uppercase tracking-wide w-24 shrink-0">Tagline</span>
                  <span className="font-medium">A world premiere from Philip Riccio</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-500 text-sm uppercase tracking-wide w-24 shrink-0">Presented with</span>
                  <span className="text-gray-700">Mirvish Productions</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                  <span>CAA Theatre, Toronto (~800 seats)</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="heading-md text-xl mb-4">About the Production</h2>
                <p className="body-md text-gray-700 leading-relaxed">
                  Details coming soon. Be the first to know.
                </p>
                <p className="body-md text-gray-700 leading-relaxed">
                  JACKPOT TWINS is an upcoming Company Theatre presentation in partnership with Mirvish Productions.
                  This page is holding space for the official materials, creative details, and performance information
                  that will be released with the public announcement.
                </p>
              </div>

              <div className="bg-gray-100 p-6 md:p-8 border-l-4 border-accent">
                <p className="text-gray-500 text-sm uppercase tracking-[0.18em] mb-3">Status</p>
                <p className="heading-md text-xl md:text-2xl text-gray-900 mb-3">Coming March 31</p>
                <p className="text-gray-700 leading-relaxed">
                  Full production details, imagery, and date information will replace this placeholder content once the
                  announcement materials are finalized.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 sticky top-24">
                <h2 className="heading-md text-base mb-6">Production Details</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Status</p>
                      <p className="font-medium">Coming March 31</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Venue</p>
                      <p className="font-medium">CAA Theatre, Toronto</p>
                      <p className="text-sm text-gray-500">Approx. 800 seats</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Co-Producer</p>
                    <p className="font-medium">Mirvish Productions</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Writer</p>
                    <p className="font-medium">Philip Riccio</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="body-sm text-gray-600">
                    Placeholder page only. Replace copy, artwork, and dates when Mirvish materials arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
