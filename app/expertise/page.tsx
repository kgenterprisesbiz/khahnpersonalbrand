import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { expertisePosts } from "@/lib/expertise-posts";

export const metadata: Metadata = {
  title: "Expertise — Dr. Khanh Nguyen, MD",
  description: "Physician-led perspective on regenerative medicine, longevity science, and what the evidence is ready to say.",
};

const pillars = [
  ["01", "Regenerative medicine", "Stem cells, exosomes, plasma-based therapies, and the line between possibility and proof."],
  ["02", "Peptides & hormones", "What these therapies are designed to do, where evidence differs, and why oversight matters."],
  ["03", "Longevity science", "The hallmarks of aging, healthspan, biomarkers, and the research shaping what comes next."],
  ["04", "Women’s health", "The physiology, transitions, and unanswered questions too often reduced to a generic protocol."],
  ["05", "Ethics & evidence", "How responsible clinicians discuss risk, regulation, uncertainty, and emerging treatment."],
  ["06", "The human side", "Personal perspective on resilience, burnout, reinvention, and practicing medicine differently."],
];

export default function Expertise() {
  const [featured, ...articles] = expertisePosts;
  return <Shell><main>
    <section className="simple-hero media-hero expertise-hero">
      <img src="/dr-khanh-expertise-hero.jpg" alt="Dr. Khanh Nguyen at a peptide science conference" />
      <div className="media-hero-shade" />
      <div className="media-hero-content">
        <p className="eyebrow light">Expertise</p>
        <h1><span>The science is moving quickly.</span><em>Here’s what’s worth knowing.</em></h1>
        <p className="media-hero-copy">Clear, physician-led perspective on regenerative medicine, longevity science, and what the evidence is—and is not—ready to say.</p>
      </div>
    </section>
    <section className="expertise-manifesto section">
      <div><p className="eyebrow">Her point of view</p><h2>Curious about what’s possible.<br/><em>Honest about what’s proven.</em></h2></div>
      <p>Regenerative medicine does not need more noise. It needs physicians willing to translate emerging science, name its limits, and help people ask better questions before they make consequential decisions.</p>
    </section>
    <section className="expertise-pillars section">
      <div className="section-heading"><div><p className="eyebrow">What she follows</p><h2>Six conversations shaping the field.</h2></div></div>
      <div className="expertise-pillar-grid">{pillars.map((pillar,index)=><Reveal className="expertise-pillar" key={pillar[1]} delay={(index%3)*.06}><span>{pillar[0]}</span><h3>{pillar[1]}</h3><p>{pillar[2]}</p></Reveal>)}</div>
    </section>
    <section className="expertise-library section">
      <div className="section-heading"><div><p className="eyebrow">Latest perspective</p><h2>Read beyond the headline.</h2></div><p className="inventory-note">Physician commentary · Sources included</p></div>
      <Reveal className="expertise-featured">
        <div><p>{featured.category} · {featured.readTime} read</p><h2><Link href={`/expertise/${featured.slug}`}>{featured.title}</Link></h2><blockquote>{featured.perspective}</blockquote></div>
        <div><p>{featured.dek}</p><Link className="button light" href={`/expertise/${featured.slug}`}>Read the Perspective</Link></div>
      </Reveal>
      <div className="expertise-article-list">{articles.map((article,index)=><Reveal className="expertise-article-row" key={article.slug} delay={(index%3)*.05}><span>{String(index+2).padStart(2,"0")}</span><div><p>{article.category} · {article.readTime} read</p><h3><Link href={`/expertise/${article.slug}`}>{article.title}</Link></h3><small>{article.dek}</small></div><Link href={`/expertise/${article.slug}`}>Read →</Link></Reveal>)}</div>
    </section>
    <section className="expertise-editorial-cta section"><p className="eyebrow light">For editors, producers & event planners</p><h2>Need a clear voice<br/><em>on complicated science?</em></h2><p>Dr. Nguyen brings physician-led context to the treatments, questions, and controversies shaping regenerative medicine.</p><Link className="button light" href="/contact?type=media">Start a Conversation</Link></section>
  </main></Shell>;
}
