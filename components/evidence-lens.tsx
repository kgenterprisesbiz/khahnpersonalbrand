"use client";

import { motion } from "framer-motion";

export type EvidenceLensData = {
  established: string;
  emerging: string;
  unknown: string;
  ask: string;
};

export function EvidenceLens({ lens }: { lens: EvidenceLensData }) {
  const items = [
    ["Established", lens.established],
    ["Emerging", lens.emerging],
    ["Not yet known", lens.unknown],
    ["Ask before acting", lens.ask],
  ];

  return (
    <section className="evidence-lens" aria-labelledby="evidence-lens-title">
      <header>
        <p className="eyebrow light">The Evidence Lens</p>
        <h2 id="evidence-lens-title">What we know.<br /><em>What we still need to learn.</em></h2>
      </header>
      <div>
        {items.map(([label, copy], index) => (
          <motion.article
            key={label}
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          >
            <span>0{index + 1}</span><h3>{label}</h3><p>{copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
