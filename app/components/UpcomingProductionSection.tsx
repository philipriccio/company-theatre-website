"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const REVEAL_TIME = new Date("2026-03-31T00:00:00-05:00").getTime();

export default function UpcomingProductionSection() {
  const [revealed, setRevealed] = useState(() => Date.now() >= REVEAL_TIME);

  useEffect(() => {
    if (revealed) return;

    const msUntilReveal = REVEAL_TIME - Date.now();

    if (msUntilReveal > 0) {
      const timer = window.setTimeout(() => setRevealed(true), msUntilReveal);
      return () => window.clearTimeout(timer);
    }

    setRevealed(true);
  }, [revealed]);

  if (revealed) {
    return (
      <section id="current" className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto max-w-6xl border border-black p-8 md:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-16">
              <div className="mx-auto w-full max-w-[360px] border border-black bg-black p-3 shadow-[12px_12px_0_0_#ff3b1d]">
                <div className="relative aspect-[5/8] w-full overflow-hidden bg-black">
                  <Image
                    src="/images/jackpot-twins/poster-5x8-web.jpg"
                    alt="Jackpot Twins poster"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="body-sm text-accent mb-4 block">Our Next Production</p>
                <h2 className="heading-xl mb-5">Jackpot Twins</h2>
                <p className="body-lg max-w-3xl text-gray-700 mb-8">
                  THE ODDS WERE 1 IN 1.226 QUINTILLION. THE FITZGERALD SISTERS JUST BEAT THEM.
                </p>
                <p className="body-sm text-gray-500 mb-4">
                  Seana McKenna, Nora McLellan, Tony Nappo, Colin A. Doyle, Caroline Toal
                </p>
                <p className="body-sm text-gray-600 mb-8">
                  World Premiere — CAA Theatre, Toronto — Spring 2027
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="/jackpot-twins" className="btn-primary">
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                  <p className="body-sm text-gray-500">A co-production with Mirvish Productions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="current" className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center py-16">
          <span className="status-badge">Coming Soon</span>
          <h2 className="heading-xl mb-6 mt-8">Our Next Production</h2>
          <p className="inline-flex items-center gap-2 text-xs md:text-sm text-accent font-semibold tracking-wide uppercase mb-5">
            <Calendar size={14} />
            Announcement: March 31, 2026
          </p>
          <p className="body-lg text-gray-700 mb-6">
            Something extraordinary is in the works.<br />
            We&apos;re preparing our most ambitious production yet<br />
            with some of Canada&apos;s best actors.
          </p>
          <Link
            href="/jackpot-twins"
            className="mb-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gray-600 transition hover:text-accent"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
          <div className="bg-black rounded-2xl p-10 md:p-14">
            <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3">
              Be the First to Know
            </h3>
            <p className="text-white/70 text-lg mb-8">
              Sign up and we&apos;ll let you know the moment<br />
              we make our announcement on March 31.
            </p>
            <NewsletterSignup showNameFields={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
