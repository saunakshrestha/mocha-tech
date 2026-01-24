"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Globe2, Link2, Mail, MapPin, Phone } from "lucide-react";

import { founderProfile, founderImageId } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/sections/Section";

export function AboutFounderSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="about" className="bg-gradient-to-b from-white to-orange-50/30">
      <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, x: -20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
            Meet the Founder: Anjan<br className="hidden lg:inline" /> Shrestha
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            {founderProfile.summary}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="border-orange-100/50 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Perth-based contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span>{founderProfile.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>{founderProfile.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>{founderProfile.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-orange-500" />
                  <span>{founderProfile.contact.linkedin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-orange-500" />
                  <span>{founderProfile.contact.blog}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100/50 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Skills & recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground/80">Top Skills</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {founderProfile.topSkills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="bg-orange-50 text-orange-900 hover:bg-orange-100"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/80">Certifications / Awards</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      ...founderProfile.certifications,
                      ...founderProfile.honorsAwards,
                    ]
                      .slice(0, 6)
                      .map((s) => (
                        <Badge
                          key={s}
                          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                        >
                          <Award className="mr-1 h-3 w-3" />
                          {s}
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl opacity-20 blur-2xl"></div>
            <Image
              src="/founder.jpeg"
              alt={founderProfile.name}
              width={400}
              height={400}
              className="relative w-full h-auto rounded-3xl shadow-2xl object-cover ring-4 ring-white"
              priority
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
