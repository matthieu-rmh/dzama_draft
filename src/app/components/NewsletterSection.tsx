import FadeIn from "./FadeIn";

export default function NewsletterSection() {
  return (
    <section className="py-32 px-12">
      <FadeIn>
        <div className="max-w-4xl mx-auto glass-panel p-16 md:p-24 text-center relative border border-outline-variant/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary" />
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">
            Rejoignez le Cercle des Connaisseurs
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">
            Soyez les premiers à accéder à nos millésimes limités, nos dégustations
            privées et aux chroniques de notre distillerie.
          </p>
          <form className="flex flex-col md:flex-row gap-6 max-w-lg mx-auto">
            <input
              className="flex-1 bg-transparent border-b border-outline-variant text-on-surface py-3 px-0 focus:outline-none focus:border-primary transition-all font-body"
              placeholder="Adresse E-mail"
              type="email"
            />
            <button
              type="submit"
              className="px-10 py-3 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs hover:bg-primary-container transition-colors"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
