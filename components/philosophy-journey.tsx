"use client";

import { motion } from "framer-motion";

const principles = [
  ["01", "Ask a better question", "Look beyond the diagnosis to understand what is driving dysfunction at the cellular and whole-person level."],
  ["02", "See one connected body", "Sleep, stress, metabolism, hormones, nutrition, movement, and cellular signaling do not operate in isolation."],
  ["03", "Begin with the phenotype", "The person, their biology, history, testing, and goals come before any product or trending treatment."],
  ["04", "Build the foundation", "Advanced therapies cannot do their best work when the conditions around them continually undermine healing."],
  ["05", "Respect the sequence", "The right therapy at the wrong time—or in the wrong order—may produce less benefit and more disappointment."],
  ["06", "Make the patient a partner", "Clear education, honest limits, and shared decisions are not extras. They are part of responsible care."],
];

export function PhilosophyJourney() {
  return (
    <section className="philosophy-journey section" aria-labelledby="philosophy-title">
      <header>
        <p className="eyebrow light">How Dr. Nguyen thinks about medicine</p>
        <h2 id="philosophy-title">A philosophy<br /><em>before a treatment plan.</em></h2>
        <p>The body is not a collection of isolated parts. Her approach follows the signal—from the question, through the foundation, to the right next step.</p>
      </header>
      <div className="journey-track">
        <div className="journey-line" aria-hidden="true"><span /></div>
        {principles.map(([number, title, description], index) => (
          <motion.article
            className="journey-step"
            key={title}
            initial={{ opacity: 0.18, x: index % 2 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.62 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{number}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
