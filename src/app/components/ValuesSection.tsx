import Image from "next/image";

const values = [
  {
    number: "N°1",
    title: "Humains",
    description:
      "Le Groupe puise sa force sur une multiplication de synergie de compétences émanant de son personnel, partenaire incontournable de sa réussite. Le Groupe considère avec enthousiasme sa matière première : le respect, l'autre, en un mot, la valorisation du côté humain.",
    image: "/images/homepage_sections/humains_section.jpg",
    imageAlt: "Valeur Humains — Femme dans les champs",
    imagePosition: "right",
  },
  {
    number: "N°2",
    title: "Innovant",
    description:
      "La qualité de nos produits tient toujours ses promesses. Cela repose spécifiquement sur notre matière guidée par l'expérience, les valeurs de l'artisanat réunier du temps de l'époque, combiné pour un goût de savoir-faire inégalé et élégant.",
    image: "/images/homepage_sections/innovant_section.jpg",
    imageAlt: "Valeur Innovant — Fleur de vanille",
    imagePosition: "left",
  },
  {
    number: "N°3",
    title: "Fiable",
    description:
      "La qualité de nos produits tient toujours ses promesses. Cela repose spécifiquement sur notre matière guidée par l'expérience, les valeurs de l'artisanat réunier du temps de l'époque, combiné pour un goût de savoir-faire inégalé et élégant.",
    image: "/images/homepage_sections/fiable_section.jpg",
    imageAlt: "Valeur Fiable — Épices",
    imagePosition: "right",
  },
  {
    number: "N°4",
    title: "Fière d'être Malagasy",
    description:
      "La fidélité aux racines Malagasy est une multiplication des gammes de produits du Groupe ne cesse de s'enrichir tout en restant fidèle à la valeur aux racines et aux valeurs de Madagascar. Dans toute la stratégie de communication du groupe, cette fierté Za Malagasy est indiscutablement véhiculée.",
    image: "/images/homepage_sections/baobab.jpg",
    imageAlt: "Allée des Baobabs — Madagascar",
    imagePosition: "left",
    overlayImage: "/images/homepage_sections/maki.png",
  },
];

export default function ValuesSection() {
  return (
    <section id="valeurs" className="bg-dzama-dark">
      {values.map((value, i) => (
        <div
          key={i}
          className={`flex flex-col ${
            value.imagePosition === "right"
              ? "md:flex-row"
              : "md:flex-row-reverse"
          } min-h-[60vh]`}
        >
          {/* Text side */}
          <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-16 bg-dzama-dark-2">
            {/* Gold flame icon placeholder */}
            <div className="mb-6">
              <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2C18 2 28 14 28 24C28 34 24 44 18 46C12 44 8 34 8 24C8 14 18 2 18 2Z"
                  fill="#c9a347"
                  opacity="0.9"
                />
                <path
                  d="M18 12C18 12 24 20 24 27C24 34 21 40 18 42C15 40 12 34 12 27C12 20 18 12 18 12Z"
                  fill="#e2bb65"
                  opacity="0.7"
                />
              </svg>
            </div>

            <p className="section-label">Valeur {value.number}</p>
            <h2 className="section-title mb-4">{value.title}</h2>
            <div className="divider-gold mb-6" />
            <p className="font-sans text-dzama-cream/60 text-sm leading-relaxed max-w-md">
              {value.description}
            </p>
          </div>

          {/* Image side */}
          <div className="flex-1 relative min-h-[300px] md:min-h-0">
            <Image
              src={value.image}
              alt={value.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {"overlayImage" in value && value.overlayImage && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={value.overlayImage}
                  alt="Maki — Madagascar"
                  width={320}
                  height={400}
                  className="object-contain opacity-80"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
