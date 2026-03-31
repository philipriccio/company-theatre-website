import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CastCreativesTabs from "@/components/CastCreativesTabs";
import { SignupButton } from "@/components/SignupModal";
import { CastMember, CrewMember } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jackpot Twins | The Company Theatre",
  description:
    "World premiere of Jackpot Twins, a new comedy by Philip Riccio. Starring Seana McKenna, Nora McLellan, Tony Nappo, Colin A Doyle, Caroline Toal. March 2027 at CAA Theatre, Toronto.",
  openGraph: {
    title: "Jackpot Twins | The Company Theatre",
    description:
      "World premiere of Jackpot Twins, a new comedy by Philip Riccio. Starring Seana McKenna, Nora McLellan, Tony Nappo, Colin A Doyle, Caroline Toal. March 2027 at CAA Theatre, Toronto.",
    type: "article",
    images: [
      {
        url: "https://companytheatre.ca/images/jackpot-twins/poster-web-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Jackpot Twins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jackpot Twins | The Company Theatre",
    description:
      "World premiere of Jackpot Twins, a new comedy by Philip Riccio. March 2027 at CAA Theatre, Toronto.",
    images: ["https://companytheatre.ca/images/jackpot-twins/poster-web-1200x630.jpg"],
  },
  alternates: {
    canonical: "https://companytheatre.ca/jackpot-twins",
  },
};

const cast: CastMember[] = [
  {
    actor: "Seana McKenna",
    headshot: "/images/jackpot-twins/headshots/seana-mckenna.jpeg",
  },
  {
    actor: "Nora McLellan",
    headshot: "/images/jackpot-twins/headshots/nora-mclellan.jpeg",
  },
  {
    actor: "Tony Nappo",
    headshot: "/images/jackpot-twins/headshots/tony-nappo.jpg",
  },
  {
    actor: "Colin A Doyle",
    headshot: "/images/jackpot-twins/headshots/colin-doyle.jpg",
  },
  {
    actor: "Caroline Toal",
    headshot: "/images/jackpot-twins/headshots/caroline-toal.jpg",
  },
];

const crew: CrewMember[] = [
  { role: "Written & Directed by", name: "Philip Riccio" },
  { role: "Producer", name: "Janice Peters Gibson" },
  { role: "Set Design", name: "Anahita Dehbonehie" },
  { role: "Lighting Design", name: "Kevin Lamotte" },
];

export default function JackpotTwinsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Banner */}
      <div className="pt-20 bg-black">
        {/* Status Banner */}
        <div className="bg-accent">
          <div className="container-main px-6 py-3 flex items-center justify-between">
            <span className="text-white text-sm font-semibold uppercase tracking-wide">
              Coming Soon
            </span>
            <Link
              href="/#productions"
              className="text-white/80 text-sm hover:text-white flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Productions
            </Link>
          </div>
        </div>

        {/* Hero Image — poster displayed clean, no overlay */}
        <div className="relative bg-black">
          <Image
            src="/images/jackpot-twins/poster-web-1800x1200.jpg"
            alt="Jackpot Twins"
            width={1800}
            height={1200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Details below poster */}
        <div className="bg-black container-main px-6 py-8 md:py-12 text-center">
          <p className="text-white/80 text-lg md:text-xl font-medium">
            A new comedy by Philip Riccio · March 9–28, 2027 · CAA Theatre, Toronto
          </p>
          <p className="mt-3 text-white/50 text-sm md:text-base font-semibold uppercase tracking-wide">
            David and Hannah Mirvish and The Company Theatre Present
          </p>
          <div className="mt-8">
            <Link
              href="https://jackpottwins.ca"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center justify-center text-lg px-10 py-4"
            >
              Visit Official Production Website
            </Link>
          </div>
        </div>
      </div>

      {/* Production Details Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About the Production */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="heading-md text-xl mb-4">About the Production</h2>
                <div className="space-y-6 body-md text-gray-700 leading-relaxed">
                  <p>
                    Imagine winning the lottery. Now imagine doing it again. And again. For the
                    Fitzgeralds, a third grand prize isn&apos;t a miracle — it&apos;s a cosmic
                    catastrophe. Suddenly, their quiet bungalow is a magnet for opportunistic
                    lovers, estranged daughters, and a relentless lottery investigator who suspects
                    their &ldquo;luck&rdquo; is a crime.
                  </p>
                  <p>
                    Between dodging the local press and punching the clock at the snack factory,
                    the sisters must survive the absurdity of their own impossible fortune. As the
                    oversized cheques pile up, they realize that beating the odds was the easy
                    part. The real adventure is figuring out who you are when you finally have
                    nothing left to wish for.
                  </p>
                  <p>
                    Canadian theatre legends <em>Seana McKenna</em> and{" "}
                    <em>Nora McLellan</em> lead an all-star cast in{" "}
                    <em>Jackpot Twins</em>, reuniting Mirvish and The Company Theatre for the
                    first time since <em>Things I Know to be True</em> in 2023.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 sticky top-24">
                <h3 className="heading-md text-base mb-6">Production Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Dates</p>
                      <p className="font-medium">March 9 – 28, 2027</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Venue</p>
                      <p className="font-medium">CAA Theatre · Toronto</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Type</p>
                      <p className="font-medium">World Premiere · Comedy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Presented by</p>
                      <p className="font-medium">
                        David and Hannah Mirvish and The Company Theatre Present
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="https://jackpottwins.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center mt-8"
                >
                  Visit jackpottwins.ca
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast & Creatives */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-lg mb-0">Cast & Creatives</h2>
          <CastCreativesTabs cast={cast} crew={crew} />
        </div>
      </section>

      {/* Tickets Section */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="container-main max-w-4xl">
          <h3 className="heading-lg">Get Your Tickets</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-700 md:text-lg">
            Tickets are available now through an Off&nbsp;Mirvish Season Subscription.
            Or sign up to be the first to know when single tickets go on sale.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://mirvish.com/subscriptions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-black hover:bg-black/85 text-white text-lg font-bold uppercase tracking-wide px-10 py-4 transition-colors"
            >
              Subscribe at Mirvish.com
            </Link>
            <SignupButton className="inline-flex items-center justify-center bg-[#E8272A] hover:bg-[#cc2224] text-white text-lg font-bold uppercase tracking-wide px-10 py-4 transition-colors">
              Single Ticket Notification
            </SignupButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
