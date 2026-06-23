import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { results, printGallery } from "../data/content";
import SectionHeading from "./SectionHeading";

// COMPONENTE DE MODAL COMPARTILHADO (Abre em tela cheia)
function ImageModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 p-4 backdrop-blur-md cursor-zoom-out"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro do conteúdo
          className="relative max-w-5xl w-full bg-graphite/90 border border-white/10 rounded-2xl overflow-hidden p-3 md:p-6 cursor-default"
        >
          {/* Botão de fechar fixo no canto superior direito */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 rounded-full bg-void/60 text-bone hover:bg-gold-bright hover:text-void p-2 transition-colors duration-200"
            aria-label="Fechar janela"
          >
            <X size={20} />
          </button>

          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// CARD DE MANUTENÇÃO (ANTES E DEPOIS CLICÁVEL)
function BeforeAfterCard({ item }) {
  const [showAfter, setShowAfter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-white/8 bg-graphite/50 p-4 flex flex-col justify-between h-full">
        <div
          className="relative aspect-[4/3] rounded-lg overflow-hidden select-none cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={showAfter ? item.after : item.before}
            alt={item.label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          {/* Tag de identificação rápida */}
          <span className="absolute top-2 left-2 font-mono text-[10px] uppercase tracking-wide bg-void/80 text-gold-bright px-2 py-1 rounded">
            {showAfter ? "Depois" : "Antes"}
          </span>

          {/* Efeito de hover revelando o botão de zoom */}
          <div className="absolute inset-0 bg-void/20 group-hover:bg-void/40 transition-colors duration-200 flex items-center justify-center">
            <span className="bg-void/80 text-bone text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 shadow-lg">
              <Eye size={14} /> Ver Detalhes
            </span>
          </div>
        </div>

        {/* Textos explicativos e botão rápido de alternar no mini card */}
        <div className="mt-3 flex flex-col gap-2">
          <div>
            <p className="text-sm font-medium text-bone">{item.label}</p>
            <p className="text-xs text-mist line-clamp-1">{item.detail}</p>
          </div>
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="w-full text-center py-1.5 text-xs font-mono uppercase tracking-wider border border-white/10 hover:border-gold-bright/50 rounded text-mist hover:text-gold-bright transition-colors"
          >
            Mudar para {showAfter ? "Antes" : "Depois"}
          </button>
        </div>
      </div>

      {/* MODAL DETALHADO DO ANTES E DEPOIS */}
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] md:aspect-[16/10] w-full max-h-[70vh] rounded-xl overflow-hidden bg-void flex items-center justify-center">
            
            {/* Imagem grande com transição suave controlada por ID único */}
            <AnimatePresence mode="wait">
              <motion.img
                key={showAfter ? "modal-img-after" : "modal-img-before"}
                src={showAfter ? item.after : item.before}
                alt={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>

            {/* Abas seletoras inferiores dentro da imagem ampliada */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-void/80 backdrop-blur-md rounded-full p-1.5 flex gap-1 border border-white/10 shadow-xl z-10">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-all ${
                  !showAfter ? "bg-gold-bright text-void font-bold" : "text-mist hover:text-bone"
                }`}
              >
                Antes
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-all ${
                  showAfter ? "bg-gold-bright text-void font-bold" : "text-mist hover:text-bone"
                }`}
              >
                Depois
              </button>
            </div>
          </div>
          
          <div className="px-2">
            <h4 className="text-lg font-medium text-bone">{item.label}</h4>
            <p className="text-sm text-mist mt-1">{item.detail}</p>
          </div>
        </div>
      </ImageModal>
    </>
  );
}

// COMPONENTE DE GALERIA 3D COM MODAL EXPANSÍVEL
function Gallery3D() {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = (e) => {
    e?.stopPropagation(); // Evita que abrir o modal dispare junto com a navegação
    setActive((a) => (a + 1) % printGallery.length);
  };
  
  const prev = (e) => {
    e?.stopPropagation(); 
    setActive((a) => (a - 1 + printGallery.length) % printGallery.length);
  };

  return (
    <>
      <div className="relative rounded-xl border border-white/8 bg-graphite/50 overflow-hidden shadow-lg">
        <div
          className="relative aspect-[16/9] cursor-zoom-in group"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={printGallery[active].src}
            alt={printGallery[active].label}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          
          {/* Efeito de foco ao passar o mouse */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-void/20 transition-opacity duration-200">
            <span className="bg-void/80 text-bone text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <Eye size={14} /> Expandir Imagem
            </span>
          </div>

          <p className="absolute bottom-4 left-4 font-mono text-xs text-bone z-10">
            {printGallery[active].label}
          </p>

          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-void/60 hover:bg-gold-bright hover:text-void p-2 transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-void/60 hover:bg-gold-bright hover:text-void p-2 transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        
        {/* Indicadores de bolinha na parte inferior do carrossel padrão */}
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

      {/* MODAL AMPLIADO DA GALERIA 3D */}
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative aspect-[16/9] w-full max-h-[75vh] rounded-xl overflow-hidden bg-void flex items-center justify-center select-none">
          <img
            src={printGallery[active].src}
            alt={printGallery[active].label}
            className="w-full h-full object-contain"
          />

          {/* Setas de navegação dentro da própria imagem ampliada */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-void/70 text-bone hover:bg-gold-bright hover:text-void p-3 transition-colors duration-200 shadow-xl z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-void/70 text-bone hover:bg-gold-bright hover:text-void p-3 transition-colors duration-200 shadow-xl z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Legenda inferior do modal */}
          <div className="absolute bottom-4 left-4 right-4 text-center bg-void/70 backdrop-blur-sm py-2 px-4 rounded-xl max-w-max mx-auto border border-white/5">
            <p className="font-mono text-sm text-bone">{printGallery[active].label}</p>
          </div>
        </div>
      </ImageModal>
    </>
  );
}

// SEÇÃO PRINCIPAL DE RESULTADOS
export default function Results() {
  return (
    <section id="resultados" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Resultados reais"
          title="Clique para detalhar"
          desc="Veja de perto a qualidade impecável dos nossos serviços. Clique em qualquer card de manutenção ou foto da galeria para ampliar os detalhes em alta resolução."
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