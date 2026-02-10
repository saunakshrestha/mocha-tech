"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { heroCarouselImages } from "@/lib/data";
import { Button } from "@/components/ui/button";

const CAROUSEL_INTERVAL_MS = 3000;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 50]);

  React.useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroCarouselImages.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(t);
  }, [reduceMotion]);

  return (
    <section
      id="home"
      className="coffee-texture relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12 md:pt-20"
    >
      {/* Soft organic blob shapes - modern 2024/25 style like Akaru */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-200/30 to-amber-100/20 blur-3xl" />
        <div className="absolute right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-100/25 to-orange-50/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 md:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: copy + CTAs */}
        <motion.div
          style={reduceMotion ? undefined : { y }}
          className="order-2 lg:order-1"
        >
          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-[var(--font-heading)] text-3xl font-bold leading-[1.2] tracking-tight text-[#2d1f1a] sm:text-4xl lg:text-[2.75rem]"
          >
            Cost‑Effective CAD Drafting & Electrical Engineering Solutions
          </motion.h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-base leading-relaxed text-foreground/70 sm:text-lg lg:text-xl"
          >
            Expert AutoCAD drafting at 60% lower cost—offshore efficiency backed by local coordination, AS/NZS compliance, and detailed power system modelling.
          </motion.p>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-10 mb-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact">
                Get a Free Quote <ArrowRight />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: illustration */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <div className="relative flex items-center justify-center">
            <Image
              src="/illustrations/cad-work.svg"
              alt="CAD Engineering Work"
              width={600}
              height={450}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
