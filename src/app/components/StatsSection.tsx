const stats = [
  {
    number: "7",
    label: "Prix de Jury International",
    sublabel: "Londres, Miami, Madrid, Las Vegas, Paris, Shangai et Berlin.",
  },
  {
    number: "2",
    label: "Gammes de Produits",
    sublabel: "Prestige et Luxe",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-dzama-dark-2 py-24 px-8 md:px-20">
      <div className="max-w-3xl mx-auto divide-y divide-dzama-cream/10">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-start gap-16 py-12">
            <span className="font-serif text-7xl md:text-8xl text-dzama-gold font-bold leading-none min-w-[80px] text-center">
              {stat.number}
            </span>
            <div className="pt-2">
              <p className="font-sans text-xs tracking-widest2 uppercase text-dzama-cream mb-2">
                {stat.label}
              </p>
              <p className="font-sans text-xs tracking-widest text-dzama-cream/40">
                {stat.sublabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
