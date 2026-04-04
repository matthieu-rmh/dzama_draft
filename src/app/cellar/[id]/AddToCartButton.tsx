"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

interface Props {
  product: {
    id: number;
    name: string;
    collection: string;
    price: number;
    src: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex gap-4 flex-1">
      <button
        onClick={handleAdd}
        className="flex-1 py-5 bg-gradient-to-r from-primary-fixed-dim to-primary text-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-md hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-3"
      >
        <span className="material-symbols-outlined text-xl">
          {added ? "check" : "add_shopping_cart"}
        </span>
        {added ? "Ajouté !" : "Ajouter à la cave"}
      </button>
      <button
        onClick={() => { addItem(product); router.push("/cart"); }}
        className="px-6 py-5 border border-outline/30 text-primary font-label text-sm font-bold uppercase tracking-widest rounded-md hover:bg-white/5 transition-all"
      >
        Acheter
      </button>
    </div>
  );
}
