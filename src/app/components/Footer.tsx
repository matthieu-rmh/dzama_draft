const collectionLinks = [
  "Vieux Rhum",
  "Séries Prestige",
  "Blanc Vieilli",
  "Infusions Botaniques",
];

const companyLinks = [
  "Distillery Tour",
  "Notre Histoire",
  "Héritage",
  "Cocktails",
];

export default function Footer() {
  return (
    <footer className="w-full py-24 px-12 mt-32 bg-stone-950 border-t border-stone-800/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto text-center md:text-left">
        {/* Brand */}
        <div>
          <span className="text-3xl font-serif text-amber-500 mb-8 block">Dzama</span>
          <p className="text-stone-500 text-sm leading-relaxed uppercase tracking-widest">
            L&apos;âme de Madagascar, distillée en or liquide. Créée pour ceux
            qui savent que la perfection ne peut être précipitée.
          </p>
        </div>

        {/* La Collection */}
        <div>
          <h4 className="font-sans text-sm tracking-widest uppercase text-amber-500 mb-8">
            La Collection
          </h4>
          <ul className="space-y-4 font-sans text-sm tracking-widest uppercase">
            {collectionLinks.map((label) => (
              <li key={label}>
                <a className="text-stone-500 hover:text-amber-200 transition-colors" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* La Maison */}
        <div>
          <h4 className="font-sans text-sm tracking-widest uppercase text-amber-500 mb-8">
            La Maison
          </h4>
          <ul className="space-y-4 font-sans text-sm tracking-widest uppercase text-stone-500">
            {companyLinks.map((label) => (
              <li key={label}>
                <a className="hover:text-amber-200 transition-colors" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-sans text-sm tracking-widest uppercase text-amber-500 mb-8">
            Newsletter
          </h4>
          <p className="text-stone-500 text-xs mb-6 uppercase tracking-widest">
            Inscrivez-vous pour recevoir des invitations à nos dégustations
            exclusives.
          </p>
          <div className="flex">
            <input
              className="bg-transparent border-b border-stone-800 text-stone-400 py-2 focus:outline-none w-full text-xs uppercase tracking-widest"
              placeholder="Votre E-mail"
              type="email"
            />
            <button
              aria-label="S'abonner"
              className="material-symbols-outlined text-amber-500 ml-4"
            >
              chevron_right
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-stone-900 text-center">
        <p className="text-stone-600 font-sans text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Rhum Dzama. Façonné avec patience.
        </p>
      </div>
    </footer>
  );
}
