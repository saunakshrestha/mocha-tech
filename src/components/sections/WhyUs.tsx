"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Section } from "@/components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    title: "Cost-Effective Outsourcing",
    description:
      "Reduce engineering overhead without compromising quality—our Nepal-based team delivers expert CAD solutions at a fraction of local costs.",
  },
  {
    title: "Australian-Based Expertise",
    description:
      "Aligned with local standards, timelines, and expectations—ensuring project requirements are always met.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Quick, reliable delivery to keep your projects on schedule, without compromising accuracy.",
  },
  {
    title: "Collaborative Delivery",
    description:
      "Seamless coordination with your team, including reviews, design validation, and clear cross-discipline communication.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Flexible team size and resources to match project scope, whether small or large-scale.",
  },
  {
    title: "Tools Mastery",
    description:
      "Proficient in Power CAD, AutoCAD, ETAP, MicroStation, Navisworks, and other industry-standard tools as needed.",
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
    </Section>
  );
}

