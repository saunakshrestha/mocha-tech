"use client";

import Slider from "react-slick";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonials } from "@/lib/data";
import { Section } from "@/components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="testimonials" className="bg-gradient-to-br from-[#2d1f1a] to-[#3d2a20] text-white">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Quotes are anonymized placeholders until you have written approvals.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10"
      >
        <Slider
          dots
          infinite
          arrows={false}
          autoplay
          autoplaySpeed={6000}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {testimonials.map((t) => (
            <div key={t.author} className="px-2">
              <Card className="border-white/10 bg-white/10 backdrop-blur text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Quote className="h-6 w-6 text-orange-300" />
                    Testimonial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed text-white/90">
                    "{t.quote}"
                  </p>
                  <p className="text-sm font-medium text-orange-200">— {t.author}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </motion.div>
    </Section>
  );
}

