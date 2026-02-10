"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Globe2, Shield, DollarSign, Clock, Users, TrendingUp, Wrench } from "lucide-react";

import { Section } from "@/components/sections/Section";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Cost-effective CAD drafting that frees you to focus on your core business.",
    },
    {
      icon: Globe2,
      title: "Offshore Drafting Support",
      description: "Cost-efficient Nepal-based CAD team working in coordination with Australian project requirements.",
    },
    {
      icon: Shield,
      title: "Precision & Reliability",
      description: "Accurate, error-free outputs meeting Australian (AS/NZS) and international standards.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Expert CAD solutions at a fraction of local costs without quality compromise.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick, reliable delivery to keep your projects on schedule.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Seamless team coordination with clear communication and design validation.",
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Flexible resources matching your project scope, small or large.",
    },
    {
      icon: Wrench,
      title: "Tools Mastery",
      description: "AutoCAD, Power CAD, ETAP, MicroStation, Navisworks—we've got you covered.",
    },
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-white to-orange-50/20">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-heading)] text-4xl font-bold text-[#2d1f1a] sm:text-5xl lg:text-6xl mb-8"
        >
          About MochaTech
        </motion.h2>
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-foreground/75 leading-relaxed max-w-3xl mx-auto"
        >
          Your <strong>trusted partner</strong> for professional AutoCAD drafting and electrical design. 
          Serving clients across <strong>Australia and Nepal</strong> with precise, efficient, budget-friendly solutions.
        </motion.p>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <Card className="h-full border-orange-100/50 bg-white hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d1f1a] mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-foreground/65 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
