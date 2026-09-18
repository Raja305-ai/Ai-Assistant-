import { certifications } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      id="training"
      className="bg-charcoal py-20 text-paper md:py-28"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="Training & certifications"
            description="Formal safety and operational training, current as of the last update to this page."
            light
          />
        </ScrollReveal>

        <div className="mt-12 divide-y divide-paper/10 border-y border-paper/10">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 70}>
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-serif text-lg text-paper">
                    {cert.name}
                  </p>
                  {cert.note ? (
                    <p className="mt-1 text-sm text-paper/55">{cert.note}</p>
                  ) : null}
                </div>
                <span
                  className={`w-fit rounded-sm border px-3 py-1 text-xs font-medium ${
                    cert.status === "Completed"
                      ? "border-steellight/40 text-steellight"
                      : "border-accent/50 text-accent"
                  }`}
                >
                  {cert.status}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
