"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { founderProfile } from "@/lib/data";
import { Section } from "@/components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="contact" className="bg-gradient-to-b from-white to-orange-50/40">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
          Contact Us
        </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="py-4">
          <div className="w-full bg-white rounded-3xl shadow-sm overflow-hidden h-[1050px]">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSesbb0C9HLKfwFul_YX85VpPgHTKdaUcqEIicxpBXnNwyGxYQ/viewform?embedded=true"
                width="100%"
                height="1080"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full h-[1080px] -mt-[15px]"
                title="MochaTech Contact Form"
              >
                Loading…
              </iframe>
          </div>
        </div>

        <div className="space-y-4 h-[1050px] flex flex-col">
          <Card className="border-orange-100/50 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Our Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-foreground/80">
              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-mocha-orange" />
                  <div>
                    <p className="font-semibold text-mocha-primary text-base">Nepal (Primary Operations & Team)</p>
                    <p className="text-sm text-muted-foreground">Main drafting and design hub</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-mocha-orange" />
                  <div>
                    <p className="font-semibold text-mocha-primary text-base">Australia (Client Coordination)</p>
                    <p className="text-sm text-muted-foreground">Local contact for project alignment and support</p>
                    <p className="mt-1">{founderProfile.contact.location}</p>
                  </div>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-mocha-orange" />
                  <span>{founderProfile.contact.phone}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-mocha-orange" />
                <span>{founderProfile.contact.email}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100/50 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Our Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                <Image
                  src="/extras/neptoaus.png"
                  alt="Nepal to Australia - Our global operations connecting Nepal's expert team with Australian clients"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                <span>🇳🇵 Nepal (Operations)</span>
                <span>→</span>
                <span>🇦🇺 Perth (Coordination)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200/70 bg-gradient-to-br from-orange-50 to-amber-50 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-mocha-primary">Need Something Else?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base text-foreground/85">
              <p>
                • Prefer direct communication? Contact us by phone or email to discuss your project requirements and timelines.
              </p>
              <p>
                • Have drawings or a scope ready? Send them to our email <strong className="text-mocha-orange">projects@mochatech.com.au</strong> for a detailed review and quotation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </motion.div>
    </Section>
  );
}

