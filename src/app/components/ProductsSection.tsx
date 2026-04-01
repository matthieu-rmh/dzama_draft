import Image from "next/image";

const featuredProduct = {
  name: "Vieux Rhum de Madagascar",
  age: "8",
  finish: "Finition en Vieux Fûts de Cognac",
  image: "/images/homepage_sections/vieux_rhum.png",
  bg: "bg-dzama-teal",
};

const sideProducts = [
  {
    scriptName: "Vanilla Dzama Rhum",
    description:
      "Avec une gousse entière de Vanille de Madagascar, cultivée et préparée avec soin selon la tradition Malgache, est ajoutée à...",
    image: "/images/homepage_sections/vanilla_rhum.png",
  },
  {
    scriptName: "Lucien Fohine",
    description:
      "Millésime : 1984 ! Il n'y aura jamais un Rhum qui exprimera mieux la culture du Rhummalgache et sa riche...",
    image: "/images/homepage_sections/lucien_fohine.png",
  },
];

export default function ProductsSection() {
  return (
    <section id="produits" className="bg-dzama-dark">
      {/* Section header */}
      <div className="px-8 md:px-16 pt-20 pb-8">
        <p className="section-label">Nos</p>
        <h2 className="section-title">Produits</h2>
      </div>

      {/* Product grid */}
      <div className="flex flex-col md:flex-row min-h-[300px]">
        {/* Featured product — left */}
        <div className={`flex-1 ${featuredProduct.bg} relative flex flex-col items-center justify-center px-10 py-8 overflow-hidden`}>
          {/* Leaf/tropical background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M200,50 Q300,150 200,350 Q100,150 200,50Z" fill="#f5f0e8" opacity="0.3" />
              <path d="M50,200 Q150,100 350,200 Q150,300 50,200Z" fill="#f5f0e8" opacity="0.2" />
            </svg>
          </div>

          <div className="relative z-10 text-center text-dzama-cream">
            <p className="font-sans text-xs tracking-widest2 uppercase mb-2 opacity-80">
              {featuredProduct.name}
            </p>
            <p className="font-sans text-xs tracking-widest uppercase mb-1 opacity-60">Aged</p>
            <p className="font-serif text-8xl font-bold leading-none">{featuredProduct.age}</p>
            <p className="font-sans text-xs tracking-widest uppercase opacity-60 mb-8">
              {featuredProduct.finish}
            </p>

            <div className="flex justify-center mb-10">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                width={120}
                height={240}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <a href="#" className="btn-primary">
              Découvrir
            </a>
          </div>
        </div>

        {/* Side products — right */}
        <div className="flex-1 flex flex-col divide-y divide-dzama-cream/10 bg-dzama-dark-3">
          {sideProducts.map((product, i) => (
            <div key={i} className="flex items-start gap-6 px-10 py-10">
              <div className="flex-1">
                <h3 className="font-script text-4xl text-dzama-cream mb-4">
                  {product.scriptName}
                </h3>
                <div className="divider-gold mb-4" />
                <p className="font-sans text-dzama-cream/50 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <a href="#" className="btn-gold text-xs">
                  Découvrir
                </a>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.scriptName}
                  width={140}
                  height={280}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All products strip */}
      <div className="bg-dzama-cream py-16 px-8 md:px-16 text-center">
        <p className="section-label text-dzama-dark/60 mb-2">Voir tous nos</p>
        <h3 className="font-serif text-dzama-dark text-3xl uppercase tracking-widest mb-12">
          Produits
        </h3>
        <div className="flex items-end justify-center gap-6 md:gap-10 overflow-x-auto pb-4">
          {[...sideProducts, featuredProduct, ...sideProducts, featuredProduct].slice(0, 6).map((product, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={product.image}
                alt={"scriptName" in product ? product.scriptName : product.name}
                width={60}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
