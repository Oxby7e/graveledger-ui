"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Users2, Settings, Milestone, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const phases = [
  {
    number: "01",
    title: "Cemetery Onboarding",
    description:
      "We conduct an initial consultation and gather all existing physical or digital records — paper registers, drawings, and burial certificates.",
    icon: Users2,
    duration: "Week 1–2",
  },
  {
    number: "02",
    title: "Digital Setup & Mapping",
    description:
      "Cloud environment configuration and centimeter-accurate geotagging of all existing burial plots using satellite and ground survey data.",
    icon: Settings,
    duration: "Week 3–5",
  },
  {
    number: "03",
    title: "Smart Pole Installation",
    description:
      "Physical identification poles with QR/NFC identity are installed at each grave — the physical anchor of the system.",
    icon: Milestone,
    duration: "Week 4–6",
  },
  {
    number: "04",
    title: "Staff Training & Go-Live",
    description:
      "Comprehensive training for on-ground staff. We stay on-site until operations run independently. Full handover documentation provided.",
    icon: Rocket,
    duration: "Week 6–8",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const guarantees = [
  "No disruption to daily operations",
  "Full historical record continuity",
  "Cloud-native and future-proof",
  "Operational within 8 weeks",
];

export function Pricing() {
  return (
    <section
      id="deployment"
      className="relative py-32 bg-card/30 section-rule overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-radial from-primary/6 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            Deployment Process
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-6xl leading-[1] mb-5">
            Live in{" "}
            <span className="text-gold-gradient italic">8 Weeks</span>.{" "}
            Not Months.
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            We handle every step of the transition. You focus on management —
            we handle the heavy lifting of digitization.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex-1 space-y-5"
          >
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="group flex gap-6 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Number */}
                <div className="shrink-0 text-center">
                  <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <phase.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-muted-foreground stat-number">
                      {phase.number}
                    </span>
                    <h3 className="font-bold text-lg">{phase.title}</h3>
                    <span className="ml-auto text-xs font-medium text-primary border border-primary/20 bg-primary/10 rounded-full px-3 py-0.5 shrink-0">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-72 xl:w-80 shrink-0"
          >
            <div className="sticky top-28 rounded-2xl border border-primary/20 bg-card p-8 glow-gold-sm">
              <h3 className="font-bold text-xl mb-6 text-foreground">
                What you get
              </h3>
              <div className="space-y-4 mb-8">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-light leading-snug">
                      {g}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="hr-gradient mb-8" />
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Request a deployment quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
