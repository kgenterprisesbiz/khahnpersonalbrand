import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Speaking — Book Dr. Khanh Nguyen for Your Event",
  description:
    "Book Dr. Khanh Nguyen for keynotes, panels, medical conferences, and expert conversations on regenerative medicine, longevity, peptides, and resilience.",
};

const topics = [
  [
    "What Makes the Cell Fail?",
    "The question that moved Dr. Nguyen from crisis medicine to root-cause, regenerative care—and why better health decisions begin by looking upstream.",
  ],
  [
    "Plasma Exchange & Healthspan",
    "A clear look at therapeutic plasma exchange and young plasma: where the science stands, how the protocols differ, and what patients should ask.",
  ],
  [
    "Peptides & Personalized Medicine",
    "How biomarkers, pathways, and individual goals can inform a more precise—and more responsible—approach to peptide therapy.",
  ],
  [
    "The Right Therapy, in the Right Sequence",
    "Why regenerative medicine should begin with the patient’s biology, foundational health, and goals—not the treatment dominating the conversation.",
  ],
  [
    "From Burnout to Reinvention",
    "An ICU physician’s candid account of burnout, autoimmune illness, and building a new model of medicine and life.",
  ],
  [
    "Hormones, Women & Longevity",
    "A practical conversation about hormonal change, energy, sexual health, and helping women feel like themselves through every decade.",
  ],
];

const engagements = [
  [
    "ISSCA Peptide World Conference",
    "Speaker · Lima, Peru",
    "May 2026",
    "https://issca.com/events/peptide-world-conference",
  ],
  [
    "Peptide World Congress",
    "SSRP Faculty Panel",
    "2026",
    "https://ssrpinstitute.org/courses/peptide-world-congress-2026/",
  ],
  [
    "International Regenerative Medicine Conference",
    "ISSCA Speaker · Lima, Peru",
    "2025",
    "https://issca.com/events/international-regenerative-medicine-conference-peru-2025",
  ],
  [
    "Advanced Peptide Certification",
    "ISSCA Faculty · San Juan, Puerto Rico",
    "2025",
    "https://www.issca.com/events/advanced-peptide-certification-puerto-rico-2025/",
  ],
  [
    "Peptide Therapy Certification",
    "SSRP Course Faculty",
    "2025",
    "https://ssrpinstitute.org/courses/peptide-therapy-certification-2025/",
  ],
  [
    "SSRP Institute",
    "Standing Faculty & Fellow",
    "Current",
    "https://ssrpinstitute.org/faculty/",
  ],
];

const bookingReasons = [
  [
    "Makes emerging science understandable",
    "She translates fast-moving research into language the room can follow—without watering it down.",
  ],
  [
    "Handles controversial subjects responsibly",
    "She separates evidence from excitement and speaks candidly about risks, limitations, and unanswered questions.",
  ],
  [
    "Brings both clinical and personal perspective",
    "Her point of view is shaped by critical care, her own health journey, and the realities patients face beyond the research.",
  ],
  [
    "Meets the audience where they are",
    "She adapts for medical, consumer, leadership, and women’s-health audiences without losing clarity or credibility.",
  ],
  [
    "Leaves people with a useful next step",
    "Audiences leave with sharper questions, practical takeaways, and a more informed way to evaluate what comes next.",
  ],
];

export default function Speaking() {
  return (
    <Shell>
      <main>
        <section className="simple-hero speaking-hero">
          <img
            src="/dr-khanh-media-hero.jpg"
            alt="Dr. Khanh Nguyen speaking at an international medical conference"
          />
          <div className="speaking-hero-shade" />
          <div className="speaking-hero-content">
            <p className="eyebrow light">Speaking</p>
            <h1>
              <span>A leading expert in</span>
              <em>regenerative &</em>
              <em>longevity medicine.</em>
            </h1>
            <p className="speaking-hero-copy">
              Dr. Khanh Nguyen shares the science, ethics, and future of
              regenerative medicine with audiences around the world—making
              complex ideas clear, credible, and deeply human.
            </p>
            <div className="button-row speaking-hero-actions">
              <Link className="button light" href="/contact?type=speaking">
                Book Dr. Nguyen
              </Link>
              <a className="text-link light" href="/dr-khanh-nguyen-speaker-media-kit.pdf" download>
                Download Media Kit →
              </a>
            </div>
          </div>
        </section>
        <section className="topics section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Signature topics</p>
              <h2>Built for curious audiences</h2>
            </div>
          </div>
          <div className="topic-grid six">
            {topics.map((topic, i) => (
              <Reveal
                key={topic[0]}
                className="topic-card"
                delay={(i % 3) * 0.08}
              >
                <span>0{i + 1}</span>
                <h2>{topic[0]}</h2>
                <p>{topic[1]}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="why-book-speaker">
          <div className="why-book-intro">
            <p className="eyebrow light">Why book Dr. Nguyen?</p>
            <h2>
              The right expert does more than
              <br />
              <em>know the science.</em>
            </h2>
            <p>
              She helps people understand why it matters—and what to do with
              that understanding when they leave the room.
            </p>
            <Link className="text-link light" href="/contact?type=speaking">
              Discuss your audience →
            </Link>
          </div>
          <div className="why-book-reasons">
            {bookingReasons.map(([title, description], i) => (
              <Reveal className="why-book-reason" key={title} delay={i * 0.05}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="reel section" id="speaker-video">
          <div>
            <p className="eyebrow">In conversation</p>
            <h2>
              Clear. Candid.
              <br />
              <em>Never canned.</em>
            </h2>
            <p>
              Recorded at ISSCA 124 in Buenos Aires, Dr. Nguyen joins Dr. Greg
              Jones to discuss root-cause cellular medicine, treatment
              sequencing, safety, and personalization.
            </p>
          </div>
          <div className="speaking-player">
            <iframe
              src="https://www.youtube-nocookie.com/embed/1BqNfMgYhGQ"
              title="Optimization Academy × ISSCA with Dr. Khanh Nguyen"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
        <section className="section engagement-library">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected engagements</p>
              <h2>On stage & in the classroom</h2>
            </div>
          </div>
          <div className="engagement-list">
            {engagements.map((item, i) => (
              <Reveal
                className="engagement-row"
                key={item[0]}
                delay={(i % 3) * 0.05}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </div>
                <time>{item[2]}</time>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="cta-band">
          <p className="eyebrow">Bring Dr. Nguyen to your event</p>
          <h2>
            Give your audience a conversation
            <br />
            they’ll still be having tomorrow.
          </h2>
          <div className="button-row">
            <Link className="button light" href="/contact?type=speaking">
              Check Availability
            </Link>
            <a className="text-link light" href="/dr-khanh-nguyen-speaker-media-kit.pdf" download>
              Download Media Kit →
            </a>
          </div>
        </section>
      </main>
    </Shell>
  );
}
