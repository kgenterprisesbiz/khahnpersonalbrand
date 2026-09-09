import type { Metadata } from "next";
import { ContactSelector } from "@/components/contact-selector";
import { Shell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Book Dr. Khanh Nguyen — Speaking, Media & Consults",
  description: "Book Dr. Khanh Nguyen for a speaking engagement, podcast interview, or medical consultation.",
};

export default function Contact() {
  return <Shell><main>
    <section className="simple-hero media-hero contact-hero">
      <img
        src="/dr-khanh-contact-hero.jpg"
        alt="Dr. Khanh Nguyen in a podcast interview with Dr. Daniel Pompa"
      />
      <div className="media-hero-shade" />
      <div className="media-hero-content">
        <p className="eyebrow light">Let’s work together</p>
        <h1><span>Bring the right expertise</span><em>into the conversation.</em></h1>
        <p className="media-hero-copy">Book Dr. Nguyen for a keynote, podcast interview, media appearance, or expert conversation.</p>
      </div>
    </section>
    <section className="section contact-section"><ContactSelector /></section>
  </main></Shell>;
}
