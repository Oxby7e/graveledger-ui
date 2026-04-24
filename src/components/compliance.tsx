"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FileCheck, Eye, Scale, UserPlus, LockKeyhole, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    title: "Role-Based Access Control",
    description:
      "Granular permissions — staff can enter records, only admins can delete. Every action is tied to an identity.",
    icon: UserPlus,
  },
  {
    title: "Complete Audit Trail",
    description:
      "Every change to every record is timestamped and attributed. No modification goes unlogged.",
    icon: FileCheck,
  },
  {
    title: "Controlled Public Visibility",
    description:
      "Only the fields you choose are publicly visible. Sensitive family data remains gated.",
    icon: Eye,
  },
  {
    title: "Municipal Compliance",
    description:
      "Reporting and data export formats meet the rigorous standards of institutional and municipal bodies.",
    icon: Scale,
  },
  {
    title: "Encrypted Data at Rest",
    description:
      "All burial records are stored with encryption. Data sovereignty for every organization.",
    icon: LockKeyhole,
  },
  {
    title: "Verification-Ready",
    description:
      "Records can be exported, hashed, and verified — providing irrefutable proof of burial history.",
    icon: ShieldCheck,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Compliance() {
  return (
    <section
      id="compliance"
      className="relative py-32 bg-background section-rule overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16 xl:gap-24">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[38%] lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              Trust & Compliance
            </div>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl leading-[1] mb-6">
              Security that{" "}
              <span className="text-gold-gradient italic">Institutions</span>{" "}
              Can Stand Behind
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
              GraveLedger is architected for accountability. Every layer of the
              system is designed around one question:{" "}
              <em>"Who did what, when, and can we prove it?"</em>
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm font-bold">Audit-Ready System</div>
                <div className="text-xs text-muted-foreground">
                  Zero-gap record chain from registration to access
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust items grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, x: 0 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
