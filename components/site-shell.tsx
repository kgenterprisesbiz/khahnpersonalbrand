import Link from "next/link";
const links = [
  ["About", "/about"],
  ["Speaking", "/speaking"],
  ["Media & Press", "/media"],
  ["Expertise", "/expertise"],
  ["Contact", "/contact"],
];
const footerLinks = [...links.slice(0, 4), ["Media Kit", "/media-kit"], links[4]];
function BrandMark() {
  return (
    <img
      className="brand-image"
      src="/dr-khanh-nguyen-logo.png"
      alt="Dr. Khanh Nguyen"
    />
  );
}
export function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link
          href="/"
          className="brand-logo"
          aria-label="Dr. Khanh Nguyen home"
        >
          <BrandMark />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link className="button small" href="/contact?type=speaking">
            Book Me
          </Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link className="button small" href="/contact?type=speaking">
              Book Me
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link href="/" className="brand-logo footer-brand">
            <BrandMark />
          </Link>
          <p>
            Longevity and regenerative medicine expert, SSRP Fellow, and
            national speaker.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Connect</h3>
          <a
            href="https://www.linkedin.com/in/khanh-nguyen-md-9b9b11243"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://austinregen.com">
            For patient care, visit Austin Regenerative Therapy →
          </a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Dr. Khanh Nguyen, MD. All rights reserved.
      </div>
    </footer>
  );
}
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export function CTA() {
  return (
    <section className="cta-band">
      <p className="eyebrow">Bring the conversation to your audience</p>
      <h2>
        Medicine is changing.
        <br />
        Let’s talk about where it’s going.
      </h2>
      <div className="button-row">
        <Link className="button light" href="/contact?type=speaking">
          Book Me to Speak
        </Link>
        <Link className="text-link light" href="/contact?type=media">
          Invite Me on Your Podcast →
        </Link>
      </div>
    </section>
  );
}
