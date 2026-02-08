"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Factory, Mountain, Wheat, Lightbulb } from "lucide-react";

import { sectors } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/sections/Section";

const icons = [Mountain, Factory, Wheat, Lightbulb] as const;

export function SectorsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="sectors" className="bg-mocha-primary text-mocha-cream">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold sm:text-4xl">
          Industries We Serve
        </h2>
        <p className="max-w-2xl text-mocha-cream/80">
          We deliver precise electrical CAD drafting and engineering documentation to support project teams across Australia and beyond, efficiently executed through our Nepal-based outsourcing model.
        </p>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid gap-4 rounded-2xl border border-mocha-cream/10 bg-mocha-cream/5 p-6 sm:grid-cols-3"
        >
          <div>
            <p className="text-3xl font-semibold">4+ Years</p>
            <p className="text-sm text-mocha-cream/75">Industry experience</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">50+ Projects</p>
            <p className="text-sm text-mocha-cream/75">Successfully delivered</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Perth, WA</p>
            <p className="text-sm text-mocha-cream/75">Local delivery mindset</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="@container mt-10 grid gap-4 @md:grid-cols-2 @xl:grid-cols-4">
        {sectors.map((s, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={s.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full border-mocha-cream/15 bg-mocha-cream/5 text-mocha-cream">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mocha-orange/25 text-mocha-cream">
                    <Icon />
                  </div>
                  <CardTitle className="text-base text-mocha-cream">{s.title}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

