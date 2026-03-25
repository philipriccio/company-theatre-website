import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

type SearchParams = Record<string, string | string[] | undefined>;

const REVEAL_AT = new Date("2026-03-31T00:00:00-05:00");

const cast = [
  {
    actor: "Seana McKenna",
    role: "Geraldine Fitzgerald",
    image: "/images/jackpot-twins/headshots/seana-mckenna.jpeg",
  },
  {
    actor: "Nora McLellan",
    role: "Bernadette Fitzgerald",
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
] as const;

const creativeTeam = [
  { role: "Written & Directed by", person: "Philip Riccio" },
  { role: "Set Design", person: "Anahita Dehbonehie" },
  { role: "Lighting Design", person: "Kevin Lamotte" },
] as const;

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
              finest actors — and we&apos;ll reveal everything on March 31.
            </p>
            {/* Link removed — embargoed until March 31 */}
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
    <>
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
              A new comedy by Philip Riccio. Hilarious, high-stakes, and unexpectedly heartfelt.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/60 md:text-base">
              CAA Theatre · Toronto · In association with Mirvish Productions
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="https://mirvish.com" target="_blank" rel="noreferrer" className="btn-primary">
                Get Tickets at Mirvish
              </Link>
              <Link href="/jackpot-twins" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                Full Production Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">The Play</p>
            <h3 className="heading-lg max-w-md">A comedy about everything you ever wanted</h3>
            <div className="mt-6 h-1 w-12 bg-accent" />
            <div className="mt-8 space-y-4 text-sm uppercase tracking-[0.16em] text-gray-500">
              {creativeTeam.map((credit) => (
                <div key={credit.role}>
                  <p>{credit.role}</p>
                  <p className="mt-1 text-base font-semibold normal-case tracking-normal text-black">{credit.person}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
            <p>
              Imagine winning the lottery. Now imagine doing it again. And again. For the Fitzgeralds, a third grand prize
              isn&apos;t a miracle — it&apos;s a cosmic catastrophe. Suddenly, their quiet bungalow is a magnet for opportunistic lovers,
              estranged daughters, and a relentless lottery investigator who suspects their “luck” is a crime.
            </p>
            <p>
              Between dodging the local press and punching the clock at the snack factory, the sisters must survive the absurdity
              of their own impossible fortune. As the oversized cheques pile up, they realize that beating the odds was the easy
              part. The real adventure is figuring out who you are when you finally have nothing left to wish for.
            </p>
            <p>
              Canadian theatre legends <em>Seana McKenna</em> and <em>Nora McLellan</em> lead an all-star cast in <em>Jackpot Twins</em>,
              reuniting Mirvish and The Company Theatre for the first time since <em>Things I Know to be True</em> in 2023.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-main">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">The Cast</p>
              <h3 className="heading-lg">An all-star company</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-gray-500 md:text-right">
              Five acclaimed performers headline the world premiere production.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {cast.map((member) => (
              <div key={member.actor} className="overflow-hidden border border-black/10 bg-white">
                <div className="relative aspect-[4/5] bg-gray-200">
                  <Image src={member.image} alt={member.actor} fill sizes="(max-width: 1280px) 50vw, 20vw" className="object-cover object-top" />
                </div>
                <div className="space-y-2 p-5">
                  <h4 className="text-lg font-bold uppercase tracking-[0.04em] text-black">{member.actor}</h4>
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-20">
        <div className="container-main grid gap-8 md:grid-cols-2 xl:grid-cols-5 xl:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Previews</p>
            <p className="mt-2 text-lg font-semibold">From March 9, 2027</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Press Opening</p>
            <p className="mt-2 text-lg font-semibold">March 14, 2027 · 2 PM</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Closing</p>
            <p className="mt-2 text-lg font-semibold">March 28, 2027</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Venue</p>
            <p className="mt-2 text-lg font-semibold">CAA Theatre · Toronto</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Presented By</p>
            <p className="mt-2 text-lg font-semibold">The Company Theatre + Mirvish</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-main max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">Tickets</p>
          <h3 className="heading-lg">Don&apos;t miss it</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Tickets are available through Mirvish Productions. Explore the dedicated production page for cast bios,
            creative details, and the full announcement package.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="https://mirvish.com" target="_blank" rel="noreferrer" className="btn-primary">
              Get Tickets at Mirvish
            </Link>
            <Link href="/jackpot-twins" className="btn-secondary">
              Explore Jackpot Twins
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
