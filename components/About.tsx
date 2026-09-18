import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const points = [
  {
    label: "Monitoring",
    text: "CCTV and control room monitoring across live camera feeds, with a focus on catching what matters early.",
  },
  {
    label: "Access & visitors",
    text: "Access control, visitor sign-in and contractor management handled with the same standard, every time.",
  },
  {
    label: "Incidents",
    text: "Clear, factual incident reporting — written the same way regardless of who reads it or when.",
  },
  {
    label: "Emergency response",
    text: "Fire alarm and emergency response procedures followed consistently, treating every alert as real.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="About"
            description="A security operations background built around monitoring, documentation and steady judgment under pressure."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <ScrollReveal delay={80}>
            <div className="max-w-prose space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
              <p>
                My work sits at the point where a site's security systems meet
                the people responsible for acting on them. That means hours
                spent on CCTV and control room monitoring, balanced with the
                more procedural side of the job — access control, visitor and
                contractor management, and the paperwork that follows every
                incident, however minor.
              </p>
              <p>
                Security supervision has taught me that consistency is the
                job. The same verification standard for every visitor. The
                same escalation process for every alarm. The same level of
                detail in every incident report, whether it took thirty
                seconds to resolve or thirty minutes.
              </p>
              <p>
                Alongside operational work, I've been building a habit of
                using AI tools to speed up the writing side of the role —
                structuring reports from rough notes, tightening the language
                in daily logs, and getting routine documentation done faster
                without losing accuracy.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {points.map((p) => (
                <div
                  key={p.label}
                  className="border-l-2 border-slateline pl-5"
                >
                  <dt className="font-serif text-base font-semibold text-ink">
                    {p.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate">
                    {p.text}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
