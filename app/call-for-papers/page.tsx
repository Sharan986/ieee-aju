import SectionHeading from "../components/SectionHeading";
import KeyDatesCard from "../components/KeyDatesCard";
import Link from "next/link";
import { FaCheckCircle, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call for Papers | AIEI 2026",
  description: "Submit your research paper to AIEI 2026. Conference tracks, submission guidelines, and paper format.",
};

const tracks = [
  {
    title: "AI & Machine Learning",
    topics: [
      "Deep Learning & Neural Networks",
      "Reinforcement Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI & Large Language Models",
      "Explainable AI (XAI)",
    ],
  },
  {
    title: "AI in Healthcare",
    topics: [
      "Medical Image Analysis",
      "Drug Discovery using AI",
      "AI-powered Diagnostics",
      "Wearable Health Monitoring",
      "Genomics & Bioinformatics",
    ],
  },
  {
    title: "Smart Systems & IoT",
    topics: [
      "Smart Cities & Infrastructure",
      "Industrial IoT & Industry 4.0",
      "Autonomous Vehicles",
      "Robotics & Automation",
      "Edge & Fog Computing",
    ],
  },
  {
    title: "AI in Energy & Agriculture",
    topics: [
      "Smart Grid & Renewable Energy",
      "Precision Agriculture",
      "AI for Climate Change",
      "Sustainable Development using AI",
      "Crop Disease Detection",
    ],
  },
  {
    title: "Cybersecurity & Privacy",
    topics: [
      "AI-powered Threat Detection",
      "Federated Learning & Privacy",
      "Blockchain & AI Integration",
      "Network Security using AI",
      "Adversarial Machine Learning",
    ],
  },
  {
    title: "Data Science & Analytics",
    topics: [
      "Big Data Analytics",
      "Knowledge Graphs",
      "Recommendation Systems",
      "Time Series Analysis",
      "Social Network Analysis",
    ],
  },
];

export default function CallForPapersPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Call for Papers</h1>
          <p className="mt-3 text-white/80 text-lg">
            Submit your original research to AIEI 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-600 leading-relaxed">
                  AIEI 2026 invites original, unpublished research papers on all aspects
                  of AI Engineering and Innovation. Authors are encouraged to submit
                  high-quality papers describing original and previously unpublished results
                  of theoretical, empirical, or experimental work in the areas listed below
                  (but not limited to).
                </p>
                <div className="mt-6 bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <p className="text-sm text-foreground font-medium flex items-start gap-2">
                    <FaFileAlt className="text-accent mt-0.5 shrink-0" />
                    All registered and presented papers will be submitted to{" "}
                    <strong>IEEE Xplore Digital Library</strong> for possible publication,
                    subject to fulfilling IEEE eligibility criteria.
                  </p>
                </div>
              </div>

              {/* Conference Tracks */}
              <SectionHeading title="Conference Tracks" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {tracks.map((track) => (
                  <div
                    key={track.title}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-primary text-base mb-3 border-b border-gray-100 pb-2">
                      {track.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {track.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Submission Guidelines */}
              <SectionHeading title="Submission Guidelines" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
                  <h4 className="font-bold text-foreground text-base">Paper Format</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      Papers must be written in English and formatted according to the{" "}
                      <strong>IEEE conference template</strong>.
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      Maximum paper length: <strong>6 pages</strong> (including references).
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      All papers must be submitted in <strong>PDF format</strong>.
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      Papers must be original and not simultaneously submitted to another
                      conference or journal.
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      All submissions will undergo a <strong>double-blind peer review</strong>{" "}
                      process.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-colors"
                  >
                    <FaPaperPlane /> Submit Your Paper
                  </Link>
                  <Link
                    href="/key-dates"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    View Key Dates
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <KeyDatesCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
