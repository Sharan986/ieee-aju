import SectionHeading from "../components/SectionHeading";
import { FaCircle, FaCalendarAlt } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Dates | AIEI 2026",
  description: "Important dates and deadlines for AIEI 2026 — paper submission, acceptance notification, registration, and conference dates.",
};

const timeline = [
  {
    date: "June 15, 2026",
    title: "Paper Submission Deadline",
    description: "Submit your full paper via the online submission system.",
    status: "upcoming" as const,
  },
  {
    date: "July 20, 2026",
    title: "Acceptance Notification",
    description: "Authors will be notified of the review decision.",
    status: "upcoming" as const,
  },
  {
    date: "August 10, 2026",
    title: "Camera-Ready Submission",
    description: "Submit the final version of your accepted paper with all revisions.",
    status: "upcoming" as const,
  },
  {
    date: "August 15, 2026",
    title: "Submission of Final Manuscript & Copyright",
    description: "Submit final manuscript along with IEEE copyright form.",
    status: "upcoming" as const,
  },
  {
    date: "August 25, 2026",
    title: "Registration Deadline",
    description: "At least one author per accepted paper must register.",
    status: "upcoming" as const,
  },
  {
    date: "September 26–28, 2026",
    title: "Conference Dates",
    description: "Three days of keynotes, paper presentations, tutorials, and networking.",
    status: "upcoming" as const,
  },
];

export default function KeyDatesPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Key Dates</h1>
          <p className="mt-3 text-white/80 text-lg">
            Important deadlines and milestones for AIEI 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Conference Timeline"
            subtitle="Please note these important dates. All deadlines are at 11:59 PM AoE (Anywhere on Earth)."
          />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.title} className="relative flex gap-6 items-start">
                  {/* Dot */}
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-primary/10 items-center justify-center z-10">
                    <FaCircle
                      className={`text-xs ${
                        i === timeline.length - 1 ? "text-accent" : "text-primary"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow ${
                      i === timeline.length - 1
                        ? "border-accent/30 bg-accent/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm text-accent-dark font-semibold mb-1">
                      <FaCalendarAlt className="text-accent" />
                      {item.date}
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h3 className="font-bold text-primary mb-2">Important Note</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dates are subject to change. Please check this page regularly for any updates.
              For any queries regarding deadlines, please contact us at{" "}
              <a
                href="mailto:aiei2026@arkajainuniversity.ac.in"
                className="text-primary font-medium hover:text-accent transition-colors"
              >
                aiei2026@arkajainuniversity.ac.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
