"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Globe, Cpu, Anchor, CheckCircle2, Zap } from "lucide-react";

const highlights = [
  "One pole = one grave = one permanent source of truth",
  "Survives decades of environmental exposure",
  "Instantly scanned with any smartphone — no app required",
];

const features = [
  {
    title: "Permanent Ground Identity",
    description:
      "Anti-theft, weather-resistant pole anchored to the burial site — this is the physical ledger entry.",
    icon: Anchor,
  },
  {
    title: "Instant Digital Access",
    description:
      "QR and NFC embedded for zero-friction record retrieval from any device, any time.",
    icon: Cpu,
  },
  {
    title: "Error Elimination",
    description:
      "Removes the manual register chain entirely — no duplicate records, no location drift.",
    icon: ShieldCheck,
  },
  {
    title: "Universal Fit",
    description:
      "Adapts to Islamic, Christian, municipal, and private cemetery structures.",
    icon: Globe,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function USPPoles() {
  return (
    <section
      id="pole-system"
      className="relative py-32 bg-background overflow-hidden section-rule"
    >
      {/* Background gold glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/8 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-[45%] relative"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 animate-pulse-glow">
              <Image
                src="/smart-pole-technical.png"
                alt="GraveLedger Smart Identification Pole"
                width={1200}
                height={1200}
                className="w-full object-cover"
                priority
              />
              {/* Scan overlay detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-foreground">Pole ID: GL-A7-04821</div>
                    <div className="text-xs text-muted-foreground">Linked • Active • Last Scanned 2h ago</div>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[55%]"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                Our Core USP
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl font-black tracking-tight md:text-5xl lg:text-6xl leading-[1] mb-6"
            >
              The Physical Identity{" "}
              <span className="text-gold-gradient italic">
                Every Grave Deserves
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground font-light mb-10 leading-relaxed"
            >
              Every grave is fitted with a durable identification pole embedded
              with a unique QR/NFC code. This creates an{" "}
              <strong className="text-foreground font-semibold">
                unbreakable physical-to-digital link
              </strong>{" "}
              that survives decades — the missing piece in every burial system
              today.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4 mb-12">
              {highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground font-light leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Feature grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-border/50"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg border border-primary/20 bg-primary/5 group-hover:bg-primary/15 flex items-center justify-center text-primary shrink-0 transition-colors mt-0.5">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
