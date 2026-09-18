import { faqs } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper2 py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            title="Frequently asked questions"
            description="Quick, factual answers about background, skills and experience."
          />
        </ScrollReveal>

        <div className="mt-12 max-w-3xl divide-y divide-slateline border-y border-slateline">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 40}>
              <details className="group py-5">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <h3 className="font-serif text-base font-medium text-ink sm:text-lg">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden
                    className="shrink-0 text-xl font-light text-steel transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
                  {faq.answer}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
