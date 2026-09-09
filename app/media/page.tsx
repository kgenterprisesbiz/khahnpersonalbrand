import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { pressFeatures } from "@/lib/press-features";

export const metadata: Metadata = {
  title: "Media & Press — Dr. Khanh Nguyen, MD",
  description:
    "Verified podcast interviews, video appearances, and press features with Dr. Khanh Nguyen, founder of Austin Regenerative Therapy.",
};

const interviews = [
  {
    show: "Optimization Academy",
    title: "Optimization Academy × ISSCA",
    tag: "Video podcast · August 2026",
    slug: "optimization-academy",
    videoId: "1BqNfMgYhGQ",
  },
  {
    show: "The Dr. Pompa Podcast",
    title: "Plasma Exchange, V Cells & Anti-Aging Peptides",
    tag: "Podcast · July 2026",
    slug: "dr-pompa",
    videoId: "4ycREvAJ94s",
  },
  {
    show: "In Heels with Keni Silva",
    title: "Longevity, Reinvention & Redefining Aging",
    tag: "Podcast · May 2026",
    slug: "in-heels",
    videoId: "c3GEvkBHNWw",
  },
  {
    show: "Ben Greenfield Life",
    title: "Salmon Sperm Facials & Stem Cell Secrets",
    tag: "Podcast · January 2026",
    slug: "ben-greenfield-2026",
    videoId: "5kLT9lbKD4A",
  },
  {
    show: "Longevity Optimization",
    title: "The Blood Swap: Why Doctors Are Replacing Your Plasma",
    tag: "Podcast · January 2026",
    slug: "longevity-optimization",
    videoId: "2tgylBGAtiY",
  },
  {
    show: "Doctor Warrick Bishop",
    title: "Talking Anti-Aging Medicine — Part 1",
    tag: "Podcast · January 2026",
    slug: "warrick-bishop",
    videoId: "gob26eWpRGA",
  },
  {
    show: "Ben Greenfield Life",
    title: "A 3-Day Regenerative Biohack with Dr. Khanh Nguyen",
    tag: "Podcast · May 2025",
    slug: "ben-greenfield-2025",
    videoId: "7KQ6JV9r9z0",
  },
  {
    show: "Austin Regenerative Therapy",
    title: "Unlocking the Body’s Healing Code",
    tag: "Expert conversation · May 2025",
    slug: "healing-code",
    videoId: "i51Ztt8sS-E",
  },
];

export default function Media() {
  return (
    <Shell>
      <main>
        <section className="simple-hero media-hero">
          <img
            src="/dr-khanh-speaking-hero.jpg"
            alt="Dr. Khanh Nguyen in an editorial interview setting"
          />
          <div className="media-hero-shade" />
          <div className="media-hero-content">
            <p className="eyebrow light">Media & press</p>
            <h1>
              <span>Leading the conversation on</span>
              <em>regenerative & longevity medicine.</em>
            </h1>
            <p className="media-hero-copy">
              Explore Dr. Nguyen’s podcast interviews, expert conversations,
              and media features on the science, ethics, and future of living
              better for longer.
            </p>
            <div className="button-row speaking-hero-actions">
              <a className="button light" href="/dr-khanh-nguyen-speaker-media-kit.pdf" download>
                Download Media Kit
              </a>
              <Link className="text-link light" href="/media-kit">
                View Kit Online →
              </Link>
            </div>
          </div>
        </section>
        <section className="section media-library">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Listen & watch</p>
              <h2>Featured conversations</h2>
            </div>
            <p className="inventory-note">Verified appearances · 2018–2026</p>
          </div>
          <div className="media-grid">
            {interviews.map((item, i) => (
              <Reveal
                className="media-card"
                key={item.title}
                delay={(i % 2) * 0.08}
              >
                <div className="media-player" id={item.slug}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.videoId}`}
                    title={`${item.show}: ${item.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p>
                  {item.tag} · {item.show}
                </p>
                <h2>{item.title}</h2>
                <span className="watch-here">
                  Watch the full conversation here
                </span>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section press-library">
          <div className="section-heading">
            <div>
              <p className="eyebrow">In the press</p>
              <h2>Profiles & features</h2>
            </div>
          </div>
          <div className="press-list">
            {pressFeatures.map((item, i) => (
              <Reveal
                className="press-row"
                key={item.title}
                delay={(i % 3) * 0.05}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p>
                    {item.publication} · {item.date}
                  </p>
                  <h3>{item.title}</h3>
                </div>
                <Link
                  href={`/media/${item.slug}`}
                  aria-label={`Read ${item.title}`}
                >
                  Read notes →
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="press-feature section">
          <div>
            <p className="eyebrow">For editors & producers</p>
            <h2>
              Need the bio, the headshot,
              <br />
              <em>or the science?</em>
            </h2>
          </div>
          <div>
            <p>
              Approved headshots, short and long bios, credentials, interview
              topics, and planning details are ready in one place.
            </p>
            <Link className="button" href="/media-kit">
              Open Media Kit
            </Link>
          </div>
        </section>
        <section className="cta-band">
          <p className="eyebrow">Have a story in mind?</p>
          <h2>
            Let’s make the complicated
            <br />
            clear—and worth hearing.
          </h2>
          <Link className="button light" href="/contact?type=media">
            Pitch a Podcast or Story
          </Link>
        </section>
      </main>
    </Shell>
  );
}
