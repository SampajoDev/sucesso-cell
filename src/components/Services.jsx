import { motion } from "framer-motion";
import { services } from "../data/content";
import SectionHeading from "./SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <section id="servicos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="O que reparamos"
          title="Manutenção de precisão"
          desc="Do ajuste simples ao reparo em nível de componente — se existe solução, está aqui."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {services.map((s, i) => (
            <motion.article
              key={s.code}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl border border-white/8 bg-graphite/50 p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.12), transparent 70%)",
                }}
              />
              <span className="font-mono text-[11px] text-copper-bright tracking-widest">
                {s.code}
              </span>
              <h3 className="font-display text-xl font-medium text-bone mt-3 mb-2.5">
                {s.title}
              </h3>
              <p className="text-sm text-mist leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
