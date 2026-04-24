"use client";

import { motion, Variants } from "framer-motion";
import { UserPlus, Milestone, MapPin, Search } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Register Burial",
    description:
      "Cemetery staff digitally register each burial with full structured data — name, date, section, and supporting documents.",
    icon: UserPlus,
    accent: "text-blue-400",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    step: "02",
    title: "Install Smart Pole",
    description:
      "A durable identification pole with a unique QR/NFC identity is embedded at the grave — creating a permanent physical anchor.",
    icon: Milestone,
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    step: "03",
    title: "Link & Map",
    description:
      "The burial record is geo-tagged to its exact location on the cemetery's centimeter-accurate digital map.",
    icon: MapPin,
    accent: "text-amber-400",
    border: "border-amber-500/20",
    glow: "group-hover:shadow-amber-500/10",
  },
  {
    step: "04",
    title: "Scan or Search",
    description:
      "Any family member or administrator locates graves instantly — by name, date, section, or by scanning the pole directly.",
    icon: Search,
    accent: "text-primary",
    border: "border-primary/20",
    glow: "group-hover:shadow-primary/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 bg-card/50 section-rule overflow-hidden"
    >
      {/* Subtle top-left glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            System Workflow
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-6xl leading-[1] mb-5">
            Operational in{" "}
            <span className="text-gold-gradient italic">Four Steps</span>
          </h2>
          <p className="text-foreground font-light text-lg leading-relaxed">
            From paper register to permanent digital infrastructure — without
            disrupting day-to-day operations.
          </p>
        </motion.div>

        {/* Step cards with connecting line */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group relative p-8 rounded-2xl border ${step.border} bg-card hover:shadow-2xl ${step.glow} transition-all duration-300`}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-12 h-12 rounded-xl border ${step.border} flex items-center justify-center bg-background group-hover:bg-primary/10 transition-colors`}
                  >
                    <step.icon className={`w-6 h-6 ${step.accent}`} />
                  </div>
                  <span
                    className={`text-5xl font-black ${step.accent} opacity-20 stat-number`}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-foreground/90 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
