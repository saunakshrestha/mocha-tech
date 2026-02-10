"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { teamMembers } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/sections/Section";

export function TeamSection() {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused || teamMembers.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setUserInteracted(true);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 15000); // Resume auto-play after 15 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setUserInteracted(true);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 15000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setUserInteracted(true);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 15000);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    setUserInteracted(true);
  };

  return (
    <Section id="team" className="bg-gradient-to-b from-white to-orange-50/30">
      <div className="text-center mb-12">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl"
        >
          Our Team
        </motion.h2>
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Meet the team behind MochaTech’s CAD drafting and Electrical Engineering solutions.
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {/* Carousel Container with Peek Effect */}
        <div 
          className="relative overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => !userInteracted && setIsPaused(false)}
        >
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={reduceMotion ? undefined : { opacity: 0, x: 100 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full max-w-2xl"
              >
                <Card className="group border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6 md:p-8">
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-xl aspect-square md:aspect-auto md:h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image
                        src={teamMembers[currentIndex].image}
                        alt={teamMembers[currentIndex].name}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center space-y-4 min-h-[280px] md:min-h-0">
                      <div>
                        <h3 className="text-2xl font-bold text-[#2d1f1a] mb-2">
                          {teamMembers[currentIndex].name}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-900 border-blue-100">
                            {teamMembers[currentIndex].title}
                          </Badge>
                          <Badge variant="outline" className="border-slate-300 text-slate-700">
                            {teamMembers[currentIndex].experience}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-base text-foreground/70 leading-relaxed">
                        {teamMembers[currentIndex].description}
                      </p>

                      {teamMembers[currentIndex].skills && teamMembers[currentIndex].skills!.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-foreground/60 mb-2">Key Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {teamMembers[currentIndex].skills!.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Peek Indicators - Show there are more members */}
          {teamMembers.length > 1 && (
            <>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
                <div className="w-24 h-64 bg-gradient-to-r from-slate-100/60 to-transparent rounded-r-3xl blur-sm"></div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
                <div className="w-24 h-64 bg-gradient-to-l from-slate-100/60 to-transparent rounded-l-3xl blur-sm"></div>
              </div>
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        {teamMembers.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/95 backdrop-blur-sm border-slate-300 hover:bg-blue-50 hover:border-blue-400 shadow-lg z-20 h-10 w-10 md:h-12 md:w-12"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-slate-700" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/95 backdrop-blur-sm border-slate-300 hover:bg-blue-50 hover:border-blue-400 shadow-lg z-20 h-10 w-10 md:h-12 md:w-12"
              aria-label="Next team member"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-slate-700" />
            </Button>
          </>
        )}

        {/* Team Member Counter & Navigation */}
        {teamMembers.length > 1 && (
          <div className="flex flex-col items-center gap-4 mt-10 md:mt-8">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                Team Member {currentIndex + 1} of {teamMembers.length}
              </div>
              <Button
                variant={isPaused ? "default" : "outline"}
                size="sm"
                onClick={togglePause}
                className="rounded-full px-4 h-8"
              >
                {isPaused ? "▶ Play" : "⏸ Pause"}
              </Button>
            </div>
            
            <div className="flex justify-center gap-2 px-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 md:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2.5 md:w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
