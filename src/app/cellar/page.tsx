"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ALL_PRODUCTS, type Sweetness } from "./products";

const AGE_BUCKETS: { label: string; test: (age: number) => boolean }[] = [
  { label: "3 - 5 Ans", test: (a) => a >= 3 && a <= 5 },
  { label: "6 - 10 Ans", test: (a) => a >= 6 && a <= 10 },
  { label: "15 - 25 Ans", test: (a) => a >= 15 && a <= 25 },
  { label: "Réserve Millésimée", test: (a) => a > 25 },
];

const SWEETNESS_OPTIONS: { label: string; value: Sweetness }[] = [
  { label: "Sec & Épicé", value: "dry-spicy" },
  { label: "Chêne Équilibré", value: "balanced-oak" },
  { label: "Miel & Vanille", value: "honey-vanilla" },
];

const SORT_OPTIONS = [
  { label: "Exclusivité", value: "exclusivity" },
  { label: "Prix : Croissant", value: "price-asc" },
  { label: "Prix : Décroissant", value: "price-desc" },
  { label: "Âge : Le plus ancien", value: "age-desc" },
];

const PER_PAGE = 6;
const MAX_PRICE = 1200;
const MIN_PRICE = 40;

export default function CellarPage() {
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedSweetness, setSelectedSweetness] = useState<Sweetness | null>(null);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sort, setSort] = useState("exclusivity");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = ALL_PRODUCTS.filter((p) => {
      if (selectedAges.length > 0) {
        if (!AGE_BUCKETS.filter((b) => selectedAges.includes(b.label)).some((b) => b.test(p.age))) return false;
      }
      if (selectedSweetness && p.sweetness !== selectedSweetness) return false;
      if (p.price > maxPrice) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "age-desc") return b.age - a.age;
      return b.exclusivity - a.exclusivity;
    });

    return result;
  }, [selectedAges, selectedSweetness, maxPrice, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  function toggleAge(label: string) {
    setSelectedAges((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
    setPage(1);
  }

  function resetFilters() {
    setSelectedAges([]);
    setSelectedSweetness(null);
    setMaxPrice(MAX_PRICE);
    setSort("exclusivity");
    setPage(1);
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">

        {/* Header & Breadcrumbs */}
        <header className="mb-16">
          <nav className="mb-4 flex items-center space-x-2 font-label text-[10px] uppercase tracking-[0.2em] text-outline">
            <a className="hover:text-primary transition-colors" href="/">Accueil</a>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-on-surface-variant">Collections</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight amber-glow mb-4">
            La Cave
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-body leading-relaxed text-lg">
            Découvrez notre collection de l&apos;excellence malgache. Chaque bouteille est un
            témoignage de l&apos;art patient du vieillissement tropical et du terroir unique de
            l&apos;île.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
            <section>
              <h3 className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed-dim mb-6">
                Filtrer par âge
              </h3>
              <div className="space-y-4">
                {AGE_BUCKETS.map(({ label }) => (
                  <label key={label} className="flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAges.includes(label)}
                      onChange={() => toggleAge(label)}
                      className="rounded-none border-outline-variant bg-transparent text-primary-container focus:ring-offset-surface focus:ring-primary h-4 w-4"
                    />
                    <span className="ml-3 text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed-dim mb-6">
                Profil de douceur
              </h3>
              <div className="space-y-4">
                {SWEETNESS_OPTIONS.map(({ label, value }) => (
                  <label key={value} className="flex items-center group cursor-pointer">
                    <input
                      type="radio"
                      name="sweetness"
                      checked={selectedSweetness === value}
                      onChange={() => { setSelectedSweetness(value); setPage(1); }}
                      className="border-outline-variant bg-transparent text-primary-container focus:ring-offset-surface focus:ring-primary h-4 w-4"
                    />
                    <span className="ml-3 text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                      {label}
                    </span>
                  </label>
                ))}
                {selectedSweetness && (
                  <button
                    onClick={() => { setSelectedSweetness(null); setPage(1); }}
                    className="text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-colors font-label"
                  >
                    Effacer
                  </button>
                )}
              </div>
            </section>

            <section>
              <h3 className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed-dim mb-6">
                Gamme de prix
              </h3>
              <div className="px-2">
                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  value={maxPrice}
                  onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }}
                  className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4 text-[10px] text-outline font-label tracking-tighter">
                  <span>${MIN_PRICE}</span>
                  <span className="text-primary-fixed-dim">${maxPrice}</span>
                </div>
              </div>
            </section>

            <div className="pt-8">
              <button
                onClick={resetFilters}
                className="w-full border border-outline/30 py-4 font-label text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-12">
              <p className="text-sm font-label text-outline uppercase tracking-widest">
                {filtered.length} artefact{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-xs font-label uppercase text-on-surface-variant">Trier par :</span>
                <select
                  value={sort}
                  onChange={(e) => { setSort(e.target.value); setPage(1); }}
                  className="bg-transparent border-none text-xs font-label uppercase tracking-widest text-primary focus:ring-0 cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {paginated.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-48 text-outline text-center">
                <span className="material-symbols-outlined text-5xl mb-6">search_off</span>
                <p className="font-label text-xs uppercase tracking-widest">Aucun résultat pour ces filtres</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-24 gap-x-12">
                {paginated.map((product) => (
                  <Link key={product.id} href={`/cellar/${product.id}`} className="group relative block">
                    <div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative mb-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        src={product.src}
                        alt={product.name}
                      />
                      <div className="absolute inset-0 bg-surface-container-lowest/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                        <span className="bg-primary text-on-primary px-8 py-3 font-label text-[10px] uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Voir le détail
                        </span>
                      </div>
                      {product.badge && (
                        <div className={`absolute top-4 left-4 ${product.badge.color} px-3 py-1`}>
                          <span className="text-[9px] uppercase tracking-widest font-bold">
                            {product.badge.label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-label">
                        {product.collection}
                      </p>
                      <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-end pt-4">
                        <span className="text-xl font-serif text-primary-fixed-dim">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-outline group-hover:text-primary transition-colors text-sm font-label uppercase tracking-widest">
                          Découvrir →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-24 flex items-center justify-center space-x-8">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="text-outline hover:text-primary flex items-center group transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span className="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-2">arrow_back</span>
                  <span className="font-label text-[10px] uppercase tracking-widest">Précédent</span>
                </button>

                <div className="flex items-center space-x-6 font-label text-[10px] uppercase tracking-widest text-outline">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`transition-colors ${
                        p === currentPage
                          ? "text-primary border-b border-primary pb-1"
                          : "hover:text-on-surface"
                      }`}
                    >
                      {String(p).padStart(2, "0")}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="text-outline hover:text-primary flex items-center group transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span className="font-label text-[10px] uppercase tracking-widest">Suivant</span>
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">arrow_forward</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
