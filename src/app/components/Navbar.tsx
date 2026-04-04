"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Collections", href: "/cellar" },
  { label: "Héritage", href: "/heritage" },
  { label: "Réserve de la Cave", href: "#" },
  { label: "Cocktails", href: "/cocktails" },
];

const activeClass =
  "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-colors";
const inactiveClass =
  "text-stone-100 hover:text-white transition-colors";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, items } = useCart();
  const cartTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const isActive = (link: { label: string; href: string }) =>
    link.href !== "#" && pathname === link.href;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-transparent">
      <div className="flex justify-between items-center w-full px-12 py-1 max-w-screen-2xl mx-auto">
        <a href="/">
          <Image
            src="/images/logo/dzama_rhum_logo.svg"
            alt="Dzama Rhum"
            width={112}
            height={112}
            className={`h-14 w-auto object-contain transition-all duration-300 ${pathname === "/" ? "drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" : ""}`}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-wide">
          {navLinks.filter((l) => l.label !== "Accueil").map((link) => (
            <a
              key={link.label}
              className={isActive(link) ? activeClass : inactiveClass}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <button className="text-amber-500 hover:text-amber-300 transition-all duration-300 active:opacity-80">
            <span className="material-symbols-outlined">person</span>
          </button>
          <div className="relative group">
            <Link href="/cart" className="text-amber-500 hover:text-amber-300 transition-all duration-300 active:opacity-80 relative block">
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold px-1.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Hover popover */}
            <div className="absolute right-0 top-full mt-4 w-80 bg-surface-container border border-outline-variant/20 shadow-2xl shadow-black/60 backdrop-blur-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
              {items.length === 0 ? (
                <div className="p-8 text-center text-outline font-label text-[10px] uppercase tracking-widest">
                  Votre cave est vide
                </div>
              ) : (
                <>
                  <div className="p-4 space-y-4 max-h-72 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="w-12 aspect-[3/4] bg-surface-container-low flex-shrink-0 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.src} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-serif text-sm text-on-surface truncate">{item.name}</p>
                          <p className="font-label text-[10px] text-outline uppercase tracking-widest">
                            ×{item.quantity} · ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-outline-variant/20 p-4 flex items-center justify-between">
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-outline">Total</p>
                      <p className="font-serif text-lg text-primary-fixed-dim">${cartTotal.toFixed(2)}</p>
                    </div>
                    <Link
                      href="/cart"
                      className="px-5 py-2 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-label text-[10px] uppercase tracking-widest font-bold hover:opacity-90 transition-all"
                    >
                      Voir la cave
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-amber-500 hover:text-amber-300 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        } bg-stone-950/95 backdrop-blur-xl`}
      >
        <div className="flex flex-col px-12 space-y-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-serif text-xl ${isActive(link) ? activeClass : inactiveClass}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
