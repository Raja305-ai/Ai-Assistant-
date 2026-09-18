import { projects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            description="Personal projects connecting operations experience with an interest in AI and software."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 60}>
              <div className="flex h-full flex-col border border-slateline p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-sm border border-slateline px-2.5 py-1 text-[0.7rem] font-medium text-slate">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-ink/75"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel"
                      />
                      {point}
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
