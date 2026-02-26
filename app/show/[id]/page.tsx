import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, AlertCircle } from "lucide-react";
import { getProductionById, getAllProductions, currentProduction } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CastCreativesTabs from "@/components/CastCreativesTabs";
import ProductionGallery from "@/components/ProductionGallery";

interface ShowPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const productions = getAllProductions();
  return productions.map((production) => ({
    id: production.id,
  }));
}

export async function generateMetadata({ params }: ShowPageProps) {
  const { id } = await params;
  const production = getProductionById(id);
  
  if (!production) {
    return { title: "Production Not Found" };
  }
  
  return {
    title: `${production.title} | The Company Theatre`,
    description: production.synopsis.slice(0, 160),
  };
}

export default async function ShowPage({ params }: ShowPageProps) {
  const { id } = await params;
  const production = getProductionById(id);

  if (!production) {
    notFound();
  }

  const isCurrent = production.id === currentProduction.id;
  const isPast = production.status === "past";
  const hasImages = production.images && production.images.length > 0;

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Banner */}
      <div className="pt-20 bg-black">
        {/* Status Banner */}
        <div className="bg-accent">
          <div className="container-main px-6 py-3 flex items-center justify-between">
            <span className="text-white text-sm font-semibold uppercase tracking-wide">
              {isCurrent ? "Now Playing" : isPast ? "Past Production" : "Coming Soon"}
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
          {hasImages ? (
            <Image
              src={production.images[0]}
              alt={production.title}
              fill
              className="object-cover object-top"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
              <span className="text-white/20 heading-hero text-6xl md:text-8xl">{production.title.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 container-main px-6 pb-8 md:pb-12">
            <h1 className="heading-xl text-white mb-4">{production.title}</h1>
            {production.dates && (
              <p className="text-white/80 text-lg md:text-xl font-medium">{production.dates}</p>
            )}
          </div>
        </div>
      </div>

      {/* Show Info Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Dual CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="btn-secondary flex-1 sm:flex-none justify-center">
                  More Information
                </button>
                <button 
                  className={`btn-primary flex-1 sm:flex-none justify-center ${isPast ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isPast}
                >
                  {isPast ? "Closed" : "Book Tickets"}
                </button>
              </div>

              {/* Show Details */}
              <div className="space-y-6 mb-8">
                {production.playwright && (
                  <div className="flex items-start gap-4">
                    <span className="text-gray-500 text-sm uppercase tracking-wide w-24 shrink-0">Playwright</span>
                    <span className="font-medium">{production.playwright}</span>
                  </div>
                )}
                {production.director && (
                  <div className="flex items-start gap-4">
                    <span className="text-gray-500 text-sm uppercase tracking-wide w-24 shrink-0">Director</span>
                    <span className="font-medium">{production.director}</span>
                  </div>
                )}
                {production.venue && (
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <span>{production.venue}</span>
                  </div>
                )}
                {production.partnership && (
                  <div className="flex items-start gap-4">
                    <span className="text-gray-500 text-sm uppercase tracking-wide w-24 shrink-0">Presented with</span>
                    <span className="text-gray-700">{production.partnership}</span>
                  </div>
                )}
              </div>

              {/* Synopsis */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="heading-md text-xl mb-4">About the Production</h2>
                <p className="body-md text-gray-700 leading-relaxed">{production.synopsis}</p>
                {production.adaptation && (
                  <p className="body-sm text-gray-500 mt-4 italic">Adaptation: {production.adaptation}</p>
                )}
              </div>

              {/* Advisory */}
              {production.advisory && (
                <div className="bg-gray-100 p-4 flex items-start gap-3 mb-8">
                  <AlertCircle size={20} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{production.advisory}</p>
                </div>
              )}

              {/* Quotes */}
              {production.quotes && production.quotes.length > 0 && (
                <div className="space-y-4 mb-12">
                  <h2 className="heading-md text-xl mb-4">What People Are Saying</h2>
                  {production.quotes.map((quote, index) => (
                    <blockquote key={index} className="border-l-4 border-accent pl-6 py-2">
                      <p className="text-lg font-medium text-gray-900 mb-2">"{quote.text}"</p>
                      <cite className="text-sm text-gray-500 not-italic">— {quote.source}</cite>
                    </blockquote>
                  ))}
                </div>
              )}

              {/* Reviews */}
              {production.reviews && production.reviews.length > 0 && (
                <div className="space-y-4 mb-12">
                  <h2 className="heading-md text-xl mb-4">Reviews</h2>
                  {production.reviews.map((review, index) => (
                    <blockquote key={index} className="border-l-4 border-gray-300 pl-6 py-2">
                      <p className="text-gray-700 mb-2">"{review.quote}"</p>
                      <cite className="text-sm text-gray-500 not-italic">— {review.source}</cite>
                    </blockquote>
                  ))}
                </div>
              )}

              {/* Awards */}
              {production.awards && production.awards.length > 0 && (
                <div className="mb-12">
                  <h2 className="heading-md text-xl mb-4">Awards & Recognition</h2>
                  <ul className="space-y-2">
                    {production.awards.map((award, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="text-accent">★</span>
                        <span className="text-gray-700">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Press */}
              {production.press && production.press.length > 0 && (
                <div className="mb-12">
                  <h2 className="heading-md text-xl mb-4">Press Coverage</h2>
                  <ul className="space-y-3">
                    {production.press.map((item, index) => (
                      <li key={index} className="border-b border-gray-100 pb-3">
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.source}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 sticky top-24">
                <h3 className="heading-md text-base mb-6">Production Details</h3>
                
                <div className="space-y-4">
                  {production.dates && (
                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">Dates</p>
                        <p className="font-medium">{production.dates}</p>
                      </div>
                    </div>
                  )}
                  
                  {production.venue && (
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">Venue</p>
                        <p className="font-medium">{production.venue}</p>
                      </div>
                    </div>
                  )}
                  
                  {production.year && !production.dates && (
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">Year</p>
                        <p className="font-medium">{production.year}</p>
                      </div>
                    </div>
                  )}
                </div>

                {!isPast && (
                  <button className="btn-primary w-full justify-center mt-8">
                    Book Tickets
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast & Creatives */}
      {(production.cast.length > 0 || production.crew.length > 0) && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="heading-lg mb-0">Cast & Creatives</h2>
            <CastCreativesTabs cast={production.cast} crew={production.crew} />
          </div>
        </section>
      )}

      {/* Production Photos */}
      {hasImages && (
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <h2 className="heading-lg mb-8">Production Photos</h2>
            <ProductionGallery images={production.images} title={production.title} />
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
