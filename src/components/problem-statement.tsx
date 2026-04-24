"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TrendingDown, FileX, MapPinOff, UserX } from "lucide-react";

const crises = [
  {
    stat: "68%",
    label: "of cemeteries have no digital system",
    detail:
      "Paper registers remain the primary — often only — source of burial information in most municipalities.",
    icon: FileX,
    color: "from-red-500/10 to-red-500/5",
    borderColor: "border-red-500/20",
    statColor: "text-red-400",
  },
  {
    stat: "1 in 3",
    label: "records are incomplete or inaccurate",
    detail:
      "Manual data entry errors, torn pages, and water-damaged registers leave families and administrators without answers.",
    icon: TrendingDown,
    color: "from-orange-500/10 to-orange-500/5",
    borderColor: "border-orange-500/20",
    statColor: "text-orange-400",
  },
  {
    stat: "40+ yrs",
    label: "before physical markers deteriorate",
    detail:
      "Without a digital anchor, grave markers fade, fall, or are relocated — severing the only identity link.",
    icon: MapPinOff,
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-500/20",
    statColor: "text-amber-400",
  },
  {
    stat: "0 std.",
    label: "global identification protocol exists",
    detail:
      "No universal format, no interoperability, no way to verify burial records across institutions.",
    icon: UserX,
    color: "from-rose-500/10 to-rose-500/5",
    borderColor: "border-rose-500/20",
    statColor: "text-rose-400",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function ProblemStatement() {
  return (
    <section
      id="problem"
      className="relative py-32 bg-background overflow-hidden section-rule"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-destructive/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-destructive mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
            The Crisis We Solve
          </div>

          <h2 className="text-3xl font-black tracking-tight md:text-6xl leading-[1] text-balance mb-6">
            Burial infrastructure is{" "}
            <span className="italic text-destructive">broken</span> and{" "}
            <span className="italic text-destructive">invisible</span>.
          </h2>

          <p className="text-lg text-foreground font-light leading-relaxed">
            Across governments, religious institutions, and private cemeteries —
            the systems for recording who is buried, where, and in what
            condition are failing silently. Families are losing legacies.
            Administrators are losing accountability.
          </p>
        </motion.div>

        {/* Crisis cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {crises.map((crisis, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`relative group p-8 rounded-2xl border ${crisis.borderColor} bg-gradient-to-br ${crisis.color} overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {/* Oversized icon background */}
              <crisis.icon className="absolute -right-6 -bottom-6 w-32 h-32 text-current opacity-[0.04] group-hover:opacity-[0.07] transition-opacity" />

              <div className="relative z-10">
                <div
                  className={`text-5xl md:text-6xl font-black ${crisis.statColor} stat-number mb-3 leading-none`}
                >
                  {crisis.stat}
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {crisis.label}
                </h3>
                <p className="text-sm text-foreground/90 leading-relaxed font-light">
                  {crisis.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transitional statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <hr className="hr-gradient mb-12" />
          <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed text-balance">
            GraveLedger replaces the fragile paper-and-memory system with a
            structured, mapped, and{" "}
            <span className="text-gold-gradient font-semibold">
              permanently verifiable burial infrastructure
            </span>{" "}
            that stands the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
