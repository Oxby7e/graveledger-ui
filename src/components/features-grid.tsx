"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Map,
  FileText,
  Smartphone,
  BarChart3,
  RefreshCcw,
  ClipboardList,
} from "lucide-react";

const features = [
  {
    title: "Cemetery Mapping",
    description:
      "Section and block-based grave organization with precise geo-tagged visualization — every burial has a coordinate.",
    icon: Map,
    size: "lg", // bento: large
    accent: "border-blue-500/20 hover:border-blue-500/40",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    title: "Digital Burial Records",
    description:
      "Structured, searchable registry with unique burial IDs, document attachments, and full history.",
    icon: FileText,
    size: "sm",
    accent: "border-primary/20 hover:border-primary/40",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    title: "QR / NFC Access",
    description:
      "Scan any grave pole to instantly retrieve its record — no app, no staff dependency, no manual search.",
    icon: Smartphone,
    size: "sm",
    accent: "border-emerald-500/20 hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    title: "Admin Dashboard",
    description:
      "Burial tracking, section occupancy, reporting, and data export — operational clarity for administrators.",
    icon: BarChart3,
    size: "sm",
    accent: "border-violet-500/20 hover:border-violet-500/40",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  },
  {
    title: "Pole Lifecycle Management",
    description:
      "Track pole assignment, installation status, and replacement history with full audit trail.",
    icon: RefreshCcw,
    size: "sm",
    accent: "border-amber-500/20 hover:border-amber-500/40",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    title: "Multi-Site Control",
    description:
      "Manage multiple cemeteries from a single centralized headquarters dashboard — built for scale.",
    icon: ClipboardList,
    size: "lg",
    accent: "border-rose-500/20 hover:border-rose-500/40",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesGrid() {
  const large = features.filter((f) => f.size === "lg");
  const small = features.filter((f) => f.size === "sm");

  const LargeIcon0 = large[0].icon;
  const LargeIcon1 = large[1].icon;

  return (
    <section id="features" className="relative py-32 bg-card/30 section-rule overflow-hidden">
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                Platform Capabilities
              </div>
              <h2 className="text-3xl font-black tracking-tight md:text-6xl leading-[1] mb-4">
                Built for{" "}
                <span className="text-gold-gradient italic">
                  Real-World Operations
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground font-light text-lg max-w-xs leading-relaxed text-right hidden md:block">
              Replacing manual cemetery management with structured digital workflows.
            </p>
          </div>
        </motion.div>

        {/* Bento layout: 2 large + 4 small */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Large card: Cemetery Mapping */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className={`group col-span-1 lg:col-span-2 p-10 rounded-2xl border ${large[0].accent} bg-card transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-blue-500/8 to-transparent rounded-full pointer-events-none" />
            <div
              className={`w-14 h-14 rounded-xl ${large[0].iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
            >
              <LargeIcon0 className={`w-7 h-7 ${large[0].iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{large[0].title}</h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base max-w-md">
              {large[0].description}
            </p>
          </motion.div>

          {/* Small cards */}
          {small.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`group p-8 rounded-2xl border ${feature.accent} bg-card transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* Large card: Multi-Site */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className={`group col-span-1 lg:col-span-2 p-10 rounded-2xl border ${large[1].accent} bg-card transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-rose-500/8 to-transparent rounded-full pointer-events-none" />
            <div
              className={`w-14 h-14 rounded-xl ${large[1].iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
            >
              <LargeIcon1 className={`w-7 h-7 ${large[1].iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{large[1].title}</h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base max-w-md">
              {large[1].description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
