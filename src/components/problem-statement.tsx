"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { AlertCircle, Search, Map, FileText, XCircle } from 'lucide-react';

const problems = [
  {
    title: "Loss of Grave Locations",
    description: "Physical burial markers and informal tracking lead to the loss of exact grave locations over time.",
    icon: Map
  },
  {
    title: "Incomplete/Damaged Records",
    description: "Manual registers are prone to damage, loss, or incomplete data entry, making audits impossible.",
    icon: FileText
  },
  {
    title: "Difficulty in Audits",
    description: "No standardized system for identification makes verification and regulatory compliance a nightmare.",
    icon: XCircle
  },
  {
    title: "Navigation Challenges",
    description: "Families are often unable to locate graves after years, creating a disconnected experience.",
    icon: Search
  }
];

export function ProblemStatement() {
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
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive mb-6">
              <AlertCircle className="w-4 h-4" />
              Why This System Is Needed
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
              Most burial systems today rely on <span className="text-destructive font-serif italic">manual registers</span> and informal tracking.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
              We solve this by creating a structured, mapped, and verifiable burial infrastructure that stands the test of time.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {problems.map((problem, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl border border-destructive/10 bg-destructive/[0.02] flex flex-col gap-4 items-start hover:bg-destructive shadow-sm hover:shadow-destructive/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  <problem.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors duration-300">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

