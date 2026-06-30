import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Metadata } from "next";
import { QRCodeSVG } from "qrcode.react";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Register | JHICON-2027",
  description: "Register for the 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027).",
};

// TODO: Replace with actual Google Form URL before going live
const GOOGLE_FORM_URL = "https://forms.gle/mExaff6wb7spR9EU6";

const feeRows = [
  {
    category: "Students (UG/PG/PhD)",
    india: ["INR 6000", "INR 6500", "INR 7000", "INR 7500"],
    abroad: ["USD 100", "USD 125", "USD 150", "USD 175"],
  },
  {
    category: "Professional from Academia/Research Institute",
    india: ["INR 7000", "INR 7500", "INR 8000", "INR 8500"],
    abroad: ["USD 200", "USD 225", "USD 250", "USD 275"],
  },
  {
    category: "Professional from the Industry",
    india: ["INR 8500", "INR 9000", "INR 9500", "INR 10000"],
    abroad: ["USD 250", "USD 275", "USD 300", "USD 325"],
  },
  {
    category: "Attendee (Student/Academia/Industry)",
    india: ["INR 1200", "INR 1500", "INR 1800", "INR 2100"],
    abroad: ["USD 50", "USD 75", "USD 100", "USD 125"],
  },
] as const;

const indiaColumns = [
  "IEEE (Virtual Mode)",
  "IEEE (Physical Mode)",
  "Non-IEEE (Virtual Mode)",
  "Non-IEEE (Physical Mode)",
];

const abroadColumns = [
  "IEEE (Virtual Mode)",
  "IEEE (Physical)",
  "Non-IEEE (Virtual Mode)",
  "Non-IEEE (Physical Mode)",
];

const bankDetails = [
  { label: "Account Name", value: "ARKA JAIN UNIVERSITY" },
  { label: "Account No.", value: "20200019796624" },
  { label: "IFSC Code", value: "BDBL0002495" },
  { label: "Bank Name", value: "Bandhan Bank" },
  { label: "Branch", value: "Adityapur" },
  { label: "Swift Code", value: "BNDNINCC" },
] as const;

const upiQrValue =
  "upi://pay?pa=3217855a@bandhan&pn=ARKA%20JAIN%20UNIVERSITY&cu=INR";

export default function RegisterPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Registration</h1>
          <p className="mt-3 text-white/80 text-lg">
            Register for JHICON-2027
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Registration Fees Section */}
          <div className="mb-16">
            <SectionHeading
              title="Registration Fees"
              subtitle="At least one author per accepted paper must register to include the paper in the proceedings"
            />
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs">
              <table className="w-full min-w-[1100px] border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-primary-dark/20 px-6 py-4 text-left font-bold text-base" rowSpan={2}>
                      Category
                    </th>
                    <th className="border border-primary-dark/20 px-4 py-4 text-center font-bold text-base" colSpan={4}>
                      Participants from India
                    </th>
                    <th className="border border-primary-dark/20 px-4 py-4 text-center font-bold text-base" colSpan={4}>
                      Participants from Abroad
                    </th>
                  </tr>
                  <tr className="bg-gray-50 text-foreground border-b border-gray-200">
                    {indiaColumns.map((column) => (
                      <th key={column} className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-600 whitespace-pre-line text-sm">
                        {column}
                      </th>
                    ))}
                    {abroadColumns.map((column) => (
                      <th key={column} className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-600 whitespace-pre-line text-sm">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, idx) => (
                    <tr
                      key={row.category}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="border border-gray-200 px-6 py-4 font-semibold text-gray-700 whitespace-pre-line">
                        {row.category}
                      </td>
                      {row.india.map((value, index) => (
                        <td
                          key={`${row.category}-india-${index}`}
                          className="border border-gray-200 px-4 py-4 text-center text-gray-600 font-medium"
                        >
                          {value}
                        </td>
                      ))}
                      {row.abroad.map((value, index) => (
                        <td
                          key={`${row.category}-abroad-${index}`}
                          className="border border-gray-200 px-4 py-4 text-center text-gray-600 font-medium"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-400 text-center sm:text-left">
              * Note: All registration fees are inclusive of 18% GST.
            </p>
          </div>

          {/* Account Details Section */}
          <div className="mb-16">
            <SectionHeading
              title="Account & Payment Details"
              subtitle="Please transfer the registration fee to the bank account below or scan the UPI QR code"
            />
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 rounded-2xl border border-gray-200 bg-gray-50/50 p-8 sm:p-10 shadow-xs">
              <div>
                <h4 className="text-lg font-bold text-primary mb-6 border-b border-gray-200 pb-2">Bank Account Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bankDetails.map((detail) => (
                    <div key={detail.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-2xs hover:shadow-xs transition-shadow">
                      <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">{detail.label}</p>
                      <p className="mt-1 text-sm font-bold text-foreground break-all">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-xs">
                <p className="text-base font-bold text-foreground mb-4">Scan & Pay (UPI)</p>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <QRCodeSVG value={upiQrValue} size={220} level="M" includeMargin />
                </div>
                <p className="mt-4 text-xs font-semibold text-gray-500 break-all">UPI ID: <span className="text-primary">3217855a@bandhan</span></p>
              </div>
            </div>
          </div>

          {/* Registration CTA Section (Matches Sponsors CTA design) */}
          <div className="bg-linear-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Registration Portal</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
              Registration for JHICON-2027 is handled through Google Forms. Click the button below to proceed to the registration form. At least one author per accepted paper must register for the conference.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold hover:bg-accent-light transition-colors shadow-lg shadow-accent/25"
            >
              <FaExternalLinkAlt /> Open Registration Form
            </a>
            <p className="mt-4 text-xs text-white/50">
              You will be redirected to Google Forms in a new tab.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-sm text-primary font-medium hover:text-accent transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
