import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import type { Metadata } from "next";
import { FaCheck, FaTimes } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Sponsors | JHICON-2027",
  description: "Sponsors, technical co-sponsors, and knowledge partners of JHICON-2027.",
};

const tiers = [
  {
    name: "Technical Co-Sponsors",
    color: "bg-primary",
    sponsors: [
      { name: "IEEE", abbr: "IEEE", logo: "/ieee.webp" },
      { name: "IEEE Kolkata Section", abbr: "IEEE KS", logo: "/kolkata.webp" },
    ],
  },
];

const packages = [
  { name: "Title", price: "₹2 Lakh*", color: "text-[#D4A843]" },
  { name: "Diamond", price: "₹1.5 Lakh*", color: "text-cyan-500" },
  { name: "Platinum", price: "₹1 Lakh*", color: "text-slate-400" },
  { name: "Gold", price: "₹0.75 Lakh*", color: "text-yellow-600" },
  { name: "Silver", price: "text-gray-400" }, // Note: silver is grey
  { name: "Bronze", price: "₹0.25 Lakh*", color: "text-orange-700" },
];

// Silver price in image is ₹0.5 Lakh*
const packageDetails = [
  { name: "Title", price: "₹2 Lakh*", textClass: "text-[#B8860B]" },
  { name: "Diamond", price: "₹1.5 Lakh*", textClass: "text-cyan-600" },
  { name: "Platinum", price: "₹1 Lakh*", textClass: "text-slate-500" },
  { name: "Gold", price: "₹0.75 Lakh*", textClass: "text-amber-600" },
  { name: "Silver", price: "₹0.5 Lakh*", textClass: "text-zinc-500" },
  { name: "Bronze", price: "₹0.25 Lakh*", textClass: "text-orange-700" },
];

const features = [
  {
    name: "Number of free attendee registrations",
    values: ["6", "5", "4", "3", "2", "1"],
  },
  {
    name: "Invitation to expert talk",
    values: [true, true, true, false, false, false],
  },
  {
    name: "Space for sponsor logos on conference materials",
    values: [true, true, true, true, true, true],
  },
  {
    name: "Exhibition Booth details",
    values: ["6m × 6m", "6m × 3m", "3m × 3m", "3m × 3m", "2m × 3m", false],
  },
  {
    name: "Sponsor's brochure/flyer in conference kit",
    values: [true, true, true, true, false, false],
  },
];

export default function SponsorsPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Sponsors & Partners</h1>
          <p className="mt-3 text-white/80 text-lg">
            We extend our sincere gratitude to all our sponsors and partners
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sponsor Tiers */}
          {tiers.map((tier) => (
            <div key={tier.name} className="mb-16">
              <SectionHeading title={tier.name} />
              <div className="flex flex-wrap justify-center gap-8">
                {tier.sponsors.map((s) => (
                  <div
                    key={s.name}
                    className="group flex flex-col items-center gap-3"
                  >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center group-hover:border-accent group-hover:shadow-md transition-all overflow-hidden">
                      <Image
                        src={s.logo}
                        alt={s.name}
                        width={224}
                        height={224}
                        className="h-40 w-40 sm:h-44 sm:w-44 object-contain p-0"
                      />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Sponsorship Packages Table */}
          <div className="mb-16">
            <SectionHeading
              title="Proposed Sponsorship Details"
              subtitle="JHICON-2027 offers various sponsorship opportunities to suit your organization's goals"
            />
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs">
              <table className="w-full min-w-[900px] border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-primary-dark/20 px-6 py-4 text-left font-bold text-base">
                      Sponsorship Details
                    </th>
                    {packageDetails.map((pkg) => (
                      <th
                        key={pkg.name}
                        className="border border-primary-dark/20 px-4 py-4 text-center font-bold text-base"
                      >
                        {pkg.price}
                      </th>
                    ))}
                  </tr>
                  <tr className="bg-gray-50 text-foreground border-b border-gray-200">
                    <td className="border border-gray-200 px-6 py-3 font-semibold text-gray-600">
                      Particulars
                    </td>
                    {packageDetails.map((pkg) => (
                      <td
                        key={pkg.name}
                        className={`border border-gray-200 px-4 py-3 text-center font-bold ${pkg.textClass}`}
                      >
                        {pkg.name}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr
                      key={feature.name}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="border border-gray-200 px-6 py-4 font-medium text-gray-700">
                        {feature.name}
                      </td>
                      {feature.values.map((val, valIdx) => {
                        const cellKey = `${feature.name}-${valIdx}`;
                        if (typeof val === "boolean") {
                          return (
                            <td
                              key={cellKey}
                              className="border border-gray-200 px-4 py-4 text-center"
                            >
                              {val ? (
                                <FaCheck className="text-green-600 mx-auto text-base" />
                              ) : (
                                <FaTimes className="text-gray-300 mx-auto text-base" />
                              )}
                            </td>
                          );
                        }

                        return (
                          <td
                            key={cellKey}
                            className="border border-gray-200 px-4 py-4 text-center text-gray-600 font-semibold"
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-400 text-center sm:text-left">
              * Note: Sponsorship rates are subject to applicable terms and taxes.
            </p>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="bg-linear-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Become a Sponsor</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Partner with JHICON-2027 and showcase your organization to a global audience
              of researchers, engineers, and innovators in the field of electrical engineering and computing.
            </p>
            <a
              href="mailto:jhicon.ieee@arkajainuniversity.ac.in,dr.ashwini@arkajainuniversity.ac.in,dr.aditya@arkajainuniversity.ac.in?subject=Sponsorship%20Inquiry%20-%20JHICON-2027"
              className="inline-block px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-colors"
            >
              Contact Us for Sponsorship
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
