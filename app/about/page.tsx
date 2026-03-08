import SectionHeading from "../components/SectionHeading";
import KeyDatesCard from "../components/KeyDatesCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AIEI 2026",
  description: "Learn about the International Conference on AI Engineering and Innovation (AIEI 2026) and Arka Jain University.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About</h1>
          <p className="mt-3 text-white/80 text-lg">AIEI 2026 & Arka Jain University</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About AIEI 2026 */}
              <div>
                <SectionHeading title="About AIEI 2026" />
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    The <strong>International Conference on AI Engineering and Innovation (AIEI 2026)</strong>{" "}
                    is scheduled to be held on <strong>September 26–28, 2026</strong> at{" "}
                    <strong>Arka Jain University, Gamharia, Jharkhand, India</strong>. This
                    inaugural edition of AIEI marks a significant step toward advancing Artificial
                    Intelligence and Engineering Innovation for societal and industrial transformation.
                  </p>
                  <p>
                    AIEI 2026 has been envisioned as a dynamic global platform for researchers,
                    academicians, industry professionals, and innovators to present original
                    contributions and explore the latest in AI-driven systems and applications,
                    with a strong emphasis on international collaboration and innovation.
                  </p>
                  <p>
                    The conference features keynote sessions, technical paper presentations,
                    tutorials, industry sessions, and panel discussions across various AI
                    domains — including healthcare, agriculture, energy, business, education,
                    defense, intelligent control, and smart systems.
                  </p>
                  <p>
                    All registered and presented papers will be submitted to{" "}
                    <strong>IEEE Xplore Digital Library</strong> for possible publication subject
                    to fulfilling the IEEE eligibility criteria. Extended versions of all (100%)
                    presented papers will be eligible for further review and possible publication
                    in <strong>IEEE Security & Privacy Magazine</strong>.
                  </p>
                </div>
              </div>

              {/* About Arka Jain University */}
              <div>
                <SectionHeading title="About Arka Jain University" />
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>Arka Jain University (AJU)</strong> is a premier institution of higher
                    education located in Gamharia, Seraikela-Kharsawan, Jharkhand, India.
                    Established with a vision to provide world-class education, AJU is committed
                    to high-quality teaching, advanced research, innovation, and industry-oriented
                    training.
                  </p>
                  <p>
                    The university comprises multiple academic departments offering B.Tech, M.Tech,
                    M.Sc, MCA, and Ph.D. programs, with a strong emphasis on academic excellence,
                    good governance, and leadership in engineering education and research.
                  </p>
                  <p>
                    AJU aims to emerge as a front-runner in addressing the evolving needs of the
                    technology sector, industries, and public services. With a commitment to high
                    human values and societal impact, it strives to impart quality education,
                    develop advanced skills, and establish state-of-the-art research facilities.
                  </p>
                </div>
              </div>

              {/* Department Info */}
              <div>
                <SectionHeading title="Department of Computer Science & Engineering" />
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    The Department of Computer Science & Engineering at AJU has been consistently
                    producing highly skilled and industry-ready engineers since its inception.
                    Along with strong academic foundations, the department is actively involved in
                    research and development across emerging areas of computer science and artificial
                    intelligence.
                  </p>
                  <p>
                    The department offers undergraduate (B.Tech) and postgraduate programmes in
                    Computer Science, Artificial Intelligence & Machine Learning, and Data Science,
                    along with a Ph.D. programme covering multiple specialized domains.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <KeyDatesCard />

              {/* Conference Venue Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-primary text-lg mb-3">Conference Venue</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Arka Jain University<br />
                  NH-33, Gamharia<br />
                  Seraikela-Kharsawan<br />
                  Jharkhand 832108, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
