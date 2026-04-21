"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Map, FileText, Smartphone, BarChart3, RefreshCcw, ClipboardList } from 'lucide-react';

const featureGroups = [
  {
    title: "📍 Cemetery Mapping",
    description: "Section and block-based grave organization with map-based visualization of burial locations.",
    icon: Map
  },
  {
    title: "🧾 Digital Burial Records",
    description: "Structured and searchable registry with unique burial IDs and document attachment support.",
    icon: FileText
  },
  {
    title: "📲 QR / NFC Access",
    description: "Scan any grave to retrieve details instantly—no dependency on manual lookup.",
    icon: Smartphone
  },
  {
    title: "📊 Admin Dashboard",
    description: "Burial tracking, reporting, section-wise occupancy insights, and data export for audits.",
    icon: BarChart3
  },
  {
    title: "🔄 Pole Lifecycle Management",
    description: "Pole assignment and installation tracking with replacement history and audit trail.",
    icon: RefreshCcw
  },
  {
    title: "🏛️ Multi-Site Control",
    description: "Manage multiple cemeteries from a single centralized headquarters dashboard.",
    icon: ClipboardList
  }
];

export function FeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Built for Real-World <br/><span className="text-primary italic font-serif">Cemetery Operations</span></h2>
            <p className="text-muted-foreground font-light text-lg">
              A comprehensive system designed to replace manual processes with structured digital workflows.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {featureGroups.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex flex-col gap-4 p-8 rounded-3xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

