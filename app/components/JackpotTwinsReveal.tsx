import Image from "next/image";
import Link from "next/link";
import { SignupButton } from "@/components/SignupModal";

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
              <SignupButton className="px-8 py-4 bg-accent hover:bg-accent/90 text-white text-lg font-bold uppercase tracking-wide rounded-lg transition-all inline-flex items-center gap-2">
                Sign Up
              </SignupButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JackpotTwinsHomepageAnnouncement() {
  return (
    <section id="current" className="bg-black pt-20 text-white">
      {/* Poster — full width, no filter, no crop */}
      <div className="relative w-full">
        <Image
          src="/images/jackpot-twins/poster-web-1800x1200.jpg"
          alt="Jackpot Twins campaign artwork"
          width={1800}
          height={1200}
          priority
          sizes="100vw"
          className="w-full h-auto"
        />
        {/* Overlay: Coming 2027 + More Info — bottom right, mirroring tagline position */}
        <div className="absolute bottom-[3%] right-[3%] md:bottom-[4%] md:right-[4%] flex flex-col items-center gap-2 md:gap-3">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-white md:text-3xl lg:text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif" }}>
            Coming 2027
          </p>
          <Link
            href="/jackpot-twins"
            className="inline-flex items-center justify-center bg-[#E8272A] hover:bg-[#cc2224] text-white text-sm md:text-base font-bold uppercase tracking-[0.1em] px-6 py-2.5 md:px-10 md:py-3.5 shadow-[0_3px_16px_rgba(0,0,0,0.5)] transition-colors"
          >
            More Info
          </Link>
        </div>
      </div>
    </section>
  );
}
