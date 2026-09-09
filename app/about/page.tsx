import type { Metadata } from "next";
import { CTA, Shell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
export const metadata: Metadata = {
  title: "Her Story — Dr. Khanh Nguyen, MD",
  description:
    "Dr. Khanh Nguyen is a longevity and regenerative medicine expert, founder of Austin Regenerative Therapy, and SSRP Fellow with 20+ years in hospital-based critical care.",
};
const milestones = [
  ["1982", "Arrived in the United States"],
  ["USC", "Biology degree"],
  ["RUSH", "Medical degree"],
  ["2018", "Founded Austin Regenerative Therapy"],
  ["TODAY", "SSRP Fellow, faculty & national media voice"],
];
export default function About() {
  return (
    <Shell>
      <main>
        <section className="page-hero photo about-hero">
          <img
            src="/dr-khanh-about.jpg"
            alt="Dr. Khanh Nguyen in a bright consultation room at Austin Regenerative Therapy"
          />
          <div>
            <h1>
              <span>When Medicine Becomes Personal,</span>
              <span>You Start Searching for</span>
              <em>Better Answers.</em>
            </h1>
          </div>
        </section>
        <article className="narrative section">
          <Reveal>
            <p className="dropcap">
              In 1982, at 13 years old, Khanh Nguyen climbed onto a boat leaving
              Saigon. She was searching for freedom before she was old enough to
              fully understand what freedom would ask of her.
            </p>
            <p>
              Starting over in the United States meant learning a new language,
              a new culture, and a new definition of possibility. It also
              planted something lasting: a refusal to take time—or health—for
              granted.
            </p>
            <p>
              She earned her biology degree at USC, then her medical degree from
              Rush Medical College. Internal medicine and critical care
              followed. For more than 20 years, she worked in hospital-based
              critical care, meeting people at the sharpest edge of illness.
            </p>
          </Reveal>
          <blockquote>
            “My goal isn’t to promise youth—it’s to help your body function
            better, for longer.”
          </blockquote>
          <Reveal>
            <p>
              Eventually, healing became deeply personal. Dr. Nguyen faced her
              own autoimmune illness while caring for a son with a rare
              neurological condition. Those experiences pushed her to ask a
              question crisis medicine rarely has time to explore: what if we
              could act earlier, work at the cellular level, and help the body
              function better before illness takes over?
            </p>
            <p>
              The answer led her beyond crisis care and into regenerative and
              longevity medicine. In 2018, she founded Austin Regenerative
              Therapy, creating the kind of practice she wished more patients
              could find—one built on evidence, curiosity, and the courage to
              look deeper. Her concierge approach combines personalized
              diagnostics, hormone optimization, and functional strategies with
              peptide therapy and regenerative modalities including Young Plasma
              Exchange, VSEL stem cells, exosomes, and NAD+.
            </p>
            <p>
              Her work targets the Hallmarks of Aging with one practical goal:
              helping patients extend vitality, performance, and healthspan.
              Today, Dr. Nguyen is a proud SSRP Fellow, national speaker,
              faculty member, and advocate for whole-person, future-forward
              health. She brings discernment to the hype, humanity to the
              science, and a survivor’s understanding of what it means to begin
              again.
            </p>
          </Reveal>
        </article>
        <section className="timeline section">
          <p className="eyebrow">The road here</p>
          <div>
            {milestones.map(([year, text]) => (
              <div key={year}>
                <b>{year}</b>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}
