import SectionHeading from "../components/SectionHeading";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Committee | JHICON-2027",
  description: "Organizing committee details for JHICON-2027 at AJU, Jharkhand, India.",
};

interface CommitteeMember {
  name: string;
  affiliation: string;
  role?: string;
  image?: string;
}

const chiefPatrons: CommitteeMember[] = [
  {
    name: "Prof. (Dr.) Easwaran S. Iyer",
    role: "Chief Patron",
    affiliation: "Vice-Chancellor, AJU, Jharkhand",
    image: "/committee/easwaran_s_iyer.jpg",
  },
];

const patrons: CommitteeMember[] = [
  {
    name: "Dr. Amit Kumar Shrivastav",
    role: "Patron",
    affiliation: "Registrar, AJU, Jharkhand",
    image: "/committee/amit_kumar_shrivastav.jpg",
  },
  {
    name: "Prof. (Dr.) Angad Tiwari",
    role: "Patron",
    affiliation: "Pro-Vice Chancellor, AJU, Jharkhand",
    image: "/committee/angad_tiwari.png",
  },
  {
    name: "Prof. (Dr.) S. S Razi",
    role: "Patron",
    affiliation: "Chairperson, AJU, Jharkhand",
    image: "/committee/ss_razi.png",
  },
];

const coPatrons: CommitteeMember[] = [
  {
    name: "Mrs. Richa Garg",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
    image: "/committee/richa_garg.jpg",
  },
  {
    name: "Dr. Jasbir Singh Dhanjal",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
    image: "/committee/jasbir_singh_dhanjal.jpg",
  },
  {
    name: "Prof. (Dr.) Arvind Kumar Pandey",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
    image: "/committee/arvind_kumar_pandey.jpg",
  },
  {
    name: "Dr. Ashwini Kumar",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
    image: "/committee/ashwini_kumar.jpg",
  },
];

const honoraryChairs: CommitteeMember[] = [
  {
    name: "Prof. (Dr.) Narayana Prasad Padhy",
    role: "Honorary Chair",
    affiliation: "Director, MNIT, Jaipur",
    image: "/committee/narayana_prasad_padhy.jpg",
  },
  {
    name: "Prof. (Dr.) Bidyadhar Subudhi",
    role: "Honorary Chair",
    affiliation: "Director, NIT, Warangal",
    image: "/committee/bidyadhar_subudhi.jpg",
  },
  {
    name: "Prof. (Dr.) Ashok Kumar Pradhan",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
    image: "/committee/ashok_kumar_pradhan.jpg",
  },
  {
    name: "Prof. (Dr.) Aurobinda Routray",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
    image: "/committee/aurobinda_routray.png",
  },
  {
    name: "Prof. (Dr.) Bhim Singh",
    role: "Honorary Chair",
    affiliation: "ANRF National Science Chair, IIT, Delhi",
    image: "/committee/bhim_singh.jpg",
  },
  {
    name: "Prof. (Dr.) Sanjeevikumar Padmanaban",
    role: "Honorary Chair",
    affiliation: "USN, Norway",
    image: "/committee/sanjeev_padmanaban.jpg",
  },
  {
    name: "Prof. (Dr.) Chandan Chakraborty",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
    image: "/committee/chandan_chakraborty.png",
  },
  {
    name: "Prof. (Dr.) Xiaodong Liang",
    role: "Honorary Chair",
    affiliation: "University of Saskatchewan, Canada",
    image: "/committee/xiaodong_liang.png",
  },
  {
    name: "Prof. (Dr.) Brij Bhooshan Gupta",
    role: "Honorary Chair",
    affiliation: "Asia University, Taiwan",
    image: "/committee/brij_bhooshan_gupta.jpg",
  },
  {
    name: "Prof. (Dr.) Sidhartha Panda",
    role: "Honorary Chair",
    affiliation: "VSSUT, Burla",
    image: "/committee/sidhartha_panda.png",
  },
  {
    name: "Prof. (Dr.) Ajit Kumar Barisal",
    role: "Honorary Chair",
    affiliation: "OUTR, Bhubaneswar",
    image: "/committee/ajit_kumar_barisal.png",
  },
  {
    name: "Prof. (Dr.) Tarikul Islam",
    role: "Honorary Chair",
    affiliation: "Jamia Millia Islamia, New Delhi",
    image: "/committee/tarikul_islam.jpg",
  },
  {
    name: "Prof. (Dr.) Chinmoy Panigrahi",
    role: "Honorary Chair",
    affiliation: "KIIT University, Bhubaneswar",
    image: "/committee/chinmoy_panigrahi.png",
  },
];

const generalChairs: CommitteeMember[] = [
  {
    name: "Dr. Aditya Prasad Padhy",
    role: "",
    affiliation: "AJU, Jharkhand, India",
    image: "/committee/aditya_prasad_padhy.jpg",
  },
];

const coOrganizingChairs: CommitteeMember[] = [
  {
    name: "Dr. Veerpratap Meena",
    role: "Co-Organizing Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Nidhi Dua",
    role: "Co-Organizing Chair",
    affiliation: "AJU, Jharkhand",
  },
];

const steeringCommittee: CommitteeMember[] = [];

const tpcChairs: CommitteeMember[] = [
  {
    name: "Dr. Deepak Reddy Pullaguram",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Dr. Paresh Kumar Nayak",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT Dhanbad",
  },
  {
    name: "Dr. Dushyant Sharma",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Dhanbad",
  },
  {
    name: "Dr. Rabindra Mohanty",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Delhi",
  },
  {
    name: "Dr. Priyatosh Mahish",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT Dhanbad",
  },
  {
    name: "Dr. Ajit Kumar",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Dhanbad",
  },
  {
    name: "Dr. Vinay Pratap Singh",
    role: "Technical Programme Committee Chair",
    affiliation: "MNIT, Jaipur",
  },
  {
    name: "Dr. Swapnajit Pattnaik",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Monalisa Biswal",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Varsha Singh",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Kumari Namrata",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Basudeba Behera",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Wesam Ahmed",
    role: "Technical Programme Committee Chair",
    affiliation: "Hurghada University, Egypt",
  },
  {
    name: "Dr. Dilip Kumar Mishra",
    role: "Technical Programme Committee Chair",
    affiliation: "Flinders University, Australia",
  },
  {
    name: "Dr. Trilochanan Panigrahi",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Goa",
  },
  {
    name: "Dr. Deepak Kumar Lal",
    role: "Technical Programme Committee Chair",
    affiliation: "VSSUT, Burla",
  },
  {
    name: "Dr. Suryaprakash",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Dinesh Kumar",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Kethavath Raghavendra Naik",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Saumendra Sarangi",
    role: "Technical Programme Committee Chair",
    affiliation: "MNNIT, Prayagraj",
  },
  {
    name: "Dr. Pavan kumar Meena",
    role: "Technical Programme Committee Chair",
    affiliation: "GUT, Poland",
  },
  {
    name: "Dr. Gajendra Kant Mishra",
    role: "Technical Programme Committee Chair",
    affiliation: "BIT, Mesra",
  },
  {
    name: "Dr. Krishna Kumar Gupta",
    role: "Technical Programme Committee Chair",
    affiliation: "Thapar University, Punjab",
  },
  {
    name: "Dr. Arghya Mitra",
    role: "Technical Programme Committee Chair",
    affiliation: "VNIT, Nagpur",
  },
  {
    name: "Dr. M Suresh",
    role: "Technical Programme Committee Chair",
    affiliation: "VIT, Bhopal",
  },
  {
    name: "Dr. Gesu Thakur",
    role: "Technical Programme Committee Chair",
    affiliation: "COER University, Roorkee",
  },
  {
    name: "Dr. Kasinath Jena",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Jonaki Mukherjee",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
];

const financeChairs: CommitteeMember[] = [
  { name: "Dr. Ashwini Kumar", role: "Finance Chair", affiliation: "AJU, Jharkhand, India", image: "/committee/ashwini_kumar.jpg" },
  { name: "Dr. Prem Nath Suman", role: "Finance Chair", affiliation: "AJU, Jharkhand, India" },
];

const industryChairs: CommitteeMember[] = [
  { name: "Dr. Sachidananda Prasad", role: "Industry Chair", affiliation: "Sgurr Energy, Gujarat" },
  { name: "Mr. Vinod Veeramachaneni", role: "Industry Chair", affiliation: "Think Mediator Inc., USA" },
  { name: "Mr. Pradeep Kumar Srivastava", role: "Industry Chair", affiliation: "TATA Cummins, Jamshedpur" },
];

const publicationChairs: CommitteeMember[] = [
  { name: "Dr. Gajendra Kant Mishra", role: "Publication Chair", affiliation: "BIT, Mesra" },
  { name: "Prof. (Dr.) Sonia Riyat", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Shailesh Kumar", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Nidhi Dua", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Md Irfan Ahmed", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Amit Prakash Sen", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Binod Kumar Choudhary", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
];

const womenInEngineeringChairs: CommitteeMember[] = [
  { name: "Prof. (Dr.) Susmita Das", role: "WIE Chair", affiliation: "NIT, Rourkela" },
  { name: "Dr. Himani Saini", role: "WIE Chair", affiliation: "ISRO, Bangalore" },
  { name: "Dr. Kumari Namrata", role: "WIE Chair", affiliation: "NIT, Jamshedpur" },
  { name: "Dr. Susmita Kar", role: "WIE Chair", affiliation: "NIT, Rourkela" },
];

const womenInEngineeringCoChairs: CommitteeMember[] = [
  { name: "Dr. Keerti Rai", role: "WIE Co-Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Anupam Kumari", role: "WIE Co-Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Taniya Ghosh", role: "WIE Co-Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Sayantani De", role: "WIE Co-Chair", affiliation: "AJU, Jharkhand" },
];

const hospitalityChairs: CommitteeMember[] = [
  { name: "Dr. Viranshu Kumar", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Monika Singh", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Aditi Keshari", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Sarita Srivastav", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Manjur Ansari", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
];

const webMediaChairs: CommitteeMember[] = [
  { name: "Gursharan Singh", role: "Web & Media Chair", affiliation: "AJU, Jharkhand" },
  { name: "Sumit kr. Singh", role: "Web & Media Chair", affiliation: "AJU, Jharkhand" },
];

const localOrganizingCommittee: CommitteeMember[] = [
  { name: "Dr. Anup Kumar", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Chandraprabha Sahu", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Dilip Kumar", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Megha Sinha", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Ashish Ranjan", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Sweta Kumari Barnwal", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Souvik Singh Rathore", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Kumud Ranjan", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Syed Rashid Anwar", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Ranjeet Kumar", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Mamatha V", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Parthi Shit", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Nikita Kumari", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Ajay Bara", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Soumya Shree", affiliation: "AJU, Jharkhand" },
  { name: "Mrs. Bilquis Bano", affiliation: "AJU, Jharkhand" },
  { name: "Mr. Mihir Kumar Mahakud", affiliation: "AJU, Jharkhand" },
  { name: "Mr. Md Naseem Ansari", affiliation: "AJU, Jharkhand" },
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
                <td className="px-4 py-3 font-medium text-foreground">
                  <div className="flex items-center gap-3">
                    {m.image && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span>{m.name}</span>
                  </div>
                </td>
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

function LeaderCard({ member }: { member: CommitteeMember }) {
  const getInitials = (name: string) => {
    const cleanName = name
      .replace(/^(Prof\.\s*\(Dr\.\)|Prof\.|Dr\.|Mrs\.|Mr\.)/gi, "")
      .trim();
    const parts = cleanName.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center group h-full justify-between">
      <div className="flex flex-col items-center w-full">
        {member.image ? (
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/10 group-hover:border-accent transition-colors duration-300 shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="128px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full mb-4 border-4 border-primary/10 group-hover:border-accent bg-linear-to-br from-primary/5 to-primary/20 flex items-center justify-center text-primary font-extrabold text-3xl select-none group-hover:scale-105 transition-all duration-500 shrink-0">
            {getInitials(member.name)}
          </div>
        )}
        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors line-clamp-2">
          {member.name}
        </h3>
        {member.role &&
          member.role !== "Patron" &&
          member.role !== "Co-Patron" &&
          member.role !== "Chief Patron" &&
          member.role !== "Honorary Chair" &&
          member.role !== "General Chair" && (
            <span className="text-xs text-accent-dark font-bold tracking-wider uppercase mt-1.5 bg-accent/10 px-3 py-1 rounded-full">
              {member.role}
            </span>
          )}
      </div>
      <p className="text-xs text-gray-500 mt-3 max-w-xs line-clamp-2">
        {member.affiliation}
      </p>
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
          {/* Organizing Committee / Patrons Section */}
          <div className="mb-20">
            <SectionHeading
              title="Organizing Committee"
              subtitle="JHICON-2027 Patrons and Leadership"
            />

            <div className="space-y-16">
              {/* Chief Patron */}
              <div>
                <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Chief Patron
                </h3>
                <div className="flex justify-center">
                  <div className="w-full max-w-xs">
                    <LeaderCard member={chiefPatrons[0]} />
                  </div>
                </div>
              </div>

              {/* Patrons */}
              <div>
                <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Patrons
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
                  {patrons.map((p) => (
                    <LeaderCard key={p.name} member={p} />
                  ))}
                </div>
              </div>

              {/* Co-Patrons */}
              <div>
                <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Co-Patrons
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {coPatrons.map((p) => (
                    <LeaderCard key={p.name} member={p} />
                  ))}
                </div>
              </div>

              {/* Honorary Chairs */}
              <div>
                <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Honorary Chairs
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {honoraryChairs.map((hc) => (
                    <LeaderCard key={hc.name} member={hc} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* General Chair Section */}
          <div className="mb-20">
            <SectionHeading title="Organizing Chair" />
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <LeaderCard member={generalChairs[0]} />
              </div>
            </div>
          </div>

          {/* Co-Organizing Chairs Section */}
          <div className="mb-20">
            <SectionHeading title="Co-Organizing Chairs" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {coOrganizingChairs.map((member) => (
                <LeaderCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Web & Media Chairs Section */}
          <div className="mb-20">
            <SectionHeading title="Web & Media Chairs" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {webMediaChairs.map((member) => (
                <LeaderCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Steering Committee Section */}
          {steeringCommittee.length > 0 && (
            <div className="mb-20">
              <SectionHeading title="Steering Committee" />
              <CommitteeTable title="Steering Committee" members={steeringCommittee} />
            </div>
          )}

          {/* Technical Programme Committee Section */}
          <div className="mb-20">
            <SectionHeading title="Technical Programme Committee" />
            <CommitteeTable title="Technical Programme Committee Chairs" members={tpcChairs} />
          </div>

          {/* Other Conference Committees Section */}
          <div className="mb-20">
            <SectionHeading title="Other Conference Committees" />
            <div className="space-y-12">
              <CommitteeTable title="Finance Chairs" members={financeChairs} />
              <CommitteeTable title="Industry Chairs" members={industryChairs} />
              <CommitteeTable title="Publication Chairs" members={publicationChairs} />
              <CommitteeTable title="Women in Engineering (WIE) Chairs" members={womenInEngineeringChairs} />
              <CommitteeTable title="Women in Engineering (WIE) Co-Chairs" members={womenInEngineeringCoChairs} />
              <CommitteeTable title="Hospitality & Logistics Chairs" members={hospitalityChairs} />
            </div>
          </div>

          {/* Local Organizing Committee Section */}
          <div>
            <SectionHeading title="Local Organizing Committee" />
            <CommitteeTable title="Local Organizing Committee" members={localOrganizingCommittee} />
          </div>
        </div>
      </section>
    </>
  );
}
