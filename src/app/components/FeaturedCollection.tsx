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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-jp2aJfwTxjAD1rhGnqSH4Wl41fUf4nrCoRZM5DdqpFo9YFfBXphQjVqTocM7-89w61hDjN2lW5XGEiPgr5_2HQ_juH36OdfC_cdoK-UPhH99Yt3weFPC7VM8c-eXganyLjcu_0KHAV4YGUa02CSXLsfXfl-5SgB_DH9i3BnID3OqZ5xQkkc8dggA699GYSgVZOdDCHFh3G2AVObt7JQNst7QbCgmFtrGn3R67B4PPt78WODY-fLnFtxjrnDxAqHU9Q4AZNrrfkE",
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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0hyoC-gcy4tNnhleBjdoz0d9PMJHVDmAnK_7OaHBRRPn94TAcOQ3XeSy2bX7sltyCR2M-KKUXaVyza_Ei_BAclF14DXWMQUuPrmW9oodUSKK2K5o2jB-s7d7obIFqkvn0kgdn6ll6lP5_RzIByhQzXuMtAAN59tBk9XYijuS7gL4x8AuLlnnDDvroIS2PglVF8CFmh-qDI2okzKnDUh6_RxS93R0xdANLTXK2T91ULEi02xdIWQGyWdGZQbm-Aihj2VR2iaFezDM",
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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhDHah3ZLCDEdY_iEV8aNumvZX4My0Vl70jVV-hSly45wsBFn-0NRJU13pTG0m4KZV_PcL1_dKbKvJjDgIUUWMvP6_RnK2x27D1XdtwdOCEMcw5lwC3nzyRSWdVxVJB258oWr0RiNwS-oiVpx_KyWnik4oRAZRyo8uQtUZ2oBqqtP4K4MWmB56bKgbgucH_VnOYtefS4CrgKDsCk_zhr0S_u4ZIocA5ggRZKA8l5pernIcGKGbW6dyTDGRhgmbPzov4_8jSqxJVCs",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-32 px-12 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
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
      </div>

      {/* Asymmetric product grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${product.colSpan} ${product.translateY} group cursor-pointer`}
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
          </div>
        ))}
      </div>
    </section>
  );
}
