import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contact } from "../data/content";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-void font-semibold px-5 py-3.5 shadow-xl shadow-black/40"
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-white/5 text-xs text-mist/60">
      <p>© 2026 Sucesso Cell — Compromisso com a qualidade.</p>
    </footer>
  );
}
