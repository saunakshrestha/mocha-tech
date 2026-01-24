"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/sections/DarkModeToggle";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <motion.header
      initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-orange-200/40 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="#home"
          className="flex items-center gap-2 font-[var(--font-heading)] text-base font-semibold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-400">
            <Coffee className="h-5 w-5 text-white" />
          </span>
          <span className="text-[#2d1f1a]">MochaTech Pty Ltd</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Get a Quote</a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-orange-50"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-orange-200/40 bg-white/95 backdrop-blur transition-[max-height] duration-300",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-foreground/70 hover:bg-orange-50 hover:text-foreground font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

