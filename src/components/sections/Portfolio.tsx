"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion, useReducedMotion } from "framer-motion";
import { Eye } from "lucide-react";

import { portfolioProjects, portfolioImageIds } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/sections/Section";

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="portfolio" className="bg-mocha-cream/80 mocha-pattern">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-mocha-primary sm:text-4xl">
          Showcasing Our Top Designs
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/80">
          Example projects are anonymized/placeholder-friendly for a B2B site.
        </p>
      </motion.div>

      <div className="mt-10">
        <Masonry
          breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
          className="-ml-6 flex w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {portfolioProjects.map((p, idx) => {
            const illustrations = [
              '/illustrations/portfolio-mining.svg',
              '/illustrations/portfolio-electrical.svg',
              '/illustrations/portfolio-layout.svg',
              '/illustrations/portfolio-structure.svg',
            ];
            return (
            <motion.div
              key={p.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="mb-6"
            >
              <Card className="group relative overflow-hidden border-orange-100/50 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/30">
                {/* Illustration */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-orange-50/50 to-amber-50/50">
                  <Image
                    src={illustrations[idx % illustrations.length]}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-[#2d1f1a] shadow-lg">
                      <Eye className="h-4 w-4" />
                      View More
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#2d1f1a]">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground/80">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="bg-orange-50/70"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
          })}

        </Masonry>
      </div>
    </Section>
  );
}
