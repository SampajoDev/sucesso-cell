import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, contact } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/80 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-bone">
          <span className="text-gold">$</span>ucesso Cell
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mist hover:text-gold transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center rounded-md bg-gradient-to-br from-gold-bright to-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-void shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5 transition-all duration-200"
        >
          Orçamento
        </a>
      </div>
    </motion.header>
  );
}
