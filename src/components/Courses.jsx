import { motion } from "framer-motion";
import { courses } from "../data/content";

export default function Courses() {
  return (
    <section id="cursos" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center rounded-2xl border border-dashed border-gold/25 px-10 py-14"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-copper-bright mb-3">
          {courses.title}
        </p>
        <h2 className="font-display text-3xl font-semibold text-gold mb-3">
          {courses.status}
        </h2>
        <p className="text-mist">{courses.desc}</p>
      </motion.div>
    </section>
  );
}
