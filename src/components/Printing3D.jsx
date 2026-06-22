import { motion } from "framer-motion";
import { printing } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Printing3D() {
  return (
    <section id="impressao-3d" className="py-28 px-6 bg-graphite/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            align="left"
            eyebrow="Impressão 3D"
            title="Da ideia digital ao objeto físico"
            desc="Usamos a mesma precisão da bancada de microsoldagem para criar peças sob medida — funcionais ou decorativas."
          />

          <div className="space-y-4">
            {printing.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/8 bg-void/40 p-6 hover:border-copper/40 transition-colors duration-300"
              >
                <h3 className="font-display text-lg font-medium text-bone mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
