"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Globe, Cpu, Anchor, CheckCircle2 } from 'lucide-react';

const highlights = [
  "One pole = one grave = multiple digital records",
  "Works even after years of burial",
  "Acts as the source of truth on ground"
];

const features = [
  {
    title: "Permanent Ground Identity",
    description: "Ensures permanent identification on-ground that survives environmental changes and weather.",
    icon: Anchor
  },
  {
    title: "Instant Digital Access",
    description: "Embedded with unique QR/NFC identity for instant record retrieval via any smartphone scan.",
    icon: Cpu
  },
  {
    title: "Elimination of Manual Errors",
    description: "Removes dependency on manual registers and prevents duplicate or overlapping burial records.",
    icon: ShieldCheck
  },
  {
    title: "Universal Compatibility",
    description: "Works seamlessly across different cemetery structures and types of burial grounds.",
    icon: Globe
  }
];

export function USPPoles() {
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
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="pole-system" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            <Image 
              src="/smart-pole-technical.png" 
              alt="GraveLedger Technical Smart Pole System with Anti-Theft Base" 
              width={1200}
              height={1200}
              className="relative rounded-3xl shadow-2xl border border-border/50 transition-all duration-700 group-hover:scale-[1.01]"
              priority
            />
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
            >
              Our Unique USP
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight md:text-5xl mb-6"
            >
              Physical Identity for <span className="text-primary italic font-serif">Every Grave</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground font-light mb-10 leading-relaxed"
            >
              Each grave is marked with a durable identification pole, embedded with a unique QR/NFC identity. This ensures a physical-to-digital bridge that remains accurate for decades.
            </motion.p>
            
            <div className="space-y-4 mb-10">
              {highlights.map((point, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-muted-foreground">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex flex-col gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover/item:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

