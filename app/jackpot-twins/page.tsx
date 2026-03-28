import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CastCreativesTabs from "@/components/CastCreativesTabs";
import NewsletterSignup from "@/components/NewsletterSignup";
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
    role: "Geraldine Fitzgerald",
    headshot: "/images/jackpot-twins/headshots/seana-mckenna.jpeg",
  },
  {
    actor: "Nora McLellan",
    role: "Bernadette Fitzgerald",
    headshot: "/images/jackpot-twins/headshots/nora-mclellan.jpeg",
  },
  {
    actor: "Tony Nappo",
    role: "Peter Mallory",
    headshot: "/images/jackpot-twins/headshots/tony-nappo.jpg",
  },
  {
    actor: "Colin A Doyle",
    role: "Harold Bates",
    headshot: "/images/jackpot-twins/headshots/colin-doyle.jpg",
  },
  {
    actor: "Caroline Toal",
    role: "Abigail",
    headshot: "/images/jackpot-twins/headshots/caroline-toal.jpg",
  },
];

const crew: CrewMember[] = [
  { role: "Written & Directed by", name: "Philip Riccio" },
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

        {/* Hero Image */}
        <div className="relative h-[65vh] md:h-[80vh]">
          <Image
            src="/images/jackpot-twins/poster-portrait.jpg"
            alt="Jackpot Twins"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 container-main px-6 pb-8 md:pb-12">
            <h1 className="heading-xl text-white mb-4">Jackpot Twins</h1>
            <p className="text-white/80 text-lg md:text-xl font-medium">
              by Philip Riccio · March 9–28, 2027 · CAA Theatre, Toronto
            </p>
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
                        David and Hannah Mirvish and The Company Theatre
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

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="container-main max-w-4xl">
          <h3 className="heading-lg">Don&apos;t miss it</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Tickets are available through Mirvish Productions. Visit the official Jackpot Twins
            site for the full announcement, cast bios, and creative details.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://jackpottwins.ca"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Visit jackpottwins.ca
            </Link>
            <Link
              href="https://mirvish.com"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Get Tickets at Mirvish
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="border border-black bg-black px-6 py-10 text-center shadow-[12px_12px_0_0_#ff3b1d] md:px-10 md:py-12">
            <h3 className="text-2xl font-bold uppercase tracking-[0.05em] text-white md:text-3xl">
              Stay in the loop
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Join our mailing list for ticket updates, behind-the-scenes content, and first word
              on what&apos;s next.
            </p>
            <div className="mt-8">
              <NewsletterSignup showNameFields={true} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
