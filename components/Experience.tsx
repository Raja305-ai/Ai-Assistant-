import { experience } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-paper2 py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="Professional experience"
            description="Roles and responsibilities across security operations. Employer names and dates are placeholders pending confirmation."
          />
        </ScrollReveal>

        <ol className="mt-14 space-y-0">
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <li className="relative border-t border-slateline py-9 first:border-t-0 md:py-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[10rem_1fr]">
                  <div className="flex items-start gap-4 md:block">
                    <span className="font-mono text-xs text-slate">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs text-slate md:mt-1 md:block">
                      {item.dates}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-steel">
                      {item.employer}
                    </p>
                    <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ink/80">
                      {item.summary}
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                      {item.duties.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-slate"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
