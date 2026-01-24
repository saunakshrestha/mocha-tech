"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Section } from "@/components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    title: "Australian-Based Expertise",
    description:
      "Perth delivery mindset, aligned to mining and resources project realities.",
  },
  {
    title: "Safety & Sustainability Focus",
    description:
      "Compliance-first outputs designed to support safe, sustainable operations.",
  },
  {
    title: "Cost-Effective Outsourcing",
    description: "Reduce engineering overhead while keeping quality high.",
  },
  {
    title: "Collaborative Delivery",
    description:
      "Site visits, FAT coordination, and clear cross-discipline communication.",
  },
  {
    title: "Tools Mastery",
    description:
      "Power CAD, AutoCAD, ETAP, MicroStation, Navisworks and more as needed.",
  },
] as const;

export function WhyUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="why-us" className="bg-gradient-to-b from-orange-50/40 to-amber-50/30">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
          Why Choose MochaTech
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/65">
          “Why us” is the highest-leverage section for B2B trust.
        </p>
      </motion.div>

      <div className="@container mt-10 grid gap-6 @md:grid-cols-2 @xl:grid-cols-3">
        {reasons.map((r, idx) => (
          <motion.div
            key={r.title}
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
          >
            <Card className="group h-full border-orange-100/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="mt-3 text-xl">{r.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed text-foreground/65">
                {r.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Refactor suggestion (production): add auth + audit logs around quote requests to meet common
        enterprise security requirements.
      </p>
    </Section>
  );
}

