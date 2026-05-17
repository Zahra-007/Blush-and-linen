import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const reader = createReader(process.cwd(), keystaticConfig);
  const post = await reader.collections.posts.read(slug);
  if (!post) return { title: "Post Not Found | Blush and Linen" };
  return {
    title: `${post.title} | Blush and Linen Blog`,
    description: `Read ${post.title} on the Blush & Linen wellness journal.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const reader = createReader(process.cwd(), keystaticConfig);
  const post = await reader.collections.posts.read(slug);

  if (!post) notFound();

  // Render the markdoc content nodes to plain HTML
  const content = await post.content();

  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      {/* Back navigation */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-[#AFA69B] hover:text-[#2D2A26] font-semibold transition-colors"
        >
          <svg className="mr-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Journal
        </Link>
      </div>

      {/* Post header */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-12 pb-10 border-b border-[#F2ECE4]">
          {post.publishedDate && (
            <time className="text-[10px] uppercase tracking-[0.25em] text-[#AFA69B] font-sans font-semibold block mb-4">
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          <h1 className="font-serif text-4xl md:text-5xl text-[#2D2A26] leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Post body — rendered markdoc */}
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[#2D2A26] prose-p:text-[#6B6560] prose-p:font-sans prose-a:text-[#C89D96] prose-li:text-[#6B6560] max-w-none">
          {content.map((node: any, i: number) => {
            if (node.type === "paragraph") {
              return (
                <p key={i}>
                  {node.children?.map((c: any, j: number) => c.text || "").join("")}
                </p>
              );
            }
            if (node.type === "heading") {
              const text = node.children?.map((c: any) => c.text || "").join("");
              if (node.level === 2) return <h2 key={i}>{text}</h2>;
              if (node.level === 3) return <h3 key={i}>{text}</h3>;
              return <h4 key={i}>{text}</h4>;
            }
            return null;
          })}
        </div>
      </article>
    </main>
  );
}
