import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/key-dates", label: "Key Dates" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
                <span>
                  Arka Jain University,<br />
                  Gamharia, Seraikela-Kharsawan,<br />
                  Jharkhand 832108, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="shrink-0 text-accent" />
                <a href="mailto:aiei2026@arkajainuniversity.ac.in" className="hover:text-accent transition-colors">
                  aiei2026@arkajainuniversity.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Branding */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">AIEI 2026</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              International Conference on AI Engineering and Innovation, organized
              by Arka Jain University in collaboration with IEEE.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-accent font-bold text-xs">
                AJU
              </div>
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-accent font-bold text-xs">
                IEEE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-white/60">
            © 2026 AIEI Conference. All rights reserved. | International Conference on AI Engineering and Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
