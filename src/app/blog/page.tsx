import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Blush and Linen",
  description: "Wellness tips, beauty guides, and expert aesthetic insights from Blush & Linen Spa.",
};

export default async function BlogPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const posts = await reader.collections.posts.all();

  // Sort by publishedDate descending
  const sorted = posts.sort((a, b) => {
    const dateA = a.entry.publishedDate ?? "";
    const dateB = b.entry.publishedDate ?? "";
    return dateB.localeCompare(dateA);
  });

  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      {/* Hero strip */}
      <section className="py-20 text-center bg-white border-b border-[#F2ECE4]">
        <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#AFA69B] font-semibold block mb-3">
          Our Journal
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-[#2D2A26]">
          Blush &amp; Linen Blog
        </h1>
        <p className="mt-4 font-sans text-[#6B6560] text-sm max-w-lg mx-auto">
          Wellness tips, beauty rituals, and expert insights — written for women who honour themselves.
        </p>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {sorted.length === 0 ? (
          <p className="text-center text-[#AFA69B] font-sans text-sm py-20">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#F2ECE4] flex flex-col"
              >
                {/* Placeholder image header */}
                <div className="h-44 bg-[#EDD9D4]/40 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C89D96]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M2 22C2 22 8 20 12 14C16 8 22 2 22 2" strokeLinecap="round"/>
                    <path d="M12 14C10.5 12 7 11 5 12C6.5 13.5 8 16 8 18C9.5 16.5 11 15 12 14Z" fill="#C89D96" fillOpacity="0.3"/>
                  </svg>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {post.entry.publishedDate && (
                    <time className="text-[10px] uppercase tracking-[0.2em] text-[#AFA69B] font-sans font-semibold mb-3 block">
                      {new Date(post.entry.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className="font-serif text-xl text-[#2D2A26] leading-snug mb-3 group-hover:text-[#C89D96] transition-colors duration-200">
                    {post.entry.title}
                  </h2>
                  <div className="mt-auto pt-4 flex items-center text-[11px] uppercase tracking-widest text-[#C89D96] font-semibold font-sans">
                    Read More
                    <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
