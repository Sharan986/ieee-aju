import type { Metadata } from "next";
import Link from "next/link";
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaTimesCircle,
  FaCheckCircle,
  FaLock,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Important Notice: Fraud Alert | IEEE JHICON 2027",
  description:
    "Official warning against unauthorised JHICON-2027 website and fraudulent payment requests. Issued by the JHICON-2027 Organising Committee, ARKA JAIN University.",
};

const instructions = [
  {
    title: "DO NOT MAKE ANY PAYMENT",
    description:
      "Do not make any payment through the suspected unauthorised website or any payment link associated with it.",
    isCritical: true,
  },
  {
    title: "Protect Confidential Information",
    description:
      "Do not share personal information, banking details, OTPs or other confidential information with unverified sources.",
    isCritical: false,
  },
  {
    title: "Verify Before Registering",
    description:
      "Do not proceed with conference registration or payment unless the details have been verified through the official JHICON-2027 website.",
    isCritical: false,
  },
  {
    title: "Report Suspicious Communications",
    description:
      "If you receive any suspicious communication or payment request, contact the JHICON-2027 Organising Committee for clarification before taking any action.",
    isCritical: false,
  },
];

export default function PublicNoticePage() {
  return (
    <>
      {/* Top Banner */}
      <section className="bg-linear-to-r from-red-800 via-red-700 to-primary-dark py-14 sm:py-18 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-red-500/20 via-transparent to-black/40 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs sm:text-sm font-semibold mb-4 text-red-100">
            <FaShieldAlt className="text-accent" />
            <span>Official Advisory • Fraud Alert</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            🚨 IMPORTANT NOTICE – FRAUD ALERT
          </h1>
          <p className="mt-4 text-base sm:text-xl text-red-100 max-w-2xl mx-auto font-medium">
            Warning Against Unauthorised JHICON-2027 Website
          </p>
        </div>
      </section>

      {/* Main Notice Content */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Primary Alert Callout */}
          <div className="bg-red-50 border-2 border-red-500/80 rounded-2xl p-6 sm:p-8 shadow-sm mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-600 text-white rounded-xl shrink-0 hidden sm:flex items-center justify-center">
                <FaExclamationTriangle className="text-2xl" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-red-900 flex items-center gap-2">
                  <FaExclamationTriangle className="text-red-600 sm:hidden inline" />
                  Warning Against Unauthorised JHICON-2027 Website
                </h2>
                <p className="text-sm sm:text-base text-red-950/90 leading-relaxed">
                  It has come to the notice of the <strong>JHICON-2027 Organising Committee</strong> that an unauthorised website is using the JHICON-2027 conference name and related information without official authorisation.
                </p>
                <p className="text-sm sm:text-base text-red-950/90 leading-relaxed font-medium">
                  All authors, researchers, faculty members, reviewers, participants and prospective attendees are hereby advised to remain cautious and verify the authenticity of all conference-related communications and payment requests.
                </p>
              </div>
            </div>
          </div>

          {/* Important Instructions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1.5 bg-red-600 rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">
                Important Instructions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {instructions.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border p-5 transition-all ${
                    item.isCritical
                      ? "bg-red-50/70 border-red-300 shadow-xs"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        item.isCritical
                          ? "bg-red-600 text-white"
                          : "bg-primary text-white"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-bold ${
                          item.isCritical ? "text-red-700 uppercase" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Website Verification Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1.5 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">
                Website Verification
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Official Website */}
              <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 relative flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide mb-3">
                    <FaCheckCircle className="text-emerald-600 text-lg" />
                    <span>Official Conference Website</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-2">
                    Official JHICON-2027 Portal
                  </h3>
                  <div className="bg-white border border-emerald-300 rounded-lg p-3 text-sm font-mono text-emerald-900 break-all select-all">
                    https://ieee-aju.vercel.app/
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    This is the only officially authorized portal for all announcements, call for papers, registrations, and official updates.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-emerald-200 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <FaLock className="text-emerald-600" />
                  <span>Verified &amp; Official Domain</span>
                </div>
              </div>

              {/* Unauthorised Website */}
              <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6 relative flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-2 text-red-800 font-bold text-sm uppercase tracking-wide mb-3">
                    <FaTimesCircle className="text-red-600 text-lg" />
                    <span>Suspected Unauthorised Website</span>
                  </div>
                  <h3 className="text-lg font-bold text-red-950 mb-2">
                    Unauthorised Clone / Fake Site
                  </h3>
                  <div className="bg-white border border-red-300 rounded-lg p-3 text-sm font-mono text-red-900 line-through break-all select-all">
                    https://jhicon-2027.ct.ws/
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-red-900 leading-relaxed font-medium">
                    Please note that the above-mentioned suspected website is <strong>not</strong> an officially authorised conference website. Do NOT make payments or provide information.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-red-200 flex items-center gap-2 text-xs font-bold text-red-700">
                  <FaTimesCircle className="text-red-600" />
                  <span>Unauthorised • Impersonation Alert</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
              <p>
                The Organising Committee requests everyone to rely exclusively on the official JHICON-2027 website and verified communications issued by the conference organisers.
              </p>
            </div>
          </div>

          {/* Official Sign-off & Contacts */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <h3 className="font-bold text-foreground text-lg mb-2">
              Need Verification or Have Doubts?
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              If you receive any doubtful communication, fee request, or email claiming to be from JHICON-2027, please verify directly with the Organising Committee before taking any action.
            </p>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-sm space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-800">
                <FaEnvelope className="text-accent shrink-0" />
                <span className="font-medium">Conference Email:</span>
                <a
                  href="mailto:jhicon.ieee@arkajainuniversity.ac.in"
                  className="text-primary hover:text-accent font-semibold underline underline-offset-2 break-all"
                >
                  jhicon.ieee@arkajainuniversity.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <FaEnvelope className="text-accent shrink-0" />
                <span className="font-medium">Organizing Chair:</span>
                <a
                  href="mailto:dr.aditya@arkajainuniversity.ac.in"
                  className="text-primary hover:text-accent font-semibold underline underline-offset-2 break-all"
                >
                  dr.aditya@arkajainuniversity.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <FaEnvelope className="text-accent shrink-0" />
                <span className="font-medium">Co-Organizing Chair:</span>
                <a
                  href="mailto:dr.kasinath@arkajainuniversity.ac.in"
                  className="text-primary hover:text-accent font-semibold underline underline-offset-2 break-all"
                >
                  dr.kasinath@arkajainuniversity.ac.in
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-sm text-gray-700">
                <p className="font-bold text-foreground">JHICON-2027 Organising Committee</p>
                <p className="text-gray-600">ARKA JAIN University</p>
                <p className="text-gray-500 text-xs">Jamshedpur, Jharkhand, India</p>
              </div>
              <div className="text-xs text-gray-500 italic">
                Your awareness and cooperation are highly appreciated.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
