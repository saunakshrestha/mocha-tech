"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  FileSpreadsheet,
  Factory,
  ShieldCheck,
  Flame,
  ClipboardCheck,
} from "lucide-react";

import { services, serviceImageIds } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/sections/Section";

const icons = [
  Briefcase,
  FileSpreadsheet,
  Factory,
  ClipboardCheck,
  ShieldCheck,
  Flame,
] as const;

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="services" className="bg-gradient-to-b from-amber-50/30 to-white">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
          Our CAD Outsourcing Services
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/65">
          Services and process that help mining and resources teams deliver on
          scope and schedule.
        </p>
      </motion.div>

      <div className="@container mt-10 grid gap-6 @md:grid-cols-2 @xl:grid-cols-3">
        {services.map((s, idx) => {
          const Icon = icons[idx % icons.length];
          const illustrations = [
            '/illustrations/service-industrial.svg',
            '/illustrations/service-cad.svg',
            '/illustrations/service-manufacturing.svg',
            '/illustrations/service-planning.svg',
            '/illustrations/service-safety.svg',
            '/illustrations/service-automation.svg',
          ];
          return (
            <motion.div
              key={s.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            >
              <Card className="group h-full overflow-hidden border-orange-100/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/30">
                {/* Illustration */}
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                  <Image
                    src={illustrations[idx]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#2d1f1a]">{s.title}</CardTitle>
                  <CardDescription className="text-base">{s.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <Badge
                      key={b}
                      variant="secondary"
                      className="bg-orange-50 text-orange-900 hover:bg-orange-100"
                    >
                      {b}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
