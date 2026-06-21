import SectionHeading from "./SectionHeading";
import Image from "next/image";

const sponsors = [
  { name: "IEEE", tier: "Technical Co-Sponsor", logo: "/ieee.webp" },
  { name: "IEEE Kolkata Section", tier: "Technical Co-Sponsor", logo: "/kolkata.webp" },
  { name: "Arka Jain University", tier: "Host", logo: "/Arkajain.webp" },
];



export default function SponsorsStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Sponsors & Partners" />

        {/* Sponsors */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-40 h-40 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={160}
                  height={160}
                  className="h-36 w-36 object-contain p-0"
                />
              </div>
              <span className="text-xs text-gray-600">{s.tier}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
