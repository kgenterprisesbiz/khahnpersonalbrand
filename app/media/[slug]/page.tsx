import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/site-shell";
import { getPressFeature, pressFeatures } from "@/lib/press-features";

type PressFeaturePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pressFeatures.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PressFeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getPressFeature(slug);
  if (!feature) return {};
  return {
    title: `${feature.title} — Press Notes | Dr. Khanh Nguyen`,
    description: feature.summary,
  };
}

export default async function PressFeaturePage({ params }: PressFeaturePageProps) {
  const { slug } = await params;
  const feature = getPressFeature(slug);
  if (!feature) notFound();
  const index = pressFeatures.findIndex((item) => item.slug === slug);
  const next = pressFeatures[(index + 1) % pressFeatures.length];

  return (
    <Shell>
      <main className="press-notes-page">
        <header className="press-notes-hero">
          <div className="press-notes-rule" aria-hidden="true" />
          <div className="press-notes-heading">
            <p className="eyebrow light">Press notes · {feature.publication}</p>
            <h1>{feature.title}</h1>
            <p className="press-notes-dek">{feature.summary}</p>
          </div>
          <dl className="press-notes-meta">
            <div><dt>Publication</dt><dd>{feature.publication}</dd></div>
            <div><dt>Published</dt><dd>{feature.date}</dd></div>
            <div><dt>Format</dt><dd>{feature.format}</dd></div>
          </dl>
        </header>

        <article className="press-notes-body">
          <section className="press-notes-summary">
            <p className="eyebrow">The short read</p>
            <h2>What this feature<br /><em>is really about.</em></h2>
            <p>{feature.summary}</p>
          </section>

          <section className="press-takeaways">
            <div className="press-takeaways-heading">
              <p className="eyebrow">Key takeaways</p>
              <h2>The ideas<br />worth carrying forward.</h2>
            </div>
            <ol>
              {feature.takeaways.map((takeaway, takeawayIndex) => (
                <li key={takeaway}>
                  <span>{String(takeawayIndex + 1).padStart(2, "0")}</span>
                  <p>{takeaway}</p>
                </li>
              ))}
            </ol>
          </section>

          {feature.quote && (
            <blockquote className="press-pullquote">
              <p>“{feature.quote}”</p>
              <cite>{feature.quoteAttribution}</cite>
            </blockquote>
          )}

          <section className="press-source-card">
            <div>
              <p className="eyebrow light">Continue with the source</p>
              <h2>Read the original feature.</h2>
              <p>
                These press notes are a concise guide. The publication remains the
                definitive source for the complete story and its original context.
              </p>
            </div>
            <a className="button light" href={feature.sourceUrl} target="_blank" rel="noreferrer">
              Visit {feature.publication} ↗
            </a>
          </section>
        </article>

        <nav className="press-notes-next" aria-label="Press feature navigation">
          <Link href="/media">← All press & media</Link>
          <Link href={`/media/${next.slug}`}>
            <span>Read next</span>
            {next.title} →
          </Link>
        </nav>
      </main>
    </Shell>
  );
}
