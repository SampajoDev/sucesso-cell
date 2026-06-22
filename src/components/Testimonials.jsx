import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="feedbacks" className="py-28 px-6 bg-graphite/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Quem confiou"
          title="O que dizem os clientes"
        />

        <div className="grid sm:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-void/50 border-l-2 border-gold p-7"
            >
              <div className="flex gap-0.5 mb-4 text-gold-bright">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-sm text-bone leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs font-medium text-mist">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
