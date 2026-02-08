import Link from "next/link";

import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-mocha-primary text-mocha-cream" role="contentinfo">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <p className="font-[var(--font-heading)] text-lg font-semibold">
            MochaTech Pty Ltd
          </p>
          <p className="mt-2 text-sm text-mocha-cream/75">
            Electrical CAD outsourcing for mining and resources delivery teams.
          </p>
          <p className="mt-6 text-xs text-mocha-cream/60">
            © 2026 MochaTech Pty Ltd. All rights reserved.
          </p>
        </div>
        <nav className="md:justify-self-end" aria-label="Footer navigation">
          <p className="text-sm font-medium">Links</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-mocha-cream/80 hover:text-mocha-cream"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}

