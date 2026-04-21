"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Rocket, Settings, Milestone, Users2, CheckCircle } from 'lucide-react';

const deploymentSteps = [
  {
    title: "Cemetery-level Onboarding",
    description: "Initial consultation and gathering of existing physical or digital records.",
    icon: Users2
  },
  {
    title: "Digital Setup + Mapping",
    description: "Cloud environment configuration and centimeter-accurate geotagging of all burial plots.",
    icon: Settings
  },
  {
    title: "Smart Pole Identification",
    description: "Optional installation of physical identification poles with QR/NFC identity (The System USP).",
    icon: Milestone
  },
  {
    title: "Staff Training",
    description: "Comprehensive training for on-ground staff to manage records and assist visitors.",
    icon: Rocket
  }
];

export function Pricing() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="deployment" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">Simple Deployment, <br/><span className="text-primary italic font-serif">Scalable Impact</span></h2>
            <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
              Operational within weeks, not months. We handle the heavy lifting of digitization so you can focus on management.
            </p>
            <div className="space-y-4">
               {[
                 "No disruption to daily operations",
                 "Full historical record continuity",
                 "Cloud-native and future-proof"
               ].map((text, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 + 0.5 }}
                   className="flex items-center gap-3"
                 >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">{text}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {deploymentSteps.map((step, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
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

