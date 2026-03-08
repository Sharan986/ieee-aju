import SectionHeading from "../components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committee | AIEI 2026",
  description: "Organizing committee, advisory board, and technical program committee for AIEI 2026.",
};

interface CommitteeMember {
  name: string;
  affiliation: string;
  role?: string;
}

const generalChairs: CommitteeMember[] = [
  { name: "Dr. A. K. Sharma", affiliation: "Arka Jain University, India", role: "General Chair" },
  { name: "Dr. R. P. Singh", affiliation: "Arka Jain University, India", role: "General Co-Chair" },
];

const organizingCommittee: CommitteeMember[] = [
  { name: "Dr. S. Kumar", affiliation: "Arka Jain University, India", role: "Organizing Chair" },
  { name: "Dr. P. Gupta", affiliation: "Arka Jain University, India", role: "Organizing Co-Chair" },
  { name: "Prof. M. Das", affiliation: "Arka Jain University, India", role: "Organizing Secretary" },
  { name: "Dr. N. Verma", affiliation: "Arka Jain University, India", role: "Joint Secretary" },
];

const technicalCommittee: CommitteeMember[] = [
  { name: "Prof. J. Wilson", affiliation: "Stanford University, USA" },
  { name: "Dr. L. Chen", affiliation: "Tsinghua University, China" },
  { name: "Prof. A. Müller", affiliation: "TU Munich, Germany" },
  { name: "Dr. K. Tanaka", affiliation: "University of Tokyo, Japan" },
  { name: "Prof. R. Patel", affiliation: "IIT Delhi, India" },
  { name: "Dr. S. Ahmed", affiliation: "NUS, Singapore" },
  { name: "Prof. E. Johnson", affiliation: "MIT, USA" },
  { name: "Dr. M. Garcia", affiliation: "University of Barcelona, Spain" },
];

const advisoryBoard: CommitteeMember[] = [
  { name: "Prof. D. Brown", affiliation: "University of Cambridge, UK" },
  { name: "Dr. H. Yamamoto", affiliation: "Kyoto University, Japan" },
  { name: "Prof. V. Reddy", affiliation: "IISc Bangalore, India" },
  { name: "Dr. F. Rossi", affiliation: "University of Padova, Italy" },
  { name: "Prof. C. Wang", affiliation: "Peking University, China" },
  { name: "Dr. A. Okafor", affiliation: "University of Lagos, Nigeria" },
];

function CommitteeTable({ title, members, showRole = false }: { title: string; members: CommitteeMember[]; showRole?: boolean }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-primary/5 border-b border-gray-200">
              <th className="px-4 py-3 font-semibold text-foreground">Name</th>
              {showRole && <th className="px-4 py-3 font-semibold text-foreground">Role</th>}
              <th className="px-4 py-3 font-semibold text-foreground">Affiliation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((m) => (
              <tr key={m.name} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{m.name}</td>
                {showRole && <td className="px-4 py-3 text-accent-dark font-medium">{m.role}</td>}
                <td className="px-4 py-3 text-gray-600">{m.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Committee</h1>
          <p className="mt-3 text-white/80 text-lg">Meet our distinguished organizing team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* General Chairs — featured */}
          <SectionHeading title="General Chairs" />
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {generalChairs.map((chair) => (
              <div key={chair.name} className="text-center w-56">
                <div className="w-28 h-28 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-3xl">
                    {chair.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-lg">{chair.name}</h3>
                <p className="text-sm text-accent font-medium">{chair.role}</p>
                <p className="text-xs text-gray-600 mt-1">{chair.affiliation}</p>
              </div>
            ))}
          </div>

          <CommitteeTable title="Organizing Committee" members={organizingCommittee} showRole />
          <CommitteeTable title="Technical Program Committee" members={technicalCommittee} />
          <CommitteeTable title="Advisory Board" members={advisoryBoard} />
        </div>
      </section>
    </>
  );
}
