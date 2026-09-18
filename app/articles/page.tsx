import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Professional articles on security operations, CCTV monitoring, control room operations, incident reporting and safety, written by Tallat Hussain.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <p className="font-mono text-xs text-slate">
            <Link href="/" className="focus-ring hover:text-ink">
              Home
            </Link>{" "}
            / Articles
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">
            Articles
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            Notes on security operations from {site.name}, covering CCTV
            monitoring, control room operations, incident reporting, access
            control, fire alarm response and AI-assisted productivity.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="focus-ring group flex h-full flex-col justify-between border border-slateline bg-paper p-6 transition-colors hover:border-steel"
              >
                <div>
                  <p className="font-mono text-xs text-slate">
                    {article.dateLabel}
                  </p>
                  <h2 className="mt-3 font-serif text-lg font-semibold leading-snug text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {article.summary}
                  </p>
                </div>
                <span className="mt-6 text-sm font-medium text-steel underline decoration-steel/30 underline-offset-4 group-hover:decoration-steel">
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
