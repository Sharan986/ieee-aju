"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/key-dates", label: "Key Dates" },
  { href: "/camera-ready", label: "Camera-Ready Submission Guidelines" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      {pathname === "/" && (
        <aside
          aria-label="Fraud alert warning"
          className="bg-red-600 text-white border-b border-red-700/80 shadow-xs"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base sm:text-lg shrink-0">🚨</span>
              <p className="text-xs sm:text-sm font-medium leading-snug">
                <strong className="font-extrabold uppercase tracking-wide bg-red-800/90 px-1.5 py-0.5 rounded text-[10px] sm:text-xs mr-1.5 inline-block">
                  Fraud Alert
                </strong>
                <span>
                  Warning against unauthorised JHICON-2027 website &amp; fake payment links.
                </span>
              </p>
            </div>
            <Link
              href="/public-notice"
              className="inline-flex items-center gap-1 font-bold text-xs sm:text-sm bg-white text-red-700 hover:bg-red-50 px-3 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap"
            >
              <span>Read Full Notice</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </aside>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/jhicon-logo.webp" alt="JHICON-2027 logo" className="h-13 w-auto rounded" />
            <span className="text-xl font-bold text-white tracking-wide hidden sm:inline">
              IEEE JHICON <span className="text-accent">2027</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${isActive
                      ? "bg-white/20 text-accent"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/register"
              className="ml-3 px-4 py-2 rounded bg-accent text-primary-dark text-sm font-bold hover:bg-accent-light transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${isActive
                      ? "bg-white/20 text-accent"
                      : "text-white/90 hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-3 py-2 rounded bg-accent text-primary-dark text-sm font-bold text-center hover:bg-accent-light transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
