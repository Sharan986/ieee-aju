export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-3xl sm:text-4xl font-bold ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <div className="mt-3 mx-auto w-20 h-1 rounded bg-accent" />
      {subtitle && (
        <p
          className={`mt-4 text-base max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
