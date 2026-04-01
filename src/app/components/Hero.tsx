import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dzama-dark overflow-hidden flex items-center">

      {/* Left half — Madagascar map background image */}
      <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none select-none">
        <Image
          src="/images/homepage_sections/mada_bg.png"
          alt=""
          fill
          className="object-contain object-center opacity-20"
          priority
        />
      </div>

      {/* Content grid — only left text column affects layout height */}
      <div className="relative z-10 w-full px-8 md:px-16 pt-32 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text over the mada_bg */}
        <div>
          <p className="section-label mb-6">From Madagascar to</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-dzama-cream uppercase tracking-wide leading-tight mb-8">
            The World
          </h1>
          <div className="divider-gold" />
          <p className="font-sans text-dzama-cream/60 text-sm leading-relaxed max-w-md mt-6">
            Qui sommes-nous ? Nous créons chaque année l&apos;histoire de l&apos;île
            de Madagascar dans le verre, créer nos produits et par la richesse de
            la symbolisation, une culture qui exprime l&apos;esprit de Madagascar.
          </p>
          <div className="mt-10">
            <a href="#histoire" className="btn-gold">
              Découvrir
            </a>
          </div>
        </div>

        {/* Right column — empty, images are absolutely positioned below */}
        <div />
      </div>

      {/* Bottle + glass — absolutely positioned over the right half, vertically centered */}
      <div className="absolute inset-y-0 right-0 w-1/2 z-20 flex items-center justify-center pointer-events-none">
        <div className="relative w-[720px] h-[1040px]">
          {/* Bottle — in front, anchored left+bottom */}
          <div className="absolute left-0 bottom-0 w-[440px] z-20">
            <Image
              src="/images/homepage_sections/dzama_rhum_main_hero.png"
              alt="DZAMA Rhum — Bouteille"
              width={880}
              height={1480}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Glass — behind bottle, anchored right+bottom */}
          <div className="absolute right-0 bottom-0 w-[560px] z-10">
            <Image
              src="/images/homepage_sections/glass_main_hero.png"
              alt="Verre de rhum DZAMA"
              width={1120}
              height={1240}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-xs tracking-widest text-dzama-cream uppercase">Défiler</span>
        <span className="block w-px h-8 bg-dzama-cream animate-pulse" />
      </div>
    </section>
  );
}
