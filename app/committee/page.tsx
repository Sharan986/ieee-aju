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

const organizingCommittee: CommitteeMember[] = [
  {
    name: "Dr. Chenraj Roychand",
    role: "Chancellor & Chief Patron",
    affiliation: "Chancellor, AJU, Jharkhand",
    image: "/committee/chenraj_roychand.jpg",
  },
  {
    name: "Prof. (Dr.) Easwaran S. Iyer",
    role: "Chief Patron",
    affiliation: "Vice-Chancellor, AJU, Jharkhand",
    image: "/committee/easwaran_s_iyer.jpg",
  },
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
    image: "/committee/angad_tiwari.jpg",
  },
  {
    name: "Prof. (Dr.) S. S Razi",
    role: "Patron",
    affiliation: "Chairperson, AJU, Jharkhand",
  },
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
    name: "Dr. Arvind Kumar Pandey",
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
  },
  {
    name: "Prof. (Dr.) Xiaodong Liang",
    role: "Honorary Chair",
    affiliation: "University of Saskatchewan, Canada",
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
  },
  {
    name: "Prof. (Dr.) Ajit Kumar Barisal",
    role: "Honorary Chair",
    affiliation: "OUTR, Bhubaneswar",
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
  },
];

const generalChairs: CommitteeMember[] = [
  {
    name: "Dr. Aditya Prasad Padhy",
    role: "General Chair",
    affiliation: "AJU, Jharkhand, India",
    image: "/committee/aditya_prasad_padhy.jpg",
  },
];

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
    name: "Dr. Tridibesh Nag",
    role: "Technical Programme Committee Chair",
    affiliation: "Vice Chair, IEEE Kolkata section",
  },
  {
    name: "Dr. Susanta Ray",
    role: "Technical Programme Committee Chair",
    affiliation: "Secretary, IEEE Kolkata section",
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
  { name: "Dr. Veerpratap Meena", role: "Publication Chair", affiliation: "NIT, Jamshedpur" },
  { name: "Dr. Gajendra Kant Mishra", role: "Publication Chair", affiliation: "BIT, Mesra" },
  { name: "Prof. (Dr.) Sonia Riyat", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Shailesh Kumar", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Nidhi Dua", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Md Irfan Ahmed", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Amit Prakash Sen", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Binod Kumar Choudhary", role: "Publication Chair", affiliation: "AJU, Jharkhand" },
];

const womenInEngineeringChairs: CommitteeMember[] = [
  { name: "Dr. Susmita Kar", role: "WIE Chair", affiliation: "NIT, Rourkela" },
  { name: "Dr. Keerti Rai", role: "WIE Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Anupam Kumari", role: "WIE Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Taniya Ghosh", role: "WIE Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Sayantani De", role: "WIE Chair", affiliation: "AJU, Jharkhand" },
];

const hospitalityChairs: CommitteeMember[] = [
  { name: "Dr. Viranshu Kumar", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Dr. Monika Singh", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Aditi Keshari", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Sarita Srivastav", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
  { name: "Prof. Manjur Ansari", role: "Hospitality & Logistics Chair", affiliation: "AJU, Jharkhand" },
];

const localOrganizingCommittee: CommitteeMember[] = [
  { name: "Dr. Shailendra Kumar", affiliation: "AJU, Jharkhand" },
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

const organizingLeadership = [
  {
    name: "Dr. Chenraj Roychand",
    role: "Chancellor & Chief Patron",
    affiliation: "ARKA Jain University",
    image: "/committee/chenraj_roychand.jpg",
  },
  {
    name: "Prof. (Dr.) Easwaran S. Iyer",
    role: "Chief Patron",
    affiliation: "Vice-Chancellor, AJU, Jharkhand",
    image: "/committee/easwaran_s_iyer.jpg",
  },
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
    image: "/committee/angad_tiwari.jpg",
  },
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

const honoraryLeadership = [
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
    name: "Prof. (Dr.) Tarikul Islam",
    role: "Honorary Chair",
    affiliation: "Jamia Millia Islamia, New Delhi",
    image: "/committee/tarikul_islam.jpg",
  },
  {
    name: "Prof. (Dr.) Brij Bhooshan Gupta",
    role: "Honorary Chair",
    affiliation: "Asia University, Taiwan",
    image: "/committee/brij_bhooshan_gupta.jpg",
  },
];

const generalLeadership = [
  {
    name: "Dr. Aditya Prasad Padhy",
    role: "General Chair",
    affiliation: "AJU, Jharkhand, India",
    image: "/committee/aditya_prasad_padhy.jpg",
  },
];

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
          <SectionHeading title="Organizing Committee Leadership" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {organizingLeadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center group"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-primary/10 group-hover:border-accent transition-colors duration-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <span className="text-sm text-accent-dark font-semibold mt-1">
                  {leader.role}
                </span>
                <p className="text-xs text-gray-600 mt-2 max-w-xs">
                  {leader.affiliation}
                </p>
              </div>
            ))}
          </div>

          <SectionHeading title="Honorary Chairs" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {honoraryLeadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center group"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-primary/10 group-hover:border-accent transition-colors duration-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <span className="text-sm text-accent-dark font-semibold mt-1">
                  {leader.role}
                </span>
                <p className="text-xs text-gray-600 mt-2 max-w-xs">
                  {leader.affiliation}
                </p>
              </div>
            ))}
          </div>

          <SectionHeading title="General Chairs" />
          
          <div className="grid grid-cols-1 gap-8 mb-16 max-w-xs mx-auto">
            {generalLeadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center group"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-primary/10 group-hover:border-accent transition-colors duration-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <span className="text-sm text-accent-dark font-semibold mt-1">
                  {leader.role}
                </span>
                <p className="text-xs text-gray-600 mt-2 max-w-xs">
                  {leader.affiliation}
                </p>
              </div>
            ))}
          </div>

          <SectionHeading title="Patrons & Organizing Committee" />
          <div className="mb-16">
            <CommitteeTable title="Patrons & Organizing Committee" members={organizingCommittee} showRole />
          </div>

          <SectionHeading title="Honorary Chairs" />
          <div className="mb-16">
            <CommitteeTable title="Honorary Chairs" members={honoraryChairs} showRole />
          </div>

          <SectionHeading title="General Chairs" />
          <div className="mb-16">
            <CommitteeTable title="General Chairs" members={generalChairs} showRole />
          </div>

          <SectionHeading title="Technical Programme Committee" />
          <div className="mb-16">
            <CommitteeTable title="Technical Programme Committee Chairs" members={tpcChairs} showRole />
          </div>

          <SectionHeading title="Other Conference Committees" />
          <div className="space-y-12 mb-16">
            <CommitteeTable title="Finance Chairs" members={financeChairs} showRole />
            <CommitteeTable title="Industry Chairs" members={industryChairs} showRole />
            <CommitteeTable title="Publication Chairs" members={publicationChairs} showRole />
            <CommitteeTable title="Women in Engineering (WIE) Chairs" members={womenInEngineeringChairs} showRole />
            <CommitteeTable title="Hospitality & Logistics Chairs" members={hospitalityChairs} showRole />
          </div>

          <SectionHeading title="Local Organizing Committee" />
          <CommitteeTable title="Local Organizing Committee" members={localOrganizingCommittee} />
        </div>
      </section>
    </>
  );
}
