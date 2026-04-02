import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-[-15%] z-0">
        <Image
          src="/images/homepage_sections/vbz_hero_sec.jpg"
          alt="Bouteille de rhum Dzama sur marbre sombre avec éclairage dramatique"
          fill
          className="object-cover object-center"
          style={{transform: "scale(0.8)", left: "60px"}}
priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-12 max-w-screen-2xl mx-auto w-full">
        <div className="max-w-2xl">
          <span className="font-label uppercase tracking-[0.3em] text-primary-fixed-dim mb-6 block text-sm">
            Vieilli à Madagascar
          </span>
          <h1 className="text-7xl md:text-8xl font-serif font-bold text-on-surface mb-8 leading-[1.1] amber-glow">
            L&apos;Âme de <br />
            Nosy Boraha.
          </h1>
          <p className="text-xl font-body text-on-surface-variant max-w-lg mb-12 leading-relaxed">
            Vieilli dans des fûts de chêne d&apos;exception où la brise marine
            rencontre le parfum de la vanille sauvage. Découvrez un rhum défini
            par la patience et la précision.
          </p>
          <div className="flex items-center space-x-8">
            <button className="px-10 py-4 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-bold rounded-md hover:scale-105 transition-transform duration-300">
              Explorer les Collections
            </button>
            <button className="px-10 py-4 border border-outline/30 text-primary font-bold rounded-md hover:bg-white/5 transition-all">
              Notre Héritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
