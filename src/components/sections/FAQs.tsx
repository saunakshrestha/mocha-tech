"use client";

import { motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "@/components/sections/Section";

export function FAQsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="faqs" className="bg-gradient-to-b from-orange-50/30 to-white">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
          FAQs
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/65">
          An accessible accordion to answer objections quickly.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 rounded-3xl border border-orange-100/50 bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={f.q} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </Section>
  );
}

