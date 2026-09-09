import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/site-shell";
import { expertisePosts, getExpertisePost } from "@/lib/expertise-posts";
import { EvidenceLens } from "@/components/evidence-lens";

type PageProps={params:Promise<{slug:string}>};
export function generateStaticParams(){return expertisePosts.map(({slug})=>({slug}));}
export async function generateMetadata({params}:PageProps):Promise<Metadata>{const {slug}=await params;const post=getExpertisePost(slug);return post?{title:`${post.title} — Dr. Khanh Nguyen`,description:post.dek}:{};}

export default async function ExpertiseArticle({params}:PageProps){
  const {slug}=await params;const post=getExpertisePost(slug);if(!post)notFound();
  const current=expertisePosts.findIndex(item=>item.slug===slug);const next=expertisePosts[(current+1)%expertisePosts.length];
  return <Shell><main className="expertise-reading-page">
    <header className="expertise-article-hero"><Link href="/expertise">← Expertise</Link><p className="eyebrow light">{post.category} · {post.readTime} read</p><h1>{post.title}</h1><p>{post.dek}</p></header>
    <EvidenceLens lens={post.lens} />
    <article className="expertise-article-body">
      <aside><p className="eyebrow">The point of view</p><blockquote>{post.perspective}</blockquote><div><b>Dr. Khanh Nguyen, MD</b><span>Physician · Regenerative medicine expert</span></div></aside>
      <div className="expertise-article-copy">{post.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
        {post.sources&&<section className="expertise-sources"><p className="eyebrow">Read the source material</p>{post.sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</section>}
        <p className="expertise-disclaimer">This commentary is for education only and is not personal medical advice. Treatment decisions should be made with a qualified clinician who understands your history and circumstances.</p>
      </div>
    </article>
    <nav className="expertise-next"><Link href="/expertise">← All expertise</Link><Link href={`/expertise/${next.slug}`}><span>Read next</span>{next.title} →</Link></nav>
  </main></Shell>;
}
