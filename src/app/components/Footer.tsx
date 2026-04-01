import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Nos Produits", href: "#produits" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dzama-dark-3">
      {/* Contact banner — wood texture feel */}
      <div className="relative overflow-hidden bg-[#3b2f1e] py-20 px-8 md:px-20">
        <Image
          src="/images/6.png"
          alt="Contact background"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl text-dzama-cream uppercase tracking-widest mb-4">
            Contact
          </h2>
          <div className="divider-gold mb-6" />
          <a
            href="mailto:contact@dzama.com"
            className="font-sans text-xs tracking-widest2 uppercase text-dzama-cream/60 hover:text-dzama-gold transition-colors"
          >
            Prendre contact
          </a>
        </div>
      </div>

      {/* Footer nav */}
      <div className="bg-dzama-dark py-10 px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-dzama-cream/50 hover:text-dzama-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-dzama-cream/20 flex items-center justify-center hover:border-dzama-gold hover:text-dzama-gold transition-colors text-dzama-cream/50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-dzama-cream/20 flex items-center justify-center hover:border-dzama-gold hover:text-dzama-gold transition-colors text-dzama-cream/50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-dzama-cream/20 flex items-center justify-center hover:border-dzama-gold hover:text-dzama-gold transition-colors text-dzama-cream/50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0e0e" />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-6 border-t border-dzama-cream/10 text-center">
          <p className="font-sans text-[10px] tracking-widest text-dzama-cream/30 uppercase">
            L&apos;abus d&apos;alcool nuit à la santé. À consommer avec modération.
          </p>
          <p className="font-sans text-[10px] text-dzama-cream/20 mt-2">
            © {new Date().getFullYear()} DZAMA Rhum — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
