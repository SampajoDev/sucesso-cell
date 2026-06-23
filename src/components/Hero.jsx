import { motion } from "framer-motion";
import CircuitBackground from "./CircuitBackground";
import { hero, stats, contact } from "../data/content";
import logoSucessoCell from "/img/sucesso-cell-logo.PNG";


const lineVariants = {
  hidden: { y: "100%" },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20">
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-gold-bright uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold-bright animate-pulse-slow" />
              </span>
              {hero.eyebrow}
            </motion.div>

            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-7">
              {hero.headline.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={lineVariants}
                    className={`block ${i === hero.headline.length - 1 ? "text-gold" : "text-bone"}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-mist text-lg leading-relaxed max-w-lg mb-9"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-gradient-to-br from-gold-bright to-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-void shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center text-sm font-medium text-bone border-b border-mist/40 hover:border-gold hover:text-gold pb-0.5 transition-colors duration-200"
              >
                {hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="grid grid-cols-3 gap-6 mt-16 max-w-lg"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l border-gold/25 pl-4">
                  <dd className="font-mono text-2xl sm:text-3xl text-gold-bright font-medium">
                    {s.value}
                    <span className="text-base text-mist ml-0.5">{s.suffix}</span>
                  </dd>
                  <dt className="text-xs text-mist mt-1 leading-tight">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Assinatura visual: "medidor de precisão" estilo osciloscópio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="hidden lg:flex relative aspect-square rounded-2xl border border-gold/20 bg-graphite/60 backdrop-blur-sm p-8 overflow-hidden items-center justify-center"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute w-56 h-56 rounded-full bg-gold/10 blur-3xl" />
            
            <motion.img
              // CORREÇÃO: Utilizando a variável da imagem importada
              src={logoSucessoCell}
              alt="Logo Sucesso Cell"
              initial={{ opacity: 0, scale: 7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-[0_8px_24px_rgba(201,162,39,0.25)]"
            />
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}