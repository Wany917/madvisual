import Image from "next/image";
import Link from "next/link";
import { SESSION_TYPES, PORTFOLIO_ITEMS } from "@/lib/mock-data";

export default function Home() {
  return (
    <main>
      {/* ═══ HERO — Éditorial subtil ═══ */}
      <section className="relative h-svh flex flex-col justify-end overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/portrait.png"
          className="absolute inset-0 w-full h-full object-cover dark:opacity-70"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

        {/* Contenu hero — bas de l'écran */}
        <div className="relative z-10 pb-28 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-medium leading-tight tracking-tight">
            Photography
            <br />
            <span className="font-light text-white/80">&amp; Direction</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/50 tracking-[0.15em] uppercase">
            Paris &middot; Portraits &middot; Moments
          </p>
          <Link
            href="/booking"
            className="inline-block mt-8 border border-white/40 text-white text-xs uppercase tracking-[0.3em] px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            Réserver une séance
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* ═══ SELECTED WORKS — Spreads éditoriaux ═══ */}
      <section id="works" className="py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-6 mb-6">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              II
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium whitespace-nowrap">
              Selected Works
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* ── Spread 01 — Cityscape ── */}
        <div className="mt-20 md:mt-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <span className="font-serif text-[20vw] md:text-[15vw] leading-none text-foreground/[0.03] absolute -top-[8vw] md:-top-[6vw] left-6 md:left-12 select-none pointer-events-none z-0">
              01
            </span>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="group relative overflow-hidden aspect-[21/9] cursor-pointer">
              <Image
                src="/photos/cityscape.png"
                alt="Urban cityscape — La Défense"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:brightness-90"
                quality={85}
              />
            </div>
            <div className="flex items-baseline justify-between mt-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] font-medium">
                  Urban Series
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  La Défense, Paris
                </p>
              </div>
              <p className="text-xs text-muted-foreground tracking-wider hidden sm:block">
                2026
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-border my-20 md:my-28" />
        </div>

        {/* ── Spread 02 — Portrait ── */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <span className="font-serif text-[20vw] md:text-[15vw] leading-none text-foreground/[0.03] absolute -top-[8vw] md:-top-[6vw] right-6 md:right-12 select-none pointer-events-none z-0">
              02
            </span>
          </div>
          <div className="max-w-lg mx-auto px-6 relative z-10">
            <div className="group relative overflow-hidden aspect-[2/3] cursor-pointer">
              <Image
                src="/photos/portrait.png"
                alt="Portrait photography — Street fashion"
                fill
                className="object-cover object-top transition-all duration-700 ease-out group-hover:brightness-90"
                quality={85}
              />
            </div>
            <div className="flex items-baseline justify-between mt-4">
              <p className="text-xs text-muted-foreground tracking-wider hidden sm:block">
                2026
              </p>
              <div className="text-right">
                <p className="text-sm uppercase tracking-[0.2em] font-medium">
                  Portraits
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Street Fashion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-border my-20 md:my-28" />
        </div>

        {/* ── Spread 03 — Detail + Citation ── */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <span className="font-serif text-[20vw] md:text-[15vw] leading-none text-foreground/[0.03] absolute -top-[8vw] md:-top-[6vw] left-6 md:left-12 select-none pointer-events-none z-0">
              03
            </span>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
                <Image
                  src="/photos/detail-shoes.png"
                  alt="Detail shot — Urban fashion"
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:brightness-90"
                  quality={85}
                />
              </div>
              <div className="flex flex-col justify-center py-8">
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground leading-snug">
                  &ldquo;Chaque image est une scène,
                  <br className="hidden md:block" />
                  {" chaque regard un dialogue.\u201D"}
                </blockquote>
                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.2em] font-medium">
                    Details
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Close-up Series
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RÉALISATIONS — Galerie portfolio ═══ */}
      <section className="py-32 md:py-44 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-6 mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              IV
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium whitespace-nowrap">
              Réalisations
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* Masonry-style gallery */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative mb-3 md:mb-4 break-inside-avoid overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-75"
                  quality={80}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-serif text-sm md:text-base font-medium">
                    {item.alt}
                  </p>
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NOS SÉANCES ═══ */}
      <section id="seances" className="py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-6 mb-6">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              V
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium whitespace-nowrap">
              Nos Séances
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground max-w-xl mb-16">
            Chaque séance est pensée sur mesure. Choisissez la formule qui vous
            correspond et réservez votre créneau.
          </p>

          {/* Séances — layout éditorial alterné */}
          <div className="space-y-px">
            {SESSION_TYPES.map((session, i) => (
              <Link
                key={session.id}
                href={`/booking?type=${session.id}`}
                className="group grid grid-cols-1 md:grid-cols-12 items-stretch border-b border-border/50 first:border-t"
              >
                {/* Image — alternance gauche/droite */}
                <div
                  className={`relative overflow-hidden aspect-[16/10] md:aspect-auto md:col-span-5 ${
                    i % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={session.image}
                    alt={session.name}
                    fill
                    className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
                    quality={80}
                  />
                </div>

                {/* Contenu */}
                <div
                  className={`md:col-span-7 flex flex-col justify-center px-6 py-8 md:px-12 md:py-16 ${
                    i % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-serif text-5xl md:text-7xl font-light text-foreground/[0.08] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium">
                      {session.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-6">
                    {session.description}
                  </p>
                  <div className="flex items-center gap-6 text-xs text-muted-foreground mb-6">
                    <span className="uppercase tracking-[0.15em]">
                      {session.duration}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span>à partir de {session.price}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] group-hover:text-primary transition-colors duration-300">
                    Réserver
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-32 md:py-44 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                VI
              </p>
              <div className="w-12 h-px bg-border" />
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                About
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-8 font-medium">
              {"L'oeil derrière"}
              <br />
              {"l'objectif"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Photographe basé en région parisienne, spécialisé dans le portrait
              urbain et la photographie de rue. Chaque cliché capture un instant,
              une émotion, une histoire qui mérite d&apos;être racontée.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon approche cinématographique mêle lumière naturelle, compositions
              soignées et une colorimétrie travaillée pour créer des images qui
              transcendent le réel.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/photos/portrait.png"
              alt="Self-portrait"
              fill
              className="object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              quality={85}
            />
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-32 md:py-44 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">
            VI — Contact
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold mb-10 leading-tight">
            Travaillons
            <br />
            ensemble
          </h2>
          <a
            href="mailto:hello@madvisual.com"
            className="inline-flex items-center gap-3 text-lg border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors duration-300 group"
          >
            hello@madvisual.com
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 md:py-16 px-6 md:px-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-serif text-lg tracking-tight">madvisual</p>
          <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase">
            &copy; 2026 — Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
