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
          <Reveal className="patient-one-feature">
            <div className="patient-one-index"><span>01</span><i /></div>
            <div>
              <p className="eyebrow light">Patient number one</p>
              <h2>Curiosity, tested<br /><em>against responsibility.</em></h2>
              <p>Before an approach enters her practice, Dr. Nguyen studies the mechanism, weighs the evidence and its limits, and experiences the process personally. New is not enough. Impressive is not enough. It must make sense, meet her safety standard, and belong in the right sequence.</p>
            </div>
            <aside><span>Her adoption standard</span><b>Mechanism</b><b>Evidence</b><b>Safety</b><b>Sequence</b></aside>
          </Reveal>
          <Reveal>
            <p>
              Eventually, healing became deeply personal. Dr. Nguyen faced her
              own autoimmune illness while caring for a son with a rare
              neurological condition. Those experiences pushed her to ask a
              question crisis medicine rarely has time to explore: what made
              the cell fail in the first place? She stopped looking only at the
              diagnosis and began looking upstream at the conditions that allow
              the body to heal, repair, and adapt.
            </p>
            <p>
              That shift led her beyond crisis care and into regenerative and
              longevity medicine. In 2018, she founded Austin Regenerative
              Therapy, creating the kind of practice she wished more patients
              could find—one built on evidence, curiosity, and the courage to
              look deeper. She begins with the person, not the product: their
              biology, history, goals, and foundational health. Only then does
              she determine which therapies belong in the plan and in what
              sequence.
            </p>
            <p>
              Her approach may include personalized diagnostics, lifestyle and
              metabolic strategies, hormone optimization, peptides, Young
              Plasma Exchange, VSEL stem cells, exosomes, and NAD+. The tools
              may be advanced, but the goal is grounded: targeting the Hallmarks
              of Aging to help patients extend vitality, performance, and
              healthspan.
            </p>
            <p>
              Education is part of the care. Dr. Nguyen wants patients to
              understand the reasoning, evidence, limitations, and alternatives
              behind a recommendation so they can participate meaningfully in
              decisions about their health. Today, she is a proud SSRP Fellow,
              national speaker, faculty member, and advocate for whole-person,
              future-forward health. She brings discernment to the hype,
              humanity to the science, and a survivor’s understanding of what
              it means to begin again.
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
