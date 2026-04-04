import FadeIn from "./FadeIn";

const products = [
  {
    id: 1,
    name: "Vieux Rhum 15",
    price: "$145",
    notes: "Notes de Clou de Girofle & Chocolat Noir",
    colSpan: "md:col-span-4",
    bgClass: "bg-surface-container-low",
    padding: "p-12",
    titleSize: "text-2xl",
    badge: null,
    translateY: "",
    src: "/images/collections/vieux_rhum_15.jpeg",
  },
  {
    id: 2,
    name: "Cuvée Prestige 1985",
    price: "$890",
    notes: "L'Excellence du Terroir de Madagascar",
    colSpan: "md:col-span-5",
    bgClass: "bg-surface-container",
    padding: "p-16",
    titleSize: "text-3xl",
    badge: "Édition Limitée",
    translateY: "md:translate-y-16",
    src: "/images/collections/lucien_fohine_1984.jpeg",
  },
  {
    id: 3,
    name: "Amber Gold",
    price: "$65",
    notes: "Vanille Grillée & Poivre",
    colSpan: "md:col-span-3",
    bgClass: "bg-surface-container-low",
    padding: "p-8",
    titleSize: "text-xl",
    badge: null,
    translateY: "",
    src: "/images/collections/amber_gold.jpeg",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-32 px-12 max-w-screen-2xl mx-auto">
      <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl font-serif mb-6">La Réserve de la Cave</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Chaque flacon représente une récolte singulière, distillée selon des
            méthodes ancestrales et affinée par des décennies de maturation
            tropicale.
          </p>
        </div>
        <a
          className="text-primary font-bold tracking-widest uppercase text-sm border-b border-primary/30 pb-2 hover:border-primary transition-all"
          href="#"
        >
          Voir toutes les collections
        </a>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {products.map((product, i) => (
          <FadeIn
            key={product.id}
            className={`${product.colSpan} ${product.translateY} group cursor-pointer`}
            delay={i * 150}
          >
            <div
              className={`${product.bgClass} aspect-[3/4] ${product.padding} flex items-center justify-center relative overflow-hidden`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
                src={product.src}
                alt={product.name}
              />
              {product.badge && (
                <div className="absolute top-8 left-8 bg-secondary-container text-white px-4 py-1 text-[10px] tracking-widest uppercase font-bold">
                  {product.badge}
                </div>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className={`${product.titleSize} font-serif`}>{product.name}</h3>
                <span className="text-primary-container font-bold">{product.price}</span>
              </div>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest font-label">
                {product.notes}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
