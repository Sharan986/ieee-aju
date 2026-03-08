import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSnippet() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About AIEI 2026"
          subtitle="Advancing AI Engineering for a Better Tomorrow"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            The International Conference on AI Engineering and Innovation (AIEI 2026) is
            a premier global platform that brings together researchers, academicians,
            industry professionals, and innovators to present cutting-edge research in
            artificial intelligence and its applications across diverse domains. Organized
            by Arka Jain University in collaboration with IEEE, AIEI 2026 aims to foster
            international collaboration and drive innovation in AI-driven systems.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:text-accent transition-colors"
          >
            Learn More <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
