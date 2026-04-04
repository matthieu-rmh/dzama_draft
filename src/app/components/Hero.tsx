import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-[-15%] z-0">
        <Image
          src="/images/homepage_sections/vdz_hero_section_upscayled.png"
          alt="Bouteille de rhum Dzama sur marbre sombre avec éclairage dramatique"
          fill
          className="object-cover object-center"
          style={{ transform: "scale(0.8)", left: "60px" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 px-12 max-w-screen-2xl mx-auto w-full">
        <div className="max-w-2xl">
          <FadeIn delay={0}>
            <span className="font-label uppercase tracking-[0.3em] text-primary-fixed-dim mb-6 block text-sm">
              Vieilli à Madagascar
            </span>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="text-7xl md:text-8xl font-serif font-bold text-on-surface mb-8 leading-[1.1] amber-glow">
              L&apos;Âme de <br />
              Nosy Boraha.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl font-body text-on-surface-variant max-w-lg mb-12 leading-relaxed">
              Vieilli dans des fûts de chêne d&apos;exception où la brise marine
              rencontre le parfum de la vanille sauvage. Découvrez un rhum défini
              par la patience et la précision.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="flex items-center space-x-8">
              <a href="/cellar" className="px-10 py-4 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-bold rounded-md hover:scale-105 transition-transform duration-300">
                Explorer les Collections
              </a>
              <a href="/heritage" className="px-10 py-4 border border-outline/30 text-primary font-bold rounded-md hover:bg-white/5 transition-all">
                Notre Héritage
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
