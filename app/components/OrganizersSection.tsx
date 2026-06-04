import SectionHeading from "./SectionHeading";

const organizers = [
  {
    name: "Arka Jain University",
    role: "Host Institution",
    abbr: "AJU",
    description: "Gamharia, Jharkhand, India",
    url: "https://arkajainuniversity.ac.in",
  },
  {
    name: "IEEE",
    role: "",
    abbr: "IEEE",
    description: "Institute of Electrical and Electronics Engineers",
    url: "https://www.ieee.org/",
  },
  {
    name: "IEEE Kolkata Section",
    role: "Technical Co-Sponsor",
    abbr: "IEEE KS",
    description: "IEEE Kolkata Section Chapter",
    url: "https://ewh.ieee.org/r10/calcutta/",
  },
];

export default function OrganizersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Organizers"
          subtitle="JHICON-2027 is jointly organized by the following institutions"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {organizers.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow hover:cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-lg">{org.abbr}</span>
              </div>
              <h3 className="font-bold text-foreground text-base">{org.name}</h3>
              <p className="text-sm text-accent font-medium mt-1">{org.role}</p>
              <p className="text-xs text-gray-600 mt-2">{org.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
