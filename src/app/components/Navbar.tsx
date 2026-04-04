"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Collections", href: "#" },
  { label: "Héritage", href: "/heritage" },
  { label: "Réserve de la Cave", href: "#" },
  { label: "Cocktails", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="flex justify-between items-center w-full px-12 py-3 max-w-screen-2xl mx-auto">
        <a href="/">
          <Image
            src="/images/logo/dzama_rhum_logo.svg"
            alt="Dzama Rhum"
            width={112}
            height={112}
            className="h-14 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-wide">
          {navLinks.filter((l) => l.label !== "Accueil").map((link) => (
            <a
              key={link.label}
              className="text-stone-400 hover:text-stone-200 transition-colors"
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
          <button className="text-amber-500 hover:text-amber-300 transition-all duration-300 active:opacity-80 relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold px-1.5 rounded-full">
              2
            </span>
          </button>

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
              className="font-serif text-xl text-stone-400 hover:text-stone-200 transition-colors"
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
