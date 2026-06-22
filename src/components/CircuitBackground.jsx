import { motion } from "framer-motion";

// Fundo de trilhas de circuito — referência direta ao trabalho de microsoldagem.
// SVG puro, leve, sem dependência de imagem externa.
export default function CircuitBackground() {
  const paths = [
    "M -50 120 H 200 V 260 H 420 V 90 H 700",
    "M -50 340 H 150 V 180 H 380 V 420 H 650 V 300 H 900",
    "M -50 480 H 320 V 560 H 560",
    "M 100 -50 V 80 H 280",
    "M 600 -50 V 140 H 480 V 320",
  ];

  const nodes = [
    [200, 120], [420, 260], [150, 340], [380, 180], [650, 420],
    [320, 480], [280, 80], [480, 140], [560, 480], [900, 300],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-[0.18]"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#c9a227"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
          />
        ))}
        {nodes.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#e8c659"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6], scale: 1 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.12 }}
          />
        ))}
      </svg>
      {/* Vinheta para garantir contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void" />
      <div className="absolute inset-0 bg-radial-vignette" />
    </div>
  );
}
