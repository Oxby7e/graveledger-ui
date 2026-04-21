"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FileCheck, Eye, Scale, UserPlus } from 'lucide-react';

const trustItems = [
  {
    title: "Role-Based Access Control",
    description: "Granular permissions for sensitive data—ensure only authorized staff can modify burial records.",
    icon: UserPlus
  },
  {
    title: "Complete Audit Trail",
    description: "Full history of every change made to a record—providing total accountability and transparency.",
    icon: FileCheck
  },
  {
    title: "Controlled Public Visibility",
    description: "Decide what information is public and what remains private, respecting family and institutional needs.",
    icon: Eye
  },
  {
    title: "Municipal Compliance",
    description: "Designed to meet the rigorous reporting and security standards of institutional and municipal operators.",
    icon: Scale
  }
];

export function Compliance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="compliance" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">Built for <span className="text-primary italic font-serif">Accuracy and Security</span></h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              System integrity is at the core of GraveLedger. We provide the security layer needed for sensitive burial data management.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {trustItems.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

