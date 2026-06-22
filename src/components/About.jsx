import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { about, contact } from "../data/content";

export default function About() {
  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
        >
          <img
            src={about.photo}
            alt={about.name}
            className="w-44 h-56 object-cover rounded-xl border border-gold/30 shrink-0"
            loading="lazy"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper-bright mb-2">
              {about.role}
            </p>
            <h3 className="font-display text-2xl font-semibold text-bone mb-3">
              {about.name}
            </h3>
            <p className="text-sm text-mist leading-relaxed">{about.bio}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-white/8"
        >
          <iframe
            title="Localização Sucesso Cell"
            src={contact.mapsEmbed}
            loading="lazy"
            className="w-full h-64 grayscale-[30%] contrast-[1.1]"
          />
          <div className="p-5 bg-graphite/50 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-mist flex items-center gap-2">
              <MapPin size={16} className="text-gold-bright" />
              {contact.address}
            </p>
            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-wide text-gold-bright hover:text-gold transition-colors duration-200"
            >
              Abrir no mapa →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
