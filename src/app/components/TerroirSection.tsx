export default function TerroirSection() {
  return (
    <section className="mt-48 bg-surface-container-lowest py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Image column with floating card */}
        <div className="relative">
          <div className="aspect-square bg-surface-container-high relative overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBda6Duj5q5tz_m2nMYyJJiBxRGPKhcPHhSEuty-xJ_S_sTzdtCtBI4h-ifQzks4_r4agv_XjaxavNn7r9Z94fvs9CWtcVYkiigGYFJ_LflSWTPZBY2TC04DBgQkOGiscQn2yAg0mtkq3J4tB9ndeiaaUFqV3wwqK_B8TefFZ3SY0l7u6ZRhBD-1ERgolMCYOkqqCaXNRbU9T6EKI32fEOQvOelv4xIbEv8bpRKNvOAUca7uILwv1rP7deXSFR7qVxJNyYAYD0gn_0"
              alt="Vue aérienne de la côte de Madagascar"
            />
          </div>
          {/* Floating text card */}
          <div className="absolute -bottom-12 -right-12 w-64 h-80 bg-surface-bright p-8 shadow-2xl hidden md:block">
            <h4 className="font-serif text-2xl mb-4 text-primary">Le Terroir</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              L&apos;alliance unique d&apos;un sol volcanique rouge et du climat
              tropical humide de l&apos;océan Indien permet à notre canne à sucre
              de développer une complexité inégalée.
            </p>
          </div>
        </div>

        {/* Text column */}
        <div className="space-y-12">
          <span className="font-label uppercase tracking-[0.3em] text-primary block text-sm">
            Est. 1982
          </span>
          <h2 className="text-6xl font-serif leading-tight">
            Façonné par <br />
            l&apos;Île aux Épices.
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-lg">
            <p>
              Le Rhum Dzama est né sur l&apos;île de Sainte-Marie (Nosy Boraha),
              là où l&apos;air est imprégné de senteurs de vanille sauvage et de
              girofle. Ces aromates naturels imprègnent notre distillerie,
              assaisonnant naturellement le rhum durant la fermentation.
            </p>
            <p>
              À l&apos;inverse des spiritueux industriels, nous respectons le
              rythme des saisons. Notre rhum est distillé une seule fois pour
              préserver tout le caractère de la canne malgache, puis repose en
              fûts de chêne jusqu&apos;à sa perfection.
            </p>
          </div>
          <button className="group flex items-center space-x-4 text-primary font-bold tracking-widest uppercase text-sm">
            <span>Lire Notre Histoire</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
