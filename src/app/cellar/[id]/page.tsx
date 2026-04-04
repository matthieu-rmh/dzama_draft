import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ALL_PRODUCTS } from "../products";
import AddToCartButton from "./AddToCartButton";
import FadeIn from "../../components/FadeIn";

const PAIRINGS = [
  {
    title: "Cacao de Madagascar 85%",
    desc: "L'amertume du chocolat d'origine unique reflète les notes de chêne brûlé et la profondeur aromatique du rhum.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI5Z8a_mNrjrDA9vwj9apDD4_hEzjEvs5pHWV0-EpPiBD7GymC4zD0nSQa5PrZTy1O1EbkcN-T24Jnb_yCDZrJ1HRQKWYpGqOkl3_zRRnzR2awxc-nKHIGfRb-MzwuvKce_8zHjt2P1jyuNCUE-HwG4Y6TqKhF9VC40PqW7lDzd2DwORZ20uiFBB5HpOCM8e7Q6CbsazjGjmry4U520czRDD5DR-M18WxuZNc0Q7oqGbRSAfoLfRS4w3ApPylt0cV15jFW1DT94Bo",
    alt: "Chocolat noir de Madagascar",
  },
  {
    title: "Habano de Collection",
    desc: "Un cigare corsé complète la finale épicée sans dominer la douceur délicate du terroir malgache.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtpltn4E6g3V6diLbsZ3uM4oXgfxqiKpo5A8LKWzMeC5k2rmdUHdUpQ5MQPI_zredXXxOpuzCPPFGHFIIHvN6mfDW7K2cLd-I6UYjDao5iDp9e-gvEUDoq5PKfCnQ-Je8c4WkUd01wBY5CvMxW-ggj50l0txQ7CafPG2_LnG-6RLhmAbEjUjgX8ZVQQh6EJtgzsPATaPmE7ko9ekHnOdk9bD88ofKqLpD_zjYCyrl2MgdVWH1JL8cLLf3ESKv_3JA9OjrMc202Hrw",
    alt: "Cigare premium",
  },
  {
    title: "Fruits Tropicaux Caramélisés",
    desc: "L'ananas ou la mangue séchée rehaussent la douceur inhérente de la canne malgache et ses notes fruitées.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Z8J31uaxw26EqsMecLErSbgySzCrzBaK48VMTifzESoMRDmu5bz040AQmvwK8IiTafjs7fAvUpooqoCTnESDmOE0mzoLZBTMvX4GAmP-b3ZyIH4OP8ocarh-hXIyS-Z9T5ftLEstvTjwirLjIdbyDltHjWosSPZd8z7wL7soqL0ybh0mmKck8KKm64MO2VPv0IXmhkIdJgDVLsA7dhK7An1dPYxGSii-TLBHFmz_1b2urBrf8cR0MScqFUTd0fgRuBf_0bCrjuA",
    alt: "Fruits tropicaux caramélisés",
  },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32">

        {/* Breadcrumb */}
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12">
          <nav className="flex items-center space-x-2 font-label text-[10px] uppercase tracking-[0.2em] text-outline">
            <a className="hover:text-primary transition-colors" href="/">Accueil</a>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <a className="hover:text-primary transition-colors" href="/cellar">Collections</a>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-on-surface-variant">{product.name}</span>
          </nav>
        </div>

        {/* Hero Product Section */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Left: Product Image */}
          <FadeIn className="md:col-span-7 flex justify-center relative" direction="left">
            <div className="absolute inset-0 bg-surface-container-low -z-10 translate-x-4 translate-y-4" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-auto max-h-[819px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
            />
          </FadeIn>

          {/* Right: Product Details */}
          <FadeIn className="md:col-span-5 space-y-10" direction="right" delay={150}>
            <div className="space-y-4">
              <span className="font-label text-sm tracking-[0.2em] uppercase text-primary">
                {product.collection}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl leading-tight text-on-surface">
                {product.name}
              </h1>
              {product.badge && (
                <span className={`inline-block ${product.badge.color} px-3 py-1 text-[9px] uppercase tracking-widest font-bold`}>
                  {product.badge.label}
                </span>
              )}
              <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-l border-outline-variant/20 pl-8">
              <div className="space-y-1">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Nez</span>
                <p className="font-body text-sm text-primary">{product.nose}</p>
              </div>
              <div className="space-y-1">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Palais</span>
                <p className="font-body text-sm text-primary">{product.palate}</p>
              </div>
              <div className="space-y-1">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Finale</span>
                <p className="font-body text-sm text-primary">{product.finish}</p>
              </div>
            </div>

            <div className="flex items-center gap-8 py-6">
              <span className="font-serif text-4xl text-on-surface">${product.price.toFixed(2)}</span>
              <AddToCartButton product={{ id: product.id, name: product.name, collection: product.collection, price: product.price, src: product.src }} />
            </div>

            <div className="pt-6 border-t border-outline-variant/10">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">verified</span>
                <p className="text-sm">Inclut un certificat d&apos;authenticité &amp; carafe numérotée à la main</p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Editorial Section */}
        <FadeIn><section className="mt-48 bg-surface-container-low py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="z-10 space-y-8">
                <h2 className="font-serif text-4xl md:text-6xl text-on-surface leading-tight">
                  Accords Parfaits
                </h2>
                <p className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed">
                  Chaque note de ce rhum d&apos;exception appelle un accord précis. Découvrez les
                  combinaisons qui révèlent sa pleine expression.
                </p>
                <div className="inline-flex items-center gap-4 text-primary group cursor-pointer">
                  <span className="font-label uppercase tracking-widest text-sm">Explorer le guide</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUHUrHhJHDs6Ze_y1TOdn7qPNSUEil_k6Z31GvbgXS-Jzt460f4_ccw1qi0kiSJ0ZIAn-UnLQBV8xhmrS_1b5Qt1QkaWVLgQ1aF8NE4SZ7jvj-GloVbE76qLBWvpY7F24SSyTOpnB_kWBbTXmCZZdC7JR0O1XT9lgOYX7eI3j210z-lqUBfArp4eijFUq0LOgUQjEZX89g0c6RI9INrFSUr2QNc5rAM9MjbTZUyO38agvODWS7DX6FubyRJ1lALU7fTsnaW_t29iw"
                  alt="Dégustation de rhum"
                  className="rounded-xl shadow-2xl relative z-0 transform md:rotate-2 hover:rotate-0 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section></FadeIn>

        {/* Perfect Pairings */}
        <FadeIn><section className="py-32 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-16 flex justify-between items-end">
            <div className="space-y-4">
              <span className="font-label text-sm tracking-[0.2em] uppercase text-outline">Sublimer l&apos;Expérience</span>
              <h2 className="font-serif text-4xl text-on-surface">Accords Parfaits</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAIRINGS.map((p) => (
              <div key={p.title} className="bg-surface-container group overflow-hidden rounded-xl">
                <div className="h-80 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="font-serif text-xl text-primary">{p.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

        {/* Technical Specifications */}
        <FadeIn><section className="py-32 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="font-serif text-3xl text-on-surface">Les Notes du Distillateur</h2>
              <div className="space-y-6">
                {[
                  { label: "Âge", value: product.ageLabel },
                  { label: "Origine", value: product.origin },
                  { label: "Degré", value: product.abv },
                  { label: "Type de fût", value: product.barrel },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between border-b border-outline-variant/10 pb-4">
                    <span className="font-label text-xs uppercase tracking-widest text-outline">{label}</span>
                    <span className="font-body text-on-surface">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-high p-12 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-9xl">inventory_2</span>
              </div>
              <h3 className="font-serif text-2xl mb-6 text-primary">Gestion de la Cave</h3>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                Pour maintenir l&apos;intégrité de ce rhum d&apos;exception, conservez-le en position
                verticale à l&apos;abri de la lumière directe du soleil à une température constante
                de 16–18°C. Une fois ouvert, le processus d&apos;oxydation adoucira légèrement les
                tanins du chêne sur 6 mois.
              </p>
              <button className="font-label text-xs uppercase tracking-widest py-3 px-6 border border-outline/30 hover:border-primary transition-colors text-primary">
                Télécharger la fiche technique
              </button>
            </div>
          </div>
        </section></FadeIn>

      </main>
      <Footer />
    </>
  );
}
