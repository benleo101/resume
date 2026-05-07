"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/#about", label: "เกี่ยวกับ" },
  { href: "/#experience", label: "ประสบการณ์" },
  { href: "/#education", label: "การศึกษา" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contact", label: "ติดต่อ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/85 px-6 py-4 backdrop-blur md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-3xl font-bold tracking-[0.08em] text-stone-900"
            onClick={() => setIsOpen(false)}
          >
            เรซูเม่
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-300 bg-white/80 text-stone-900 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 18 18M6 18 18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <div className="hidden flex-wrap items-center gap-5 text-xl font-medium text-stone-600 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-2 rounded-[1.5rem] border border-stone-200 bg-white/90 p-3 text-xl font-medium text-stone-700 shadow-[0_20px_60px_rgba(28,25,23,0.08)] md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 transition hover:bg-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
