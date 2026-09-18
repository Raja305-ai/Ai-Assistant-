import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, site } from "@/lib/data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
    },
  };
}

function ArticleJsonLd({ article }: { article: (typeof articles)[number] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Person",
      name: site.name,
    },
    url: `${site.domain}/articles/${article.slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BreadcrumbJsonLd({ article }: { article: (typeof articles)[number] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${site.domain}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${site.domain}/articles/${article.slug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <ArticleJsonLd article={article} />
      <BreadcrumbJsonLd article={article} />
      <Header />
      <main className="bg-paper py-20 md:py-28">
        <article className="mx-auto max-w-prose px-6 md:px-10">
          <p className="font-mono text-xs text-slate">
            <Link href="/" className="focus-ring hover:text-ink">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/articles" className="focus-ring hover:text-ink">
              Articles
            </Link>{" "}
            / {article.title}
          </p>

          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-slate">
            {article.dateLabel} · {site.name}
          </p>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        {related.length ? (
          <div className="mx-auto mt-20 max-w-content px-6 md:px-10">
            <h2 className="font-serif text-xl font-semibold text-ink">
              More articles
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/articles/${r.slug}`}
                  className="focus-ring border border-slateline p-5 transition-colors hover:border-steel"
                >
                  <h3 className="font-serif text-base font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
