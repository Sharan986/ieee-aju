import SectionHeading from "../components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committee | JHICON-2027",
  description: "Organizing committee details for JHICON-2027 at ARKA Jain University.",
};

interface CommitteeMember {
  name: string;
  affiliation: string;
  role?: string;
}

const organizingCommittee: CommitteeMember[] = [
  {
    name: "Prof. (Dr.) Easwaran S. Iyer",
    role: "Chief Patron",
    affiliation: "Vice-Chancellor, ARKA Jain University",
  },
  {
    name: "Dr. Amit Kumar Shrivastav",
    role: "Patron",
    affiliation: "Registrar, ARKA Jain University",
  },
  {
    name: "Dr. Angad Tiwari",
    role: "Patron",
    affiliation: "Pro-Vice Chancellor, ARKA Jain University",
  },
  {
    name: "Dr. Sukumar Mishra",
    role: "Patron",
    affiliation: "Director, IIT Dhanbad",
  },
  {
    name: "Dr. Narayan Prasad Padhy",
    role: "Patron",
    affiliation: "Director, MNIT Jaipur, Rajasthan",
  },
  {
    name: "Dr. Arvind Kumar Pandey",
    role: "Patron",
    affiliation: "IQAC Director, School of Engineering and IT, ARKA Jain University",
  },
  {
    name: "Dr. Ashwini Kumar",
    role: "Patron",
    affiliation: "Dean, School of Engineering and IT, ARKA Jain University",
  },
  {
    name: "Dr. Aditya Prasad Padhy, SMIEEE",
    role: "Organizing Chair",
    affiliation: "IEEE-AJU Student Branch Chair",
  },
  { name: "TBA", role: "Organizing Co-Chair", affiliation: "ARKA Jain University" },
  { name: "TBA", role: "Finance Chair", affiliation: "ARKA Jain University" },
  {
    name: "Dr. Prem Nath Suman",
    role: "Finance Chair",
    affiliation: "ARKA Jain University",
  },
  {
    name: "Dr. Shailesh Kumar",
    role: "Publication Chair",
    affiliation: "Associate Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Kasinath Jena",
    role: "Publication Chair",
    affiliation: "Associate Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Amit Prakash Sen",
    role: "Publication Chair",
    affiliation: "Associate Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Binod Kumar Choudhary",
    role: "Publication Chair",
    affiliation: "Associate Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Anupam Kumari",
    role: "Publication Chair",
    affiliation: "Associate Professor, ME, ARKA Jain University",
  },
  {
    name: "Mrs. Taniya Ghosh",
    role: "Sponsorship Chair",
    affiliation: "Assistant Professor, EE, ARKA Jain University",
  },
  {
    name: "Prof. Dr. Sanjeevikumar Padmanaban",
    role: "Technical Program Chair",
    affiliation: "University of South-Eastern Norway",
  },
  {
    name: "Dr. Ashok Kumar Pradhan",
    role: "Technical Program Chair",
    affiliation: "Professor, IIT Kharagpur",
  },
  {
    name: "Dr. Deepak Reddy Pullaguram",
    role: "Technical Program Chair",
    affiliation: "Assistant Professor, IIT Kharagpur",
  },
  {
    name: "Dr. Dushyant Sharma",
    role: "Technical Program Chair",
    affiliation: "Assistant Professor, IIT Dhanbad",
  },
  {
    name: "Dr. Paresh Kumar Nayak",
    role: "Technical Program Chair",
    affiliation: "Assistant Professor, IIT Dhanbad",
  },
  {
    name: "Dr. Tridibesh Nag",
    role: "Technical Program Chair",
    affiliation: "Vice Chair, IEEE Kolkata Section",
  },
  {
    name: "Dr. Susanta Ray",
    role: "Technical Program Chair",
    affiliation: "Secretary, IEEE Kolkata Section",
  },
  {
    name: "Dr. Vinay Pratap Singh",
    role: "Technical Program Chair",
    affiliation: "MNIT Jaipur",
  },
  {
    name: "Dr. Varsha Singh",
    role: "Technical Program Chair",
    affiliation: "NIT Raipur",
  },
  {
    name: "Dr. Veer Pratap Meena",
    role: "Technical Program Chair",
    affiliation: "NIT Jamshedpur",
  },
  {
    name: "Dr. Shailesh Kumar",
    role: "Technical Program Chair",
    affiliation: "ARKA Jain University, Jharkhand",
  },
  {
    name: "Dr. Kasinath Jena",
    role: "Technical Program Chair",
    affiliation: "ARKA Jain University, Jharkhand",
  },
  {
    name: "Dr. Md Irfan Ahmed",
    role: "Technical Program Chair",
    affiliation: "Assistant Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Amit Prakash Sen",
    role: "Technical Program Chair",
    affiliation: "Associate Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Binod Kumar Choudhary",
    role: "Technical Program Chair",
    affiliation: "Associate Professor, EE, ARKA Jain University",
  },
  {
    name: "Dr. Nidhi Dua",
    role: "Technical Program Chair",
    affiliation: "Assistant Professor, CSE, ARKA Jain University",
  },
  {
    name: "Mrs. Sarita Srivastav",
    role: "Hospitality Chair",
    affiliation: "Assistant Professor, EE, ARKA Jain University",
  },
  {
    name: "Mr. Manjur Ansari",
    role: "Hospitality Chair",
    affiliation: "Assistant Professor, EE, ARKA Jain University",
  },
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
            {members.map((m, index) => (
              <tr key={`${m.name}-${m.role ?? "member"}-${index}`} className="hover:bg-gray-50 transition-colors">
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
          <SectionHeading title="Organizing Committee" />
          <CommitteeTable title="Organizing Committee" members={organizingCommittee} showRole />
        </div>
      </section>
    </>
  );
}
