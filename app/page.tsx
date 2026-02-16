import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { productions, theatreInfo } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedQuotes from "@/components/AnimatedQuotes";

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* Animated Quotes Hero Section with Background Slideshow */}
      <section className="relative bg-[#0a0a0a] pt-20">
        <AnimatedQuotes />
      </section>

      {/* Radically Live Section - Full width text on black background */}
      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Radically Live Theatre</p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/images/logo-white-large.png" 
                alt="The Company Theatre" 
                width={400} 
                height={128} 
                className="h-24 md:h-32 w-auto transition-all duration-1000" 
                id="color-logo" 
              />
            </div>
            <p className="body-lg text-white/80 mb-8">
              The Company Theatre produces provocative international plays with Canada&apos;s best actors. 
              Founded in 2004, we create theatre magic with authentic text-based performances that bring you 
              the drama in real time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#about" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Production - Vertical Design (KEEP THIS ONE) */}
      <section id="current" className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center py-16">
            <span className="status-badge">Coming Soon</span>
            <h2 className="heading-xl mb-6 mt-8">Our Next Production</h2>
            <p className="body-lg text-gray-700 mb-8">
              Something extraordinary is in the works. We&apos;re preparing our next provocative international production with Canada&apos;s best actors.
            </p>
            <p className="body-md text-gray-600 mb-8">
              Stay tuned for the announcement. Sign up for our newsletter to be the first to know.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn-primary">
                Stay Updated
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Productions - Past Productions Only */}
      <section id="productions" className="section-padding bg-gray-100">
        <div className="container-main">
          {/* Past Productions */}
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
                      <span className="text-white/20 heading-xl text-4xl">
                        {production.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="body-sm text-gray-500 mb-2 block">{production.dates || production.year}</span>
                  <h3 className="heading-md text-xl group-hover:text-accent transition-colors mb-2">
                    {production.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{production.synopsis}</p>
                  <div className="flex gap-3 mt-4">
                    <span className="btn-secondary text-xs py-2 px-4">Event Information</span>
                    <span className="btn-primary text-xs py-2 px-4 opacity-50 cursor-not-allowed">Closed</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Full width text on black background */}
      <section id="about" className="section-padding bg-black text-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <span className="body-sm text-white/60 mb-4 block">About Company</span>
            <h2 className="heading-xl mb-8">
              RADICALLY LIVE.
            </h2>
            <div className="space-y-6 body-lg text-white/80">
              <p>
                {theatreInfo.about.whoWeAre}
              </p>
              <p>
                {theatreInfo.about.mission}
              </p>
              <p>
                {theatreInfo.about.approach}
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 justify-center">
              <div>
                <span className="heading-xl text-accent">{productions.length + 1}</span>
                <p className="body-sm text-white/60 mt-1">Productions</p>
              </div>
              <div>
                <span className="heading-xl text-accent">20+</span>
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
