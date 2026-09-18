import Link from "next/link";
import { articles } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Articles() {
  return (
    <section id="articles" className="bg-paper2 py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="Professional articles"
            description="Notes on security operations, written from experience rather than theory."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 50}>
              <Link
                href={`/articles/${article.slug}`}
                className="focus-ring group flex h-full flex-col justify-between border border-slateline bg-paper p-6 transition-colors hover:border-steel"
              >
                <div>
                  <p className="font-mono text-xs text-slate">
                    {article.dateLabel}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {article.summary}
                  </p>
                </div>
                <span className="mt-6 text-sm font-medium text-steel underline decoration-steel/30 underline-offset-4 group-hover:decoration-steel">
                  Read more
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
