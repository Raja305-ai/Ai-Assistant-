import { skillGroups } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="Skills"
            description="Grouped by area — from hands-on monitoring to the reporting and technology skills that support it."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-slateline bg-slateline sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 60}>
              <div className="h-full bg-paper p-7">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-sm border border-slateline px-3 py-1.5 text-xs text-ink/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
