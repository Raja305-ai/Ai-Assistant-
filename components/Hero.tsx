import Image from "next/image";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-charcoal text-paper"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FAF9F5 1px, transparent 1px), linear-gradient(to bottom, #FAF9F5 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-10 md:pb-0 md:pt-16 lg:pt-20">
        <div className="animate-fade-up [animation-delay:80ms] opacity-0 [animation-fill-mode:forwards] order-2 md:order-1">
          <p className="font-mono text-xs tracking-wide text-steellight">
            Security Operations · CCTV · Control Room
          </p>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl lg:text-[3.4rem]">
            {site.name}
          </h1>

          <p className="mt-4 max-w-lg text-lg text-paper/75">
            {site.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70">
            {site.shortBio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="focus-ring rounded-sm bg-paper px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-paper/90"
            >
              View my experience
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-sm border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60"
            >
              Contact me
            </a>
            <a
              href="#skills"
              className="focus-ring px-1 py-3 text-sm font-medium text-steellight underline decoration-steellight/40 underline-offset-4 transition-colors hover:text-paper"
            >
              View my skills
            </a>
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-sm border border-paper/10"
            />
            <div className="relative aspect-[760/1398] w-full overflow-hidden rounded-sm bg-gradient-to-b from-charcoal2 to-charcoal shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/tallat-hussain-hero.png"
                alt="Tallat Hussain — Security Operations Professional"
                fill
                priority
                sizes="(min-width: 768px) 400px, 320px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="h-10 border-t border-paper/10 md:h-14" />
      </div>
    </section>
  );
}
