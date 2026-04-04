import Navbar from "../components/Navbar";

const milestones = [
  {
    year: "1980",
    title: "Fondation",
    body: "Lucien Fohine établit la première distillerie artisanale dans le nord de Madagascar.",
    bg: "bg-surface-container",
  },
  {
    year: "1996",
    title: "Expansion",
    body: "Lancement de la gamme Prestige, valant à la marque ses premières médailles d'or internationales.",
    bg: "bg-surface-container-low",
  },
  {
    year: "2012",
    title: "Innovation",
    body: "Pionnier de l'utilisation de botaniques aromatiques de l'île dans le processus de vieillissement.",
    bg: "bg-surface-container",
  },
  {
    year: "2024",
    title: "Héritage",
    body: "Perpétuation de la tradition en tant que producteur de rhum le plus récompensé de Madagascar.",
    bg: "bg-surface-container-low",
  },
];

export default function HeritagePage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface text-on-surface">

        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWlKWZFnT3EluAvFSMAQn8pw8pz950dph1e78vJcVD5nYNyN_hIASkcZbd6OABBTzpQct0zG7hQM0ue0rOdBE4WI0leMEuAE4fYq6omdjpKb_ybF4KEMQCcdDpwFmREYdOis7MwK812oFNX9u4KGptyxZztcJIn7am2llgJZfnewZUFeR8AJotDCaeHX0hrQsAsA0U3e0KpYi3_wih3JSWw1wXlqdY4XsqTa10F19qTtV23qLexIC4AUFq9sFD2N2-vjmuo0_8uVs"
              alt="Côte malgache au coucher du soleil"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="font-label text-primary-container tracking-[0.3em] uppercase text-sm mb-6 block">
              L&apos;Île Rouge
            </span>
            <h1 className="font-serif text-6xl md:text-8xl text-primary mb-8 leading-tight tracking-tight">
              L&apos;Héritage Dzama
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
              Une histoire gravée dans le sol volcanique et distillée par l&apos;âme
              de Madagascar. Vivez la patience de l&apos;île.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-px h-24 bg-gradient-to-b from-primary-container to-transparent" />
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-24 md:py-48 px-6 md:px-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
            {/* Image column */}
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity"
                  src="/images/heritage/lucien_fohine_cropped.jpeg"
                  alt="Portrait de Lucien Fohine, fondateur de Dzama"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 md:-right-20 w-64 aspect-square bg-surface-container-highest p-4 hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="/images/heritage/futs.jpg"
                  alt="Fûts de vieillissement Dzama"
                />
              </div>
            </div>

            {/* Text column */}
            <div className="md:col-span-7 space-y-8">
              <h2 className="font-serif text-5xl md:text-6xl text-primary-container">
                L&apos;Histoire
              </h2>
              <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                <p>
                  <span className="float-left font-serif text-7xl text-primary mr-3 leading-none">E</span>
                  n 1980, sur les îles reculées de Madagascar, Lucien Fohine fonde
                  Dzama Rhum avec une vision qui transcende la simple production. Il
                  cherche à capturer l&apos;essence même du terroir, créant un récit
                  liquide de la richesse botanique unique de l&apos;île.
                </p>
                <p>
                  Ce qui débute comme une quête locale dans le nord de l&apos;île
                  devient rapidement une référence mondiale pour les spiritueux
                  premium. L&apos;obsession de Lucien pour la qualité signifie que chaque
                  fournée doit refléter les conditions spécifiques de sa naissance,
                  du sol volcanique à l&apos;influence aromatique de l&apos;ylang-ylang
                  sauvage.
                </p>
                <div className="pt-8 md:pl-48">
                  <a href="#milestones" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-bold uppercase tracking-widest text-xs rounded-md shadow-2xl hover:brightness-110 transition-all">
                    Découvrir la Chronologie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Terroir */}
        <section className="py-24 md:py-48 px-6 md:px-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center md:text-left">
              <h2 className="font-serif text-5xl md:text-7xl text-primary mb-6">
                Le Terroir
              </h2>
              <p className="font-body text-on-surface-variant max-w-xl text-lg">
                Nosy Boraha : là où les minéraux volcaniques rencontrent les alizés
                tropicaux.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-surface-container p-12 flex flex-col justify-between min-h-[400px]">
                <div>
                  <h3 className="font-serif text-3xl text-primary-fixed mb-4">
                    Fondations Volcaniques
                  </h3>
                  <p className="text-on-surface-variant text-lg max-w-md">
                    Le sol volcanique riche en nutriments de Madagascar confère une
                    complexité minérale distincte à notre canne à sucre, un profil
                    introuvable ailleurs sur Terre.
                  </p>
                </div>
                <div className="mt-8 h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbbgS-_Bu0NzQJjb4xZ9ZIqEMUWNjbNx16DNCbsHViiVPa-J-AXv2sV8aESxUHvDz2l1PdjILOVXvWrX4DlgJeCuPVlyQxXQbQbnhVHNNmIemS4uoafFaGcIMB_FIkItTlhJ7YewM6EgtUYAAW8l89jfyDAfDb-UamIZp4ZL2qExn6z9VwYkA7n9jA0SRoMhRlHhUB6cWLC3W_2zQi5HJNNEhvvFS6Shtp4rLwqiJJ0EsVtpCulsNNgdHFtFPJ7X83bsWTBT0mLPo"
                    alt="Montagne volcanique malgache"
                  />
                </div>
              </div>
              <div className="bg-surface-container overflow-hidden group relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwrcW_ewnvBkHXTVkWCLS2FeEy4iMLm1H6ckKPpf3KdWD1ZasIVmJpxgbi7MBbLUoyg_GPNxBeYTHfoB6bwLQKzuZ0lH8Gh5BZt_oAK384nb5mqc2yv6Fz7HjNiJxFzl57CI2DpeTaG65D_Sii5M4rBtCUR-r5I07gbQ5CXc1d8oQ7WRPEx4-mrJvntf6YdiLxy-7vrj7eyJTsErFXPJSYS9a7jCWtnpvP-nMQssBl5KABU15Z2_NXfXN6AtqVSusPUiY7Kk2H48"
                  alt="Champ de canne à sucre à Madagascar"
                />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl text-white">
                    Microclimat Insulaire
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    Un air humide et salé qui pénètre dans les fûts de vieillissement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Craft */}
        <section className="py-24 md:py-48 px-6 md:px-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="font-serif text-5xl md:text-6xl text-primary-container mb-12">
                Savoir-Faire Traditionnel
              </h2>
              <div className="space-y-16">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-serif text-primary">
                    01
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-primary mb-3">
                      Double Distillation
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Notre spiritueux naît dans de petits alambics en cuivre. Ce
                      procédé de double distillation garantit que seul le
                      &quot;cœur&quot; le plus pur du rhum est conservé,
                      concentrant les esters aromatiques de l&apos;île.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-serif text-primary">
                    02
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-primary mb-3">
                      Maturation en Fûts de Chêne
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Nos réserves vieillissent dans des barriques de chêne du
                      Limousin. L&apos;interaction entre le spiritueux et le bois,
                      accélérée par l&apos;humidité tropicale, crée un profil
                      complexe de vanille et d&apos;épices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5]">
                <div className="absolute inset-4 border border-outline-variant/20 z-10 pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBniddQT4g6UajYTVJy7Dkoz003vs5GtVMi-R_bPzjWZIFhrJ47zL0S0U9wTIt_fCWXmfolXGGi0U23Vma_U9jsyAp-KvnWN1EjPby__W6026enuhzaslaAt578c3pIDeEInmD9jKuWSdFhjot2sCO9fmmEaMgyKep037cckIWZkVtGDHd-0oayDq41PfsD2wmeAmX63t1aconCU8QmvfpH04kCZwN0QJI-44ds2jwUzdOUVDw_FJO4YMiVDOHI4xQT6ouQtPiy0pY"
                  alt="Alambic en cuivre dans la distillerie"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section id="milestones" className="py-24 md:py-48 px-6 md:px-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="font-label text-outline text-xs tracking-widest uppercase mb-4 block">
                Chroniques
              </span>
              <h2 className="font-serif text-5xl text-primary">
                Jalons d&apos;Excellence
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className={`${m.bg} p-10 hover:bg-surface-container-high transition-colors duration-300`}
                >
                  <span className="font-serif text-4xl text-primary-container mb-6 block">
                    {m.year}
                  </span>
                  <h5 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">
                    {m.title}
                  </h5>
                  <p className="text-on-surface-variant text-sm">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
        <div className="text-lg font-serif font-bold text-primary-fixed-dim tracking-widest">
          Dzama
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Politique de Confidentialité", "Conditions d'Utilisation", "Portail Distributeurs", "Durabilité"].map((label) => (
            <a
              key={label}
              className="font-body text-sm tracking-widest uppercase text-outline hover:text-primary transition-all"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="font-body text-xs tracking-widest text-outline uppercase text-center md:text-right">
          © {new Date().getFullYear()} Rhum Dzama. Façonné avec patience.
        </div>
      </footer>
    </>
  );
}
