import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, desc, align = "center" }) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={isCenter ? "text-center max-w-2xl mx-auto" : "max-w-xl"}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-copper-bright mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-bone tracking-tight">
        {title}
      </h2>
      {desc && <p className="text-mist mt-4 leading-relaxed">{desc}</p>}
    </motion.div>
  );
}
