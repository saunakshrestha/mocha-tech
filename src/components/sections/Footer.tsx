import Link from "next/link";

import { founderProfile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-mocha-primary text-mocha-cream" role="contentinfo">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-[var(--font-heading)] text-lg font-semibold">
            MochaTech Pty Ltd
          </p>
          <p className="text-sm text-mocha-cream/80">
            Electrical CAD and AutoCAD outsourcing from Nepal for Australia and global teams. Cost-effective CAD services with reliable delivery.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-medium">Quick Links</p>
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

        <div className="space-y-3 md:justify-self-end">
          <p className="text-sm font-medium">Contact</p>
          <div className="space-y-2 text-sm text-mocha-cream/80">
            <p>{founderProfile.contact.phone}</p>
            <p>{founderProfile.contact.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-mocha-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-mocha-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MochaTech Pty Ltd. All rights reserved.</p>
          <p>Electrical CAD outsourcing • AutoCAD • Nepal • cost-effective CAD services • global project teams</p>
        </div>
      </div>
    </footer>
  );
}

