export default function SectionHeading({
  title,
  description,
  light = false,
}: {
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-base leading-relaxed ${
            light ? "text-paper/70" : "text-slate"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
