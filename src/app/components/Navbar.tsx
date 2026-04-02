import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="flex justify-between items-center w-full px-12 py-3 max-w-screen-2xl mx-auto">
        <a href="/">
          <Image
            src="/images/logo/dzama_rhum_logo.svg"
            alt="Dzama Rhum"
            width={112}
            height={112}
            className="h-14 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-wide">
          <a className="text-stone-400 hover:text-stone-200 transition-colors" href="#">
            Collections
          </a>
          <a className="text-stone-400 hover:text-stone-200 transition-colors" href="/heritage">
            Héritage
          </a>
          <a className="text-stone-400 hover:text-stone-200 transition-colors" href="#">
            Réserve de la Cave
          </a>
          <a className="text-stone-400 hover:text-stone-200 transition-colors" href="#">
            Cocktails
          </a>
        </div>

        <div className="flex items-center space-x-8">
          <button className="text-amber-500 hover:text-amber-300 transition-all duration-300 active:opacity-80">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="text-amber-500 hover:text-amber-300 transition-all duration-300 active:opacity-80 relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold px-1.5 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
