"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

// const plans = [
//   {
//     name: "Trust Plan",
//     description:
//       "Digital infrastructure for independent cemeteries and local trusts.",
//     price: "₹2,000",
//     period: "per month",
//     features: [
//       "Limit: 100–500 graves",
//       "Digital memorial registry",
//       "QR code identification",
//       "Mobile scan support",
//       "Basic geotagging support",
//     ],
//     footer: "Extra graves → add-on pricing",
//     cta: "Basic Deployment",
//     ctaLink: "/contact",
//     highlighted: false,
//   },
//   {
//     name: "Growth Plan",
//     description:
//       "Universal mapping system for multi-location municipal networks.",
//     price: "₹5k–15k",
//     period: "per month",
//     features: [
//       "Multi-location management",
//       "Centimeter-accurate mapping",
//       "Hardware sensor integration",
//       "Advanced operational audits",
//       "Automated death reporting",
//     ],
//     footer: "Hardware costs separate",
//     cta: "Scale Infrastructure",
//     ctaLink: "/contact",
//     highlighted: true,
//   },
//   {
//     name: "Enterprise",
//     description: "Full-scale governance integration for states and metros.",
//     price: "API Based",
//     period: "custom volume pricing",
//     features: [
//       "Data usage + API access",
//       "Third-party integrations",
//       "Unlimited grave records",
//     ],
//     footer: "Priority 24/7 SLA support",
//     cta: "Contact Governance",
//     ctaLink: "/contact",
//     highlighted: false,
//   },
// ];
const plans = [
  {
    name: "Starter Plan",
    description: "Quick onboarding for small cemeteries and pilot deployments.",
    price: "₹2,000",
    period: "per month",
    features: [
      "Up to 300 active grave records",
      "Digital memorial registry",
      "QR code identification",
      "Mobile scan support",
      "Basic geotagging",
    ],
    footer: "Best for pilot projects and small trusts",
    cta: "Start Deployment",
    ctaLink: "/",
    highlighted: false,
  },
  {
    name: "Trust Plan",
    description:
      "Complete digital infrastructure for independent cemeteries and local trusts.",
    price: "₹4,000",
    period: "per month",
    features: [
      "Unlimited grave records (fair usage)",
      "Digital memorial registry",
      "QR/NFC integration",
      "Advanced geotagging & mapping",
      "Burial history & reuse tracking",
      "Basic analytics dashboard",
    ],
    footer: "Additional hardware & digitization billed separately",
    cta: "Deploy System",
    ctaLink: "/",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description:
      "Full-scale governance and smart city integration for municipalities and states.",
    price: "Custom",
    period: "volume-based pricing",
    features: [
      "API access & data integrations",
      "Municipal & third-party system sync",
      "Unlimited records & locations",
      "Advanced analytics & forecasting",
      "Priority SLA & dedicated support",
    ],
    footer: "Includes onboarding, training, and compliance support",
    cta: "Contact Sales",
    ctaLink: "/",
    highlighted: false,
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

export function Pricing() {
  return (
    <section
      id="deployment"
      className="relative py-32 bg-background section-rule overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-[48px] md:text-[64px] font-black tracking-tight leading-[1.1] mb-6">
            Scalable infrastructure.
            <br />
            <span className="italic">Clear costs.</span>
          </h2>
          <p className="text-muted-foreground font-normal text-lg max-w-2xl mx-auto">
            From individual family plots to national municipal networks,
            GraveLedger scales seamlessly.
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
              className={`flex flex-col p-10 rounded-[24px] border border-border/60 transition-all duration-300 relative overflow-hidden bg-background h-full ${
                plan.highlighted
                  ? "shadow-lg scale-[1.02] border-border z-10"
                  : "z-0"
              }`}
            >
              <div className="mb-10 min-h-[100px]">
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-12">
                <div className="text-[44px] font-black leading-none tracking-tight mb-2">
                  {plan.price}
                </div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold">
                  {plan.period}
                </div>
              </div>

              <div className="flex-1 space-y-5 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-muted-foreground stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                className={`w-full h-14 rounded-[12px] gap-2 text-sm font-bold transition-all duration-300 group ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90 border-none"
                    : "bg-background border-border hover:border-foreground"
                }`}
              >
                <Link href={plan.ctaLink}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
