"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { ALL_PRODUCTS } from "../cellar/products";

const SHIPPING = 18.5;
const TAX_RATE = 0.038;

export default function CartPage() {
  const { items, removeItem, updateQuantity, addItem } = useCart();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + tax;

  const suggested = ALL_PRODUCTS
    .filter((p) => !items.some((i) => i.id === p.id))
    .sort((a, b) => b.exclusivity - a.exclusivity)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <header className="mb-16">
            <nav className="mb-4 flex items-center space-x-2 font-label text-[10px] uppercase tracking-[0.2em] text-outline">
              <a className="hover:text-primary transition-colors" href="/">Accueil</a>
              <span className="material-symbols-outlined text-[12px]">chevron_right</span>
              <span className="text-on-surface-variant">Votre Cave</span>
            </nav>
            <span className="font-label text-sm uppercase tracking-[0.3em] text-primary-container mb-4 block">
              Votre Sélection
            </span>
            <h1 className="text-6xl font-serif italic">Votre Cave</h1>
          </header>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-48 text-outline text-center space-y-6">
              <span className="material-symbols-outlined text-6xl">wine_bar</span>
              <p className="font-label text-xs uppercase tracking-widest">Votre cave est vide</p>
              <Link
                href="/cellar"
                className="mt-4 px-8 py-4 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-label text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90 transition-all"
              >
                Explorer la collection
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

              {/* Cart Items */}
              <div className="lg:col-span-8">
                <div className="space-y-12">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group flex flex-col md:flex-row items-center gap-8 pb-12 border-b border-outline-variant/10"
                    >
                      <Link href={`/cellar/${item.id}`} className="w-full md:w-48 aspect-[3/4] bg-surface-container-low flex items-center justify-center p-6 overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                          src={item.src}
                          alt={item.name}
                        />
                      </Link>

                      <div className="flex-grow space-y-2">
                        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-outline-variant">
                          {item.collection}
                        </p>
                        <h3 className="text-2xl font-serif tracking-tight">{item.name}</h3>
                        <div className="pt-4 flex items-center gap-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-on-surface-variant hover:text-error transition-colors text-xs uppercase tracking-widest font-label border-b border-transparent hover:border-error"
                          >
                            Retirer
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                        <div className="flex items-center bg-surface-container-high px-4 py-2 rounded-md border border-outline-variant/10">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="px-6 font-body font-medium">
                            {String(item.quantity).padStart(2, "0")}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>
                        <span className="text-xl font-serif text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Suggested */}
                {suggested.length > 0 && (
                  <section className="mt-24">
                    <h2 className="text-3xl font-serif mb-12">Suggestions pour votre Cave</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {suggested.map((p) => (
                        <div
                          key={p.id}
                          className="bg-surface-container-low p-8 flex gap-6 items-center hover:bg-surface-container transition-colors group cursor-pointer"
                        >
                          <Link href={`/cellar/${p.id}`} className="w-24 aspect-[3/4] bg-surface-container-lowest p-2 flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-full object-contain" src={p.src} alt={p.name} />
                          </Link>
                          <div className="flex-grow">
                            <h4 className="font-serif text-lg group-hover:text-primary transition-colors mb-1">
                              {p.name}
                            </h4>
                            <p className="text-on-surface-variant text-sm mb-4">{p.nose} &amp; {p.finish}</p>
                            <button
                              onClick={() => addItem({ id: p.id, name: p.name, collection: p.collection, price: p.price, src: p.src })}
                              className="text-primary font-label text-xs uppercase tracking-widest border-b border-primary/30 hover:border-primary transition-colors"
                            >
                              Ajouter à la cave · ${p.price.toFixed(2)}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Checkout Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-40 bg-surface-container p-10 space-y-10 border border-outline-variant/10 shadow-2xl">
                  <h2 className="text-2xl font-serif tracking-tight">Récapitulatif</h2>

                  <div className="space-y-6">
                    <div className="flex justify-between font-body text-on-surface-variant">
                      <span>Sous-total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-body text-on-surface-variant">
                      <span>Livraison assurée</span>
                      <span>${SHIPPING.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-body text-on-surface-variant">
                      <span>Taxes</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-6 border-t border-outline-variant/20 flex justify-between items-baseline">
                      <span className="text-xl font-serif">Total</span>
                      <div className="text-right">
                        <span className="text-3xl font-serif text-primary">${total.toFixed(2)}</span>
                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1 italic">TVA incluse</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-5 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-label uppercase tracking-[0.2em] font-bold text-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,198,0,0.3)] hover:scale-[1.02] active:scale-95 rounded-md">
                      Procéder au paiement
                    </button>
                    <p className="text-center text-xs text-on-surface-variant/60 font-body px-4 leading-relaxed">
                      Chaque bouteille est soigneusement emballée dans un écrin à température contrôlée.
                    </p>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-widest">
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      <span>Transactions sécurisées</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-widest">
                      <span className="material-symbols-outlined text-lg">local_shipping</span>
                      <span>Livraison conciergerie</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
