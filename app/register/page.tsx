import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Metadata } from "next";
import { QRCodeSVG } from "qrcode.react";

export const metadata: Metadata = {
  title: "Register | JHICON-2027",
  description: "Register for the 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027).",
};

// TODO: Replace with actual Google Form URL before going live
const GOOGLE_FORM_URL = "#";

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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <FaExternalLinkAlt className="text-accent text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Registration Portal
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Registration for JHICON-2027 will be handled through Google Forms.
              Click the button below to proceed to the registration form.
              At least one author per accepted paper must register for the conference.
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold hover:bg-accent-light transition-colors shadow-lg shadow-accent/25"
            >
              <FaExternalLinkAlt /> Open Registration Form
            </a>

            <p className="mt-6 text-xs text-gray-400">
              You will be redirected to Google Forms in a new tab.
            </p>

            {/* Registration Fee Table */}
            <div className="mt-12 text-left">
              <h3 className="text-lg font-bold text-primary mb-4 text-center">Registration Fees</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[1100px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="border border-gray-300 px-4 py-3 text-center text-base font-bold text-foreground" rowSpan={2}>
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-base font-bold text-foreground" colSpan={4}>
                        Participants from India
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-base font-bold text-foreground" colSpan={4}>
                        Participants from Abroad
                      </th>
                    </tr>
                    <tr className="bg-white">
                      {indiaColumns.map((column) => (
                        <th key={column} className="border border-gray-300 px-4 py-3 text-center font-medium text-foreground whitespace-pre-line">
                          {column}
                        </th>
                      ))}
                      {abroadColumns.map((column) => (
                        <th key={column} className="border border-gray-300 px-4 py-3 text-center font-medium text-foreground whitespace-pre-line">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row) => (
                      <tr key={row.category} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-4 text-center text-foreground font-medium whitespace-pre-line">
                          {row.category}
                        </td>
                        {row.india.map((value, index) => (
                          <td key={`${row.category}-india-${index}`} className="border border-gray-300 px-4 py-4 text-center text-foreground whitespace-pre-line">
                            {value}
                          </td>
                        ))}
                        {row.abroad.map((value, index) => (
                          <td key={`${row.category}-abroad-${index}`} className="border border-gray-300 px-4 py-4 text-center text-foreground whitespace-pre-line">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-foreground">
                Note: All registration fees are inclusive of 18% GST.
              </p>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <div>
                  <h4 className="text-lg font-bold text-primary text-center lg:text-left">Account Details</h4>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {bankDetails.map((detail) => (
                      <div key={detail.label} className="rounded-xl border border-gray-200 bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500">{detail.label}</p>
                        <p className="mt-1 text-sm font-semibold text-foreground break-all">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-5 text-center">
                  <p className="text-base font-bold text-foreground">Scan & Pay</p>
                  <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <QRCodeSVG value={upiQrValue} size={220} level="M" includeMargin />
                  </div>
                  <p className="mt-4 text-xs text-gray-500 break-all">UPI ID: 3217855a@bandhan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
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
