"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Search, FileText, MapPin, Navigation } from "lucide-react";

const journey = [
  {
    action: "Enter name or scan pole",
    result: "Burial record retrieved in under 3 seconds",
    icon: Search,
    connector: true,
  },
  {
    action: "View structured record",
    result: "Name, date, section, document attachments",
    icon: FileText,
    connector: true,
  },
  {
    action: "See exact grave location",
    result: "Precise coordinate on cemetery digital map",
    icon: MapPin,
    connector: true,
  },
  {
    action: "Navigate within cemetery",
    result: "Real-time turn-by-turn to the grave",
    icon: Navigation,
    connector: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export function RealUseCase() {
  return (
    <section
      id="use-case"
      className="relative py-32 bg-card/40 section-rule overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            Visitor Flow
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-6xl leading-[1] mb-5">
            Locate a Grave in{" "}
            <span className="text-gold-gradient italic">Under 10 Seconds</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            No staff required. No manual directory. No wrong turns. Just scan,
            search, and navigate.
          </p>
        </motion.div>

        {/* Timeline journey */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          {journey.map((step, i) => (
            <motion.div key={i} variants={itemVariants} className="relative">
              <div className="flex items-start gap-6 md:gap-10">
                {/* Icon + connector column */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center text-primary shrink-0 glow-gold-sm">
                    <step.icon className="w-6 h-6" />
                  </div>
                  {step.connector && (
                    <div className="w-px flex-1 min-h-[3rem] bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-${step.connector ? "10" : "0"} flex-1`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        Step {i + 1}
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {step.action}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {step.result}
                    </div>
                  </div>
                  {step.connector && <div className="h-4" />}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
