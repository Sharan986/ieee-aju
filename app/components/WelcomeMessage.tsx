import SectionHeading from "./SectionHeading";

export default function WelcomeMessage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Welcome Message from the General Chair" />

        <div className="max-w-4xl mx-auto">
          {/* Chairs */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              {
                name: "Dr. A. K. Sharma",
                title: "General Chair, AIEI 2026",
                affiliation: "Arka Jain University, India",
              },
              {
                name: "Dr. R. P. Singh",
                title: "General Co-Chair, AIEI 2026",
                affiliation: "Arka Jain University, India",
              },
            ].map((chair) => (
              <div key={chair.name} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-2xl">
                    {chair.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="font-bold text-foreground">{chair.name}</h3>
                <p className="text-sm text-accent font-medium">{chair.title}</p>
                <p className="text-xs text-gray-600">{chair.affiliation}</p>
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
            <p>
              It is our great pleasure to welcome you to the <strong>International Conference on
              AI Engineering and Innovation (AIEI 2026)</strong>, scheduled to be held on{" "}
              <strong>September 26–28, 2026</strong> at the{" "}
              <strong>Arka Jain University, Gamharia, Jharkhand, India</strong>.
              This inaugural edition of AIEI marks a significant step toward advancing
              Artificial Intelligence and Engineering Innovation for societal and industrial
              transformation.
            </p>
            <p>
              AIEI 2026 has been envisioned as a dynamic global platform for{" "}
              <strong>researchers, academicians, industry professionals, and innovators</strong>{" "}
              to present original contributions and explore the latest in AI-driven systems
              and applications, with a strong emphasis on international collaboration and
              innovation.
            </p>
            <p>
              AIEI 2026 features keynote sessions, technical paper presentations, tutorials,
              industry sessions, and panel discussions across various AI domains — including
              healthcare, agriculture, energy, business, education, defense, intelligent
              control, and smart systems. All registered and presented papers will be submitted
              to <strong>IEEE Xplore Digital Library</strong> for possible publication subject
              to fulfilling the IEEE eligibility criteria.
            </p>
            <p>
              We look forward to your active participation and wish you a rewarding and
              memorable experience at AIEI 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
