"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { processSteps } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/sections/Section";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 30%", "end 70%"],
  });
  const lineFill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="process" className="bg-gradient-to-b from-white to-orange-50/40" ref={sectionRef}>
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
          Our Process (How It Works)
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/65">
          Clear steps reduce risk and rework—especially important for mining and
          brownfield work.
        </p>
      </motion.div>

      {/* Vertical ladder: track line + filling line + steps */}
      <div className="relative mt-12 flex flex-col gap-10 sm:gap-12">
        {/* Track (full height) - thinner, more modern */}
        <div
          className="absolute left-6 top-6 bottom-6 w-[3px] rounded-full bg-orange-100"
          aria-hidden
        />
        {/* Filling line: grows as you scroll */}
        <motion.div
          style={{ scaleY: reduceMotion ? 1 : lineFill, transformOrigin: "top" }}
          className="absolute left-6 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-orange-400 to-amber-400"
          aria-hidden
        />

        {processSteps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative flex gap-6 sm:gap-8"
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
          >
            {/* Node: circle with number (sits on the line) - modern gradient style */}
            <div className="flex w-12 flex-shrink-0 justify-center">
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.05 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-br from-orange-400 to-amber-400 text-lg font-bold text-white shadow-lg shadow-orange-200"
              >
                {i + 1}
              </motion.div>
            </div>

            {/* Card - cleaner, more spacious */}
            <div className="min-w-0 flex-1 pb-2">
              <Card className="h-full border-orange-100/50 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-[#2d1f1a]">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-relaxed text-foreground/70">
                  {step.description}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
