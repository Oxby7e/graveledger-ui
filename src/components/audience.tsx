"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const audiences = [
  {
    emoji: "🏛️",
    title: "Cemetery Trusts & Operators",
    tagline: "Modernize your register system.",
    description:
      "Replace error-prone paper processes with a digital-first burial management workflow. Track every grave, every pole, every record — with accountability built in.",
    stats: [
      { value: "100%", label: "Record Traceability" },
      { value: "3×", label: "Faster Audits" },
    ],
    border: "border-blue-500/20",
    accent: "text-blue-400",
    bg: "hover:bg-blue-500/5",
  },
  {
    emoji: "🏢",
    title: "Municipal Corporations",
    tagline: "Compliance-ready from day one.",
    description:
      "Centralized burial database across all cemeteries in your jurisdiction. Generate regulatory reports instantly. Prove accountability to governing bodies.",
    stats: [
      { value: "Multi", label: "Site Control" },
      { value: "Real-time", label: "Reporting" },
    ],
    border: "border-primary/25",
    accent: "text-primary",
    bg: "hover:bg-primary/5",
    featured: true,
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Families",
    tagline: "Find your loved ones. Instantly.",
    description:
      "No more staff dependency, no manual directory searching. Scan a pole or type a name — and navigate directly to the grave with real-time precision.",
    stats: [
      { value: "<5s", label: "Grave Location" },
      { value: "Always", label: "Accessible" },
    ],
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    bg: "hover:bg-emerald-500/5",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Audience() {
  return (
    <section
      id="audience"
      className="relative py-32 bg-background section-rule overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            Who This Is For
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-6xl leading-[1] mb-5">
            Built for Three{" "}
            <span className="text-gold-gradient italic">Stakeholders</span>
          </h2>
          <p className="text-foreground font-light text-lg leading-relaxed">
            GraveLedger serves every party that touches a burial — from
            operations to oversight to family access.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col p-8 rounded-2xl border ${item.border} bg-card ${item.bg} transition-all duration-300 hover:shadow-xl ${item.featured ? "ring-1 ring-primary/30" : ""}`}
            >
              {item.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
                    Most Common
                  </span>
                </div>
              )}

              <div className="text-4xl mb-4">{item.emoji}</div>
              <div
                className={`text-xs font-bold uppercase tracking-widest ${item.accent} mb-2`}
              >
                {item.tagline}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-foreground/90 leading-relaxed font-light flex-1">
                {item.description}
              </p>

              {/* Stats row */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-border/50">
                {item.stats.map((stat, j) => (
                  <div key={j}>
                    <div
                      className={`text-2xl font-black stat-number ${item.accent}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
