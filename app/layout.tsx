import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = site.domain;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Security Operations Professional & CCTV Operator`,
    template: `%s | ${site.name}`,
  },
  description: site.shortBio,
  keywords: [
    "Tallat Hussain",
    "Security Operations Professional",
    "CCTV Operator",
    "Security Supervisor",
    "Control Room Operations",
    "Access Control",
    "Incident Reporting",
    "Fire Safety",
    "Emergency Response",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.name} | Security Operations Professional & CCTV Operator`,
    description: site.shortBio,
    siteName: site.name,
    images: [
      {
        url: "/images/tallat-hussain-hero.png",
        width: 760,
        height: 1398,
        alt: `${site.name} — Security Operations Professional`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Security Operations Professional & CCTV Operator`,
    description: site.shortBio,
    images: ["/images/tallat-hussain-hero.png"],
  },
};

function PersonJsonLd() {
  const sameAs: string[] = [];
  if (site.linkedin && !site.linkedin.startsWith("[")) sameAs.push(site.linkedin);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    description: site.shortBio,
    jobTitle: site.role,
    image: `${siteUrl}/images/tallat-hussain-hero.png`,
    url: siteUrl,
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    inLanguage: "en",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <PersonJsonLd />
        <WebsiteJsonLd />
        {children}
        {GA_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
