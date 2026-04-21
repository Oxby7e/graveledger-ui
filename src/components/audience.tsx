"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Building2, Landmark, UserCircle2 } from 'lucide-react';

const audiences = [
  {
    title: "🏛️ Cemetery Trusts & Operators",
    description: "Replace manual registers, track graves accurately, and reduce operational errors.",
    icon: Building2
  },
  {
    title: "🏢 Municipal Corporations",
    description: "Centralized burial database, audit-ready reporting, and improved transparency.",
    icon: Landmark
  },
  {
    title: "👨‍👩‍👧 Families",
    description: "Locate graves easily, access records instantly, and preserve legacy digitally.",
    icon: UserCircle2
  }
];

export function Audience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="audience" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Designed for <span className="text-primary italic font-serif">Institutions and Communities</span></h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg">
            GraveLedger provides the tools needed for modern accountability and ease of access.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {audiences.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-3xl border border-border/50 bg-background hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

