import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-khanh-nguyen.kimgarstbiz.chatgpt.site"),
  title: "Dr. Khanh Nguyen, MD — Physician, Speaker & Regenerative Medicine Pioneer",
  description: "Dr. Khanh Nguyen is a physician, national speaker, and founder of Austin Regenerative Therapy. Book her for speaking, podcasts, or media interviews.",
  openGraph: { title: "Dr. Khanh Nguyen, MD", description: "Physician, speaker, and regenerative medicine pioneer.", images: ["/dr-khanh-nguyen.png"] },
  twitter: { card: "summary_large_image", images: ["/dr-khanh-nguyen.png"] },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Dr. Khanh Nguyen",jobTitle:"Physician and Regenerative Medicine Speaker",affiliation:{"@type":"Organization",name:"Austin Regenerative Therapy",url:"https://austinregen.com"}})}} />{children}</body>
    </html>
  );
}
