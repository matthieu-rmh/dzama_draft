"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

type Category = "Tous" | "Classiques" | "Modernes" | "Vieux Rhums";

const cocktails = [
  {
    id: 1,
    name: "Nosy Boraha Old Fashioned",
    category: "Classiques",
    desc: "Un profil riche aux notes de vanille bourbon, cacao et bois précieux. L'essence même du terroir malgache.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfU1vPlT7n9leUDK4DgxpTZvvaZuq-KmW3S1jETHh_9yI5v0wP0-bRjOGBs_F1PX8vVY9rksEU8TWuULAswI9L4dhv16yCvGCl_4BuI4OndMeinytV47Yn1y9FuJvJQUVrrcJ3F_YuS2_kdUtnxTCdOP34UqSsYHalYpEm0MNEIHFZFe3kjxAZoOKIbC6nKIadO8hC3YzHYHWQf6K2DWwMo_Kk_1q_hP6Pnr2GG9nKirS1V-6h7lqeBjQCBaQJiSPhQrgTAoCUFwI",
    stagger: false,
  },
  {
    id: 2,
    name: "Dzama Spiced Mule",
    category: "Modernes",
    desc: "L'équilibre parfait entre les épices chaudes du rhum ambré et la vivacité du gingembre frais.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgoAe8bIB8kW9LB9wqlly6lPM4l1eZnXgmDRj9H0MdqS8KUUMkek2PIE0rBDROwmE4MrjMPJf3GhEiYabyaGmK3bHsNAU8qsJjRAcAF_bpe_Nby5Q3Y_YAbB4rJsIASacEL-GP5DrbGkAho10haYSgLaX6D5smDEe2mM__S4LsZvV5SrET3Q_9_rvGVZDQs-xVKboanHI3eGig9ArbHOGf0jtKqAl1i_-u0BfeS0cnJapuNXxSzwRyl-euZk1y44P5eyzaui-Kdio",
    stagger: true,
  },
  {
    id: 3,
    name: "The Malagasy Mojito",
    category: "Classiques",
    desc: "Une réinterprétation du classique utilisant le sucre de canne brut et le rhum Dzama Cuvée Noire.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBan9BltcyuPsrHWfJRiGWkIZfDBjSU4f-tMiD72FHiNluSvm1yRyWlE0ZfG7UBGBqHE9t09VJykpu3d1pEGfY0Z_fTtFQP307VcfFRsQ0yYyylD94itZdfIFhL_qRqdVm-u4OgeZLijrnfs7EiQyvD-bUWmac-uu-9YpuqxB46utArS4Q9JdbdKmQSVofrDRkwZ3MgRS00YsweQws11mfpvI0fiJji69oLlPqbsin2HskEliRAV7zDV_I9w1UgGyQ2n6TrmXeC_FE",
    stagger: false,
  },
  {
    id: 4,
    name: "Rhum Punch Ancestral",
    category: "Vieux Rhums",
    desc: "Le punch traditionnel de Madagascar revisité avec notre vieux rhum 15 ans, infusé aux épices de l'île.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-f1ERbqSrvSjFR0v81wDypGAhQNVBw3l4U6zlCAGR8yMC7WbWTxMYJ6fdrHWAsZlRHd0i-uZBnyZVFOjhf7Rbr63knAwTSGY7J-AFehyVh4szNdRiAZxaer0165x2Tpt8Qt6i6xYAG8vlw8tYgh2LIR2qbPC6Kh7259GAswxuLDtbY0bQychgNYaUlpnBCJgLQojXHhveCLqM6ZmbGm1xmCuRWnApMQiXpzTvxRyYmYsdoIxzJUxILeHi7lopT2RJhiYkruQjfiY",
    stagger: true,
  },
];

const CATEGORIES: Category[] = ["Tous", "Classiques", "Modernes", "Vieux Rhums"];

const INGREDIENTS = [
  { item: "60ml Dzama Cuvée Noire", note: "Prestige" },
  { item: "10ml Sirop de Vanille", note: "Artisanal" },
  { item: "2 traits de Bitters", note: "Cacao" },
  { item: "1 Gousse de Vanille", note: "Garnish" },
];

const STEPS = [
  "Rafraîchir le verre de dégustation avec de la glace.",
  "Dans un verre à mélange, verser le rhum, le sirop et le bitter.",
  "Remuer délicatement pendant 30 secondes.",
  "Filtrer sur un gros cube de glace.",
];

export default function CocktailsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filtered = cocktails.filter(
    (c) => activeCategory === "Tous" || c.category === activeCategory
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ314vCZLdkKFVuuMiAJeM6zMxYrUUoAysJkr1uMZyxnBg5j9nFLBWkWHUtkNk4r_bs-b9_X0zhFUAxH_7Q6uwZ5vmV2s3rDFT12XRqZ9FKC7_kKgUuf2DWYUaPkSgdSgRb5w5bkAV2kxTigfp3FT6O9vRxpI5-x8F9seJYxy9pqqJsjdXljlAGyeq-baiE3gDxj4bssHVBFXhexeCm9O5Sr1VkXCMdWb5ILHWdTxweaUJm02DN4iPWHgB2FMmj5ajuAar1i905tY"
            alt="Cocktail Dzama"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <FadeIn delay={0}>
            <span className="block font-label text-primary uppercase tracking-[0.4em] mb-4 text-sm">
              Le Savoir-Faire Malgache
            </span>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-6xl md:text-8xl text-primary-container leading-tight mb-8">
              Art de la Mixologie
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="font-body text-xl md:text-2xl text-on-surface max-w-2xl mx-auto font-light leading-relaxed">
              Une symphonie de saveurs où l&apos;âme de Madagascar rencontre l&apos;élégance du verre.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="mt-12">
              <a
                href="#recipes"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-bold rounded-md hover:scale-[0.98] transition-transform duration-300"
              >
                Explorer les Recettes
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter bar */}
      <section className="py-12 bg-surface-container-low">
        <FadeIn className="max-w-screen-2xl mx-auto px-12 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <h2 className="font-serif text-4xl text-on-surface">Cocktails Signature</h2>
          <div className="flex gap-8 font-label text-xs uppercase tracking-widest text-outline">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors ${
                  activeCategory === cat
                    ? "text-primary border-b border-primary"
                    : "hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Recipe grid */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto" id="recipes">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-outline text-center space-y-4">
            <span className="material-symbols-outlined text-5xl">search_off</span>
            <p className="font-label text-xs uppercase tracking-widest">Aucun cocktail dans cette catégorie</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {filtered.map((cocktail, i) => (
              <FadeIn
                key={cocktail.id}
                className={`group cursor-pointer ${cocktail.stagger ? "md:mt-12" : ""}`}
                delay={i * 150}
              >
                <div className="aspect-[4/5] bg-surface-container-low mb-8 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cocktail.src}
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-surface-container-lowest/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4 bg-surface-container/80 backdrop-blur-sm px-3 py-1">
                    <span className="font-label text-[9px] uppercase tracking-widest text-outline">
                      {cocktail.category}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="font-serif text-3xl text-primary mb-3">{cocktail.name}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-6">{cocktail.desc}</p>
                  <a
                    href="#focus"
                    className="font-label text-xs uppercase tracking-widest text-primary border-b border-outline-variant pb-1 hover:border-primary transition-all"
                  >
                    Détails de la recette
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </section>

      {/* Focus Recipe */}
      <section className="bg-surface-container py-32" id="focus">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="left"><div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-f1ERbqSrvSjFR0v81wDypGAhQNVBw3l4U6zlCAGR8yMC7WbWTxMYJ6fdrHWAsZlRHd0i-uZBnyZVFOjhf7Rbr63knAwTSGY7J-AFehyVh4szNdRiAZxaer0165x2Tpt8Qt6i6xYAG8vlw8tYgh2LIR2qbPC6Kh7259GAswxuLDtbY0bQychgNYaUlpnBCJgLQojXHhveCLqM6ZmbGm1xmCuRWnApMQiXpzTvxRyYmYsdoIxzJUxILeHi7lopT2RJhiYkruQjfiY"
              alt="Dzama Cuvée Noire"
              className="w-full relative z-10 shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-surface-bright p-8 border border-outline-variant/15 z-20">
              <p className="font-serif italic text-2xl text-primary">&ldquo;Le secret réside dans le repos.&rdquo;</p>
            </div>
          </div></FadeIn>

          <FadeIn direction="right" delay={150}><div className="space-y-12">
            <header>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                Focus sur la Recette
              </span>
              <h2 className="font-serif text-5xl text-on-surface leading-tight">
                Nosy Boraha Old Fashioned
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-label text-xs uppercase tracking-widest text-outline-variant mb-6 border-b border-outline-variant/20 pb-2">
                  Ingrédients
                </h4>
                <ul className="font-body space-y-4 text-on-surface">
                  {INGREDIENTS.map(({ item, note }) => (
                    <li key={item} className="flex justify-between">
                      <span>{item}</span>
                      <span className={note === "Prestige" ? "text-primary-container" : "text-outline"}>
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-label text-xs uppercase tracking-widest text-outline-variant mb-6 border-b border-outline-variant/20 pb-2">
                  Préparation
                </h4>
                <ol className="font-body space-y-4 text-on-surface-variant text-sm list-decimal list-inside">
                  {STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <a
                href="/cellar/1"
                className="px-12 py-5 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-bold rounded-md text-center hover:opacity-90 transition-all"
              >
                Acheter ce Rhum
              </a>
              <button className="px-12 py-5 border border-outline/30 text-primary hover:bg-surface-container-high transition-colors rounded-md text-center font-label text-sm uppercase tracking-widest">
                Partager la Recette
              </button>
            </div>
          </div></FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkOBCtMIIu6ARl6yvh9JrW4acBtrbsYN405lPAoKDJ-FrXLgiq-baiE3gDxj4bssHVBFXhexeCm9O5Sr1VkXCMdWb5ILHWdTxweaUJm02DN4iPWHgB2FMmj5ajuAar1i905tY"
            alt="Fûts de la distillerie Dzama"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <FadeIn className="relative z-10 px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-on-surface mb-8">Au-delà du mélange</h2>
          <p className="font-body text-xl text-on-surface-variant max-w-xl mx-auto mb-12">
            Découvrez l&apos;histoire de notre distillation et les secrets de notre terroir unique à Madagascar.
          </p>
          <a
            href="/heritage"
            className="font-label text-sm uppercase tracking-widest text-primary-container border-b-2 border-primary-container pb-2 hover:text-primary transition-colors"
          >
            Notre Histoire
          </a>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
