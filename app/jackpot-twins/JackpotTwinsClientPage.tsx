"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cast = [
  {
    actor: "Seana McKenna",
    role: "Geraldine (Gerry) Fitzgerald",
    image: "/images/jackpot-twins/headshots/seana-mckenna.jpeg",
    bio: "Seana McKenna is a recipient of the Order of Canada — do we need to say more? No. But we will anyway. A National Theatre School graduate, she has spent four decades setting the standard at Stratford, Shaw, Canadian Stage, and stages across North America, playing everything from Juliet to Julius Caesar along the way. She made history as Stratford's first female Richard III. Three Dora Awards, a Genie, a Jessie, and an Honorary Doctorate later — if you saw her in Things I Know to Be True and needed a few days to recover, good news: this one's a comedy.",
  },
  {
    actor: "Nora McLellan",
    role: "Bernadette (Bernie) Fitzgerald",
    image: "/images/jackpot-twins/headshots/nora-mclellan.jpeg",
    bio: "Nora McLellan has been one of Canadian theatre's great pleasures for over fifty years, and she shows absolutely no signs of stopping. She spent 22 seasons at the Shaw Festival and four at Stratford, trained with the legendary Uta Hagen in New York, and has four Jessie Awards and two Doras to her name. Toronto audiences know her from John at The Company Theatre — for which she won the Dora for Outstanding Performance — and as Sister Rose in CBC's Son of a Critch, a role written especially for her. She is, in every sense, a force of nature.",
  },
  {
    actor: "Tony Nappo",
    role: "Peter Mallory",
    image: "/images/jackpot-twins/headshots/tony-nappo.jpg",
    bio: "Tony Nappo has appeared in roughly 70 films, hundreds of TV episodes, and more Toronto stages than most people have visited. Born in Scarborough, trained at the American Academy of Dramatic Arts in Manhattan, he's the kind of actor critics describe as \"razor-sharp\" and \"effortlessly magnetic.\" He's appeared alongside Al Pacino, played a recurring villain in Bad Blood, voiced a gangster in Fugget About It, and wrote the beloved column Nappoholics Anonymous for Intermission Magazine. If you've watched Canadian TV in the last twenty years, you've seen him.",
  },
  {
    actor: "Colin A. Doyle",
    role: "Harold Bates",
    image: "/images/jackpot-twins/headshots/colin-doyle.jpg",
    bio: "Colin A. Doyle is a Toronto-based actor and theatre producer who has performed across Canada, the US, and Europe. A York University Acting Conservatory graduate, he has worked with some of the most inventive companies in the country — Outside the March, Factory Theatre, Theatre Passe Muraille, Why Not Theatre — and has played everything from Peter Pan to a post-apocalyptic Homer Simpson. The range is real.",
  },
  {
    actor: "Caroline Toal",
    role: "Abigail",
    image: "/images/jackpot-twins/headshots/caroline-toal.jpg",
    bio: "Caroline Toal is a two-time Dora Award winner, a Stratford Festival Mary Savidge Award recipient, and the person most recently responsible for making half of Ontario cry about Anne Shirley. She grew up in Orangeville, trained at George Brown Theatre School, and has originated roles in new Canadian plays at Young People's Theatre, The Howland Company, and the Stratford Festival. Her credits include Casimir and Caroline, Selfie, To Kill a Mockingbird, and Anne of Green Gables — which received an extension because the audiences refused to let it close. Some performers make you want to stay. She is one of them.",
  },
] as const;

const creativeTeam = [
  { role: "Written & Directed by", person: "Philip Riccio" },
  { role: "Set Design", person: "Anahita Dehbonehie" },
  { role: "Lighting Design", person: "Kevin Lamotte" },
];

function CastBioModal({
  member,
  onClose,
}: {
  member: (typeof cast)[number] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cast-bio-title"
    >
      <div
        className="relative w-full max-w-2xl border border-white/10 bg-[#050505] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.65)] md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition hover:border-accent hover:text-accent"
          aria-label={`Close ${member.actor} bio`}
        >
          <X size={20} />
        </button>

        <div className="grid gap-6 md:grid-cols-[160px_1fr] md:items-start">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/5">
            <Image src={member.image} alt={member.actor} fill sizes="160px" className="object-cover object-top" />
          </div>

          <div className="pt-6 md:pt-0">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-accent">Cast Bio</p>
            <h3 id="cast-bio-title" className="text-3xl font-bold uppercase tracking-[0.04em] text-white">
              {member.actor}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">{member.role}</p>
            <p className="mt-6 text-base leading-8 text-white/78">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JackpotTwinsClientPage() {
  const [selectedCastMember, setSelectedCastMember] = useState<(typeof cast)[number] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="bg-black pt-20 text-white">
          <div className="container-main px-6 py-12 md:px-10 md:py-16 lg:py-20">
            <div className="grid items-center gap-10 border border-white/10 bg-[#050505] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-12">
              <div className="flex justify-center bg-black p-4 md:p-6">
                <div className="w-full max-w-[440px] border border-white/10 bg-[#0a0a0a] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.45)] md:p-4">
                  <div className="relative aspect-[5/8] w-full bg-black">
                    <Image
                      src="/images/jackpot-twins/poster-5x8-web.jpg"
                      alt="Jackpot Twins portrait poster"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-accent">
                  World Premiere • CAA Theatre • March 2027
                </p>
                <h1 className="heading-xl mb-6 text-white">Jackpot Twins</h1>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-2xl">
                  Winning the lottery is easy. Surviving it is the hard part.
                </p>

                <div className="grid max-w-2xl gap-4 border border-white/15 bg-white/[0.03] p-5 md:grid-cols-3 md:p-6">
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
                <button
                  key={member.actor}
                  type="button"
                  onClick={() => setSelectedCastMember(member)}
                  className="group overflow-hidden border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:border-accent/70 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-accent/60 cursor-pointer"
                >
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
                </button>
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

      <CastBioModal member={selectedCastMember} onClose={() => setSelectedCastMember(null)} />
    </>
  );
}
