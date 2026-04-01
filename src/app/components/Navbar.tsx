"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo/dzama_rhum_logo.svg"
          alt="DZAMA Rhum"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-2 font-sans text-xs tracking-widest text-dzama-cream/70">
          <button className="hover:text-dzama-gold transition-colors">FR</button>
          <span className="text-dzama-cream/30">|</span>
          <button className="hover:text-dzama-gold transition-colors">EN</button>
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-sans text-xs tracking-widest3 uppercase text-dzama-cream hover:text-dzama-gold transition-colors"
        >
          {menuOpen ? "FERMER" : "MENU"}
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 bg-dzama-dark/95 flex flex-col items-center justify-center z-40 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-8 flex items-center gap-2 font-sans text-xs tracking-widest3 uppercase text-dzama-cream hover:text-dzama-gold transition-colors"
        >
          <span>FERMER</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-10">
          {[
            { label: "Accueil", href: "/" },
            { label: "Notre Histoire", href: "#histoire" },
            { label: "Nos Produits", href: "#produits" },
            { label: "Nos Valeurs", href: "#valeurs" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl text-dzama-cream hover:text-dzama-gold transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
