import Link from "next/link";
import { CTA, Shell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { BrandSignal } from "@/components/brand-signal";
const conversations = [
  [
    "Optimization Academy × ISSCA",
    "Root-Cause Cellular Medicine, Safety & Personalization",
    "/media#optimization-academy",
  ],
  [
    "The Dr. Pompa Podcast",
    "Plasma Exchange, V Cells & Anti-Aging Peptides",
    "/media#dr-pompa",
  ],
  [
    "Longevity Optimization",
    "The Blood Swap: Why Doctors Are Replacing Your Plasma",
    "/media#longevity-optimization",
  ],
];
const steps = [
  [
    "01",
    "Ask what is driving the problem",
    "Look beyond symptoms to understand what is happening at the cellular and whole-person level.",
  ],
  [
    "02",
    "Strengthen the foundation",
    "Address sleep, nutrition, movement, stress, hormones, metabolism, and the factors that determine whether treatment can work.",
  ],
  [
    "03",
    "Sequence what comes next",
    "Choose therapies based on the individual, the evidence, and the right order—not a one-size-fits-all protocol.",
  ],
];
export default function Home() {
  return (
    <Shell>
      <main>
        <BrandSignal />
        <section className="hero">
          <img
            src="/dr-khanh-hero.jpg"
            alt="Dr. Khanh Nguyen standing confidently in her Austin clinic"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light">
              Physician · Regenerative Medicine Pioneer · Speaker
            </p>
            <h1>
              <span>
                Regenerative Medicine, <em>Redefined.</em>
              </span>
              <span className="hero-subhead">
                The Science of Living Better, Longer.
              </span>
            </h1>
            <p className="hero-copy">
              Dr. Khanh Nguyen helps patients and audiences understand what
              regenerative medicine can—and cannot—do, so they can make smarter
              decisions about how they feel, heal, and age.
            </p>
            <div className="button-row">
              <Link className="button light" href="/contact?type=speaking">
                Invite Dr. Nguyen to Speak
              </Link>
            </div>
          </div>
          <span className="vertical-note">AUSTIN · TEXAS</span>
        </section>
        <section className="press-strip">
          <span>Featured conversations</span>
          <div>
            <b>BEN GREENFIELD LIFE</b>
            <b>THE DR. POMPA PODCAST</b>
            <b>LONGEVITY OPTIMIZATION</b>
            <b>IN HEELS</b>
            <b>ISSCA</b>
            <b>SSRP</b>
          </div>
        </section>
        <section className="clarity section">
          <Reveal>
            <p className="eyebrow">A clearer way forward</p>
            <h2>
              Longevity medicine is moving fast.
              <br />
              <em>Your decisions deserve more than hype.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              The promises are everywhere. The clarity? Not so much. Dr. Nguyen
              brings decades of medical training, firsthand clinical experience,
              and honest perspective to a better starting question: what is
              causing the body—and the cell—to struggle in the first place?
            </p>
            <Link className="text-link" href="/about">
              Meet Dr. Nguyen →
            </Link>
          </Reveal>
        </section>
        <section className="guide-steps section">
          <p className="eyebrow">Her approach</p>
          <div className="topic-grid">
            {steps.map((s, i) => (
              <Reveal key={s[0]} className="topic-card" delay={i * 0.08}>
                <span>{s[0]}</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="clarity section philosophy-statement">
          <Reveal>
            <p className="eyebrow">Foundation before intervention</p>
            <h2>
              Advanced medicine works best
              <br />
              <em>when the fundamentals work with it.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Sleep, nutrition, movement, stress, metabolic health, hormones,
              and human connection are not the boring part of longevity
              medicine. They create the conditions that allow everything else
              to matter.
            </p>
          </Reveal>
        </section>
        <section className="story-split section">
          <Reveal className="story-statement">
            <span>Where lived experience</span>
            <em>meets medical expertise.</em>
          </Reveal>
          <Reveal className="story-copy" delay={0.1}>
            <p className="eyebrow">Why this work is personal</p>
            <h2>
              <span>She knows what it means</span>
              <em>to begin again.</em>
            </h2>
            <p>
              At 13, Khanh Nguyen escaped Vietnam by boat in search of freedom.
              She went on to become an ICU physician, faced burnout herself, and
              ultimately built a new model of care focused on helping people
              function better for longer.
            </p>
            <Link className="text-link" href="/about">
              Read Her Full Story →
            </Link>
          </Reveal>
        </section>
        <section className="featured section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Listen & watch</p>
              <h2>
                Where science meets
                <br />
                <em>real conversation.</em>
              </h2>
            </div>
            <Link className="text-link" href="/media">
              View All Media →
            </Link>
          </div>
          <div className="featured-grid">
            {conversations.map((c, i) => (
              <Reveal className="feature-card" key={c[0]} delay={i * 0.08}>
                <div className="feature-index">0{i + 1}</div>
                <p>{c[0]}</p>
                <h3>{c[1]}</h3>
                <Link href={c[2]}>Watch the interview →</Link>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="patient-care-band section">
          <div>
            <p className="eyebrow">Patient care</p>
            <h2>Looking for personalized regenerative care?</h2>
          </div>
          <div>
            <p>
              Explore concierge regenerative and longevity care at Austin
              Regenerative Therapy.
            </p>
            <a
              className="text-link"
              href="https://austinregen.com/schedule-an-appointment/"
            >
              Visit Austin Regenerative Therapy →
            </a>
          </div>
        </section>
        <section className="credentials">
          <p className="eyebrow">Training & affiliations</p>
          <div>
            {[
              "Rush Medical College · MD",
              "ABIM · Internal Medicine",
              "Critical Care · Fellowship",
              "A4M · Board Certified",
              "ISSCA · Faculty",
              "SSRP · Fellow & Faculty",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}
