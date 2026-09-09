"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function BrandSignal() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.35,
  });

  return (
    <div className="brand-signal" aria-hidden="true">
      <svg viewBox="0 0 24 1000" preserveAspectRatio="none">
        <path className="signal-ghost" d="M12 0V175C12 215 3 226 3 270S21 330 21 380 12 460 12 515 3 585 3 640 21 700 21 755 12 840 12 1000" />
        <motion.path
          className="signal-live"
          d="M12 0V175C12 215 3 226 3 270S21 330 21 380 12 460 12 515 3 585 3 640 21 700 21 755 12 840 12 1000"
          style={{ pathLength }}
        />
      </svg>
      <motion.span
        className="signal-pulse"
        animate={{ scale: [0.72, 1.25, 0.72], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
