import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

type SearchParams = Record<string, string | string[] | undefined>;

const REVEAL_AT = new Date("2026-03-31T00:00:00-05:00");

export function shouldRevealJackpotTwins(searchParams?: SearchParams) {
  const revealParam = searchParams?.reveal;
  const hasRevealOverride = Array.isArray(revealParam) ? revealParam.length > 0 : Boolean(revealParam);

  return hasRevealOverride || Date.now() >= REVEAL_AT.getTime();
}

export function JackpotTwinsTeaserSection() {
  return (
    <section id="current" className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-5xl border border-black/10 bg-white px-6 py-14 md:px-10 md:py-18 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="status-badge">Coming Soon</span>
            <h2 className="heading-xl mt-8">Our Next Production</h2>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent md:text-sm">
              Announcement · March 31, 2026 · Midnight EST
            </p>
            <p className="body-lg mt-6 text-gray-700">
              Something extraordinary is on deck. We&apos;re preparing a new production with some of Canada&apos;s
              finest actors - and we&apos;ll reveal everything on March 31.
            </p>
            {/* Link removed - embargoed until March 31 */}
          </div>

          <div className="mx-auto mt-12 max-w-4xl border border-black bg-black px-6 py-10 text-center shadow-[12px_12px_0_0_#ff3b1d] md:px-10 md:py-12">
            <h3 className="text-2xl font-bold uppercase tracking-[0.05em] text-white md:text-3xl">Be the first to know</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Join the mailing list for the official announcement, ticket updates, and first word when the curtain
              rises on what&apos;s next.
            </p>
            <div className="mt-8">
              <NewsletterSignup showNameFields={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JackpotTwinsHomepageAnnouncement() {
  return (
    <section id="current" className="relative overflow-hidden bg-black pt-20 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/jackpot-twins/poster-web-1800x750.jpg"
          alt="Jackpot Twins campaign artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/30" />
      </div>

      <div className="container-main relative z-10 flex min-h-[min(100vh,920px)] items-end py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-accent">World Premiere · Spring 2027</p>
          <h2 className="heading-xl text-white">Jackpot Twins</h2>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/80 md:text-3xl">
            A new comedy by Philip Riccio
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/60 md:text-base">
            CAA Theatre · Toronto · In association with Mirvish Productions
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="https://jackpottwins.ca" target="_blank" rel="noreferrer" className="btn-primary">
              Visit jackpottwins.ca
            </Link>
            <Link href="/jackpot-twins" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
              Production Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
