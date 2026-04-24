"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Families & Individuals",
    description: "Honoring legacy for personal plots and small family trust grounds.",
    price: "$0",
    period: "forever",
    features: [
      "Up to 5 family users",
      "Digital memorial access",
      "Read-only record verification",
      "Mobile scan support",
    ],
    cta: "Start for Free",
    ctaLink: "/contact",
    highlighted: false,
  },
  {
    name: "Trusts & Operators",
    description: "Complete digital infrastructure for active cemetery management.",
    price: "$2k",
    period: "per month",
    features: [
      "Smart Pole hardware integration",
      "Unlimited staff accounts",
      "Centimeter-accurate geotagging",
      "Operational reporting & audits",
      "White-glove onboarding",
    ],
    cta: "Request Deployment",
    ctaLink: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise / Commercial",
    description: "High-volume data syncing tailored for government infrastructure.",
    price: "API Based",
    period: "custom volume pricing",
    features: [
      "Direct database synchronisation",
      "Full GraphQL / REST API access",
      "Bulk legacy data migration",
      "Custom compliance integrations",
      "Dedicated SLA support",
    ],
    cta: "Contact Enterprise",
    ctaLink: "/contact",
    highlighted: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Pricing() {
  return (
    <section
      id="deployment"
      className="relative py-32 bg-background section-rule overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Pricing & Tiers
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl leading-[1.1] mb-5">
            Scalable infrastructure.{" "}
            <span className="text-primary italic">Clear costs.</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            From individual family plots to national municipal networks, GraveLedger
            scales seamlessly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group flex flex-col p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                plan.highlighted
                  ? "border-primary/50 shadow-2xl shadow-primary/10 bg-card"
                  : "border-border/50 bg-background hover:border-primary/30 hover:bg-card/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/15 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed h-10">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black leading-none stat-number">
                    {plan.price}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase font-semibold">
                  {plan.period}
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                className={`w-full h-12 rounded-lg gap-2 text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted ? "shadow-primary/20 hover:shadow-primary/40" : ""
                }`}
              >
                <Link href={plan.ctaLink}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
