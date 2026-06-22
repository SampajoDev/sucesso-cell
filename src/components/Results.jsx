import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { results, printGallery } from "../data/content";
import SectionHeading from "./SectionHeading";

function BeforeAfterCard({ item }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="rounded-xl border border-white/8 bg-graphite/50 p-4">
      <div
        className="relative aspect-[4/3] rounded-lg overflow-hidden select-none"
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
          setPos(Math.min(100, Math.max(0, x)));
        }}
      >
        <img
          src={item.after}
          alt={`${item.label} — depois do reparo`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={item.before}
            alt={`${item.label} — antes do reparo`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          className="absolute inset-y-0 w-0.5 bg-gold-bright shadow-lg"
          style={{ left: `${pos}%` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Comparar antes e depois — ${item.label}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
        <span className="absolute top-2 left-2 font-mono text-[10px] uppercase tracking-wide bg-void/70 text-mist px-2 py-1 rounded">
          Antes
        </span>
        <span className="absolute top-2 right-2 font-mono text-[10px] uppercase tracking-wide bg-void/70 text-gold-bright px-2 py-1 rounded">
          Depois
        </span>
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-bone">{item.label}</p>
        <p className="text-xs text-mist">{item.detail}</p>
      </div>
    </div>
  );
}

function Gallery3D() {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % printGallery.length);
  const prev = () => setActive((a) => (a - 1 + printGallery.length) % printGallery.length);

  return (
    <div className="relative rounded-xl border border-white/8 bg-graphite/50 overflow-hidden">
      <div className="relative aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={printGallery[active].src}
            alt={printGallery[active].label}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 font-mono text-xs text-bone">
          {printGallery[active].label}
        </p>

        <button
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-void/60 hover:bg-gold/80 hover:text-void p-2 transition-colors duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-void/60 hover:bg-gold/80 hover:text-void p-2 transition-colors duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="flex gap-1.5 justify-center py-3">
        {printGallery.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ver imagem ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-gold-bright" : "w-1.5 bg-mist/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section id="resultados" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Resultados reais"
          title="Arraste para comparar"
          desc="Cada reparo é registrado do início ao fim. Veja o antes e depois com suas próprias mãos."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {results.map((item) => (
            <BeforeAfterCard key={item.label} item={item} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl text-gold-bright mb-5 text-center">
            Galeria de impressão 3D
          </h3>
          <div className="max-w-2xl mx-auto">
            <Gallery3D />
          </div>
        </div>
      </div>
    </section>
  );
}
