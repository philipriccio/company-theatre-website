import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cast = [
  {
    actor: "Seana McKenna",
    role: "Geraldine (Gerry) Fitzgerald",
    image: "/images/jackpot-twins/headshots/seana-mckenna.jpeg",
  },
  {
    actor: "Nora McLellan",
    role: "Bernadette (Bernie) Fitzgerald",
    image: "/images/jackpot-twins/headshots/nora-mclellan.jpeg",
  },
  {
    actor: "Tony Nappo",
    role: "Peter Mallory",
    image: "/images/jackpot-twins/headshots/tony-nappo.jpg",
  },
  {
    actor: "Colin A. Doyle",
    role: "Harold Bates",
    image: "/images/jackpot-twins/headshots/colin-doyle.jpg",
  },
  {
    actor: "Caroline Toal",
    role: "Abigail",
    image: "/images/jackpot-twins/headshots/caroline-toal.jpg",
  },
];

const creativeTeam = [
  { role: "Written & Directed by", person: "Philip Riccio" },
  { role: "Set Design", person: "Anahita Dehbonehie" },
  { role: "Lighting Design", person: "Kevin Lamotte" },
];

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
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="relative overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/jackpot-twins/poster-web-1800x750.jpg"
            alt="Jackpot Twins poster"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.96)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,59,29,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,59,29,0.12),transparent_25%)]" />
        </div>

        <div className="relative container-main px-6 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-accent">
              World Premiere • CAA Theatre • March 2027
            </p>
            <h1 className="heading-xl mb-6 text-white">Jackpot Twins</h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-2xl">
              Winning the lottery is easy. Surviving it is the hard part.
            </p>

            <div className="grid max-w-2xl gap-4 border border-white/15 bg-black/40 p-5 backdrop-blur-sm md:grid-cols-3 md:p-6">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/50">Previews</p>
                <p className="font-semibold text-white">From March 9, 2027</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/50">Press Opening</p>
                <p className="font-semibold text-white">March 14, 2027 · 2 PM</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/50">Tickets</p>
                <p className="font-semibold text-white">Via Mirvish Productions</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="https://mirvish.com" className="btn-primary" target="_blank" rel="noreferrer">
                Get Tickets
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#production-details"
                className="btn-secondary border-white text-white hover:bg-white hover:text-black"
              >
                Production Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="production-details" className="section-padding bg-black text-white">
        <div className="container-main grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">About the Production</p>
            <blockquote className="mb-8 max-w-4xl border-l-4 border-accent pl-6 text-2xl font-semibold leading-tight text-white md:text-4xl">
              The odds were 1 in 1.226 quintillion. The Fitzgerald sisters just beat them.
            </blockquote>
            <div className="max-w-4xl space-y-6 text-base leading-8 text-white/78 md:text-lg">
              <p>
                Imagine winning the lottery. Now imagine doing it again. And again. For the Fitzgeralds, a third grand prize isn&apos;t a miracle—it&apos;s a cosmic catastrophe. Suddenly, their quiet bungalow is a magnet for opportunistic lovers, estranged daughters, and a relentless lottery investigator who suspects their “luck” is a crime.
              </p>
              <p>
                Between dodging the local press and punching the clock at the snack factory, the sisters must survive the absurdity of their own impossible fortune. As the oversized cheques pile up, they realize that beating the odds was the easy part. The real adventure is figuring out who you are when you finally have nothing left to wish for.
              </p>
              <p>
                Canadian theatre legends Seana McKenna and Nora McLellan lead an all-star cast in <em>Jackpot Twins</em>, a sharp-witted, irreverent new comedy by Philip Riccio about the heavy price of getting everything you ever wanted. Hilarious, high-stakes, and surprisingly heartfelt, it&apos;s a celebration of family, fortune, and the joy of a life lived in the “win” column. <em>Jackpot Twins</em> reunites Mirvish and The Company Theatre for the first time since the hit production of <em>Things I Know to be True</em> in 2023.
              </p>
            </div>
          </div>

          <aside className="h-fit border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:sticky lg:top-24">
            <h2 className="heading-md mb-8 text-white">Production Information</h2>
            <div className="space-y-6 text-white/80">
              <div className="flex items-start gap-4">
                <CalendarDays className="mt-1 text-accent" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Previews Begin</p>
                  <p className="mt-1 font-semibold text-white">March 9, 2027</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 text-accent" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Press Opening</p>
                  <p className="mt-1 font-semibold text-white">Sunday, March 14, 2027 at 2 PM</p>
                  <p className="mt-1 text-sm text-white/60">Closing March 28, 2027 • Extension possible to April 4</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-accent" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Venue</p>
                  <p className="mt-1 font-semibold text-white">CAA Theatre</p>
                  <p className="text-sm text-white/60">651 Yonge Street, Toronto</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Co-Production</p>
                <p className="mt-2 font-semibold text-white">The Company Theatre + Mirvish Productions</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Tickets</p>
                <p className="mt-2 text-sm leading-7 text-white/70">Tickets available through Mirvish Productions.</p>
                <Link href="https://mirvish.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Visit Mirvish.com
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-[#050505] text-white">
        <div className="container-main">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Cast</p>
              <h2 className="heading-lg text-white">An all-star company</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-right">
              Portraits are presented in an editorial grid to echo the stark, high-contrast palette of the production campaign.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {cast.map((member) => (
              <article key={member.actor} className="group overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <Image
                    src={member.image}
                    alt={member.actor}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-bold uppercase tracking-[0.04em] text-white">{member.actor}</h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-white/[0.04]">
            <Image
              src="/images/jackpot-twins/poster-5x8-web.jpg"
              alt="Jackpot Twins portrait poster"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Creative Team</p>
            <h2 className="heading-lg mb-8 text-white">New work with sharp edges</h2>
            <div className="grid gap-5 border-t border-white/10 pt-6">
              {creativeTeam.map((credit) => (
                <div key={credit.role} className="flex flex-col justify-between gap-2 border-b border-white/10 pb-5 md:flex-row md:items-center">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/50">{credit.role}</p>
                  <p className="text-xl font-semibold text-white">{credit.person}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-accent/30 bg-accent/10 p-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">Tickets</p>
              <h3 className="mb-3 text-2xl font-bold uppercase tracking-[0.03em] text-white">
                Tickets available through Mirvish Productions
              </h3>
              <p className="mb-6 max-w-2xl text-white/70">
                For ticketing updates and on-sale information, visit Mirvish Productions.
              </p>
              <Link href="https://mirvish.com" target="_blank" rel="noreferrer" className="btn-primary">
                Go to Mirvish
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
