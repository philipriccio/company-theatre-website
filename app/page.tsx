import Image from "next/image";
import Link from "next/link";
import { currentProduction, productions, theatreInfo } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedQuotes from "@/components/AnimatedQuotes";
import ClientScripts from "@/components/ClientScripts";
import { HomePageSchema } from "@/components/StructuredData";
import UpcomingProductionSection from "@/app/components/UpcomingProductionSection";

export default function Home() {
  return (
    <main>
      <HomePageSchema />
      <ClientScripts />
      <Navigation />

      <section className="relative bg-[#0a0a0a] pt-20">
        <AnimatedQuotes />
      </section>

      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Radically Live Theatre</p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo.svg"
                alt="The Company Theatre"
                width={500}
                height={160}
                className="h-36 md:h-48 w-auto brightness-0 invert"
                id="color-logo"
              />
            </div>
            <div className="text-xl md:text-3xl text-white font-black uppercase tracking-tight leading-tight mb-10 space-y-2 brightness-110">
              <p>Twenty years of fearless theatre.</p>
              <p>World-class actors.</p>
              <p>Stories that stay with you.</p>
            </div>
            <div className="flex justify-center">
              <Link href="#about" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <UpcomingProductionSection />

      <section id="productions" className="section-padding bg-gray-100">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="body-sm text-gray-600 mb-2 block">Archive</span>
              <h2 className="heading-lg">Past Productions</h2>
              <p className="body-sm text-gray-500 mt-2">{productions.length} productions from 2005–2023</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productions.map((production) => (
              <Link
                key={production.id}
                href={`/show/${production.id}`}
                className="production-card group bg-white"
              >
                <div className="card-image relative overflow-hidden bg-gray-200">
                  {production.images && production.images.length > 0 ? (
                    <Image
                      src={production.images[0]}
                      alt={production.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-white/20 heading-xl text-4xl">{production.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="body-sm text-gray-500 mb-2 block">{production.dates || production.year}</span>
                  <h3 className="heading-md text-xl group-hover:text-accent transition-colors mb-2">
                    {production.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-4">
                    {production.synopsis}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <span className="btn-secondary text-xs py-2 px-4">More Information</span>
                    <span className="btn-primary text-xs py-2 px-4 opacity-50 cursor-not-allowed">Closed</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-black text-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-xl mb-10">RADICALLY LIVE.</h2>
            <div className="space-y-6 body-lg text-white/80 text-left md:text-center">
              <p>{theatreInfo.about.whoWeAre}</p>
              <p>{theatreInfo.about.mission}</p>
              <p>{theatreInfo.about.approach}</p>
            </div>
            <div className="mt-12 pt-10 border-t border-white/20">
              <p className="text-white/60 italic text-lg">{theatreInfo.about.stats}</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              <div>
                <span className="heading-xl text-accent">13</span>
                <p className="body-sm text-white/60 mt-1">Productions</p>
              </div>
              <div>
                <span className="heading-xl text-accent">20</span>
                <p className="body-sm text-white/60 mt-1">Years</p>
              </div>
              <div>
                <span className="heading-xl text-accent">15+</span>
                <p className="body-sm text-white/60 mt-1">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
