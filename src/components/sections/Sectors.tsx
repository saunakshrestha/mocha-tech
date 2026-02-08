"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Factory, Mountain, Wheat, Lightbulb } from "lucide-react";

import { sectors } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/sections/Section";

const icons = [Mountain, Factory, Wheat, Lightbulb] as const;

function AnimatedCounter({ 
  end, 
  duration = 2500,
  suffix = ""
}: { 
  end: number; 
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom smooth easing function (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeOutExpo * end);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Ensure we end at exact value
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-mocha-cream mb-2 tabular-nums transition-all duration-100">
      {count}{suffix}
    </div>
  );
}

export function SectorsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="sectors" className="bg-mocha-primary text-mocha-cream">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 mb-2"
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold sm:text-4xl">
          Industries We Serve
        </h2>
        <p className="text-lg text-mocha-cream/80 whitespace-nowrap overflow-hidden text-ellipsis">
          Precise CAD drafting and engineering documentation for project teams across Australia and worldwide.
        </p>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 60, label: "Cost Savings", suffix: "%" },
              { value: 5, label: "Years Experience", suffix: "+" },
              { value: 10, label: "Projects", suffix: "+" },
              { value: 24, label: "Hour Support", suffix: "/7" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center p-6 rounded-2xl bg-mocha-cream/10 border border-mocha-cream/20 hover:bg-mocha-cream/15 transition-all duration-300"
              >
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2000}
                />
                <div className="text-sm md:text-base font-medium text-mocha-cream/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="@container grid gap-4 @md:grid-cols-2 @xl:grid-cols-4">
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

