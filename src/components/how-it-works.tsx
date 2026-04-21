"use client";

import { motion } from "framer-motion";
import { UserPlus, Milestone, MapPin, Search } from 'lucide-react';

const steps = [
  {
    title: "1. Register Burial",
    description: "Cemetery staff create a structured digital burial record with essential details.",
    icon: UserPlus,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "2. Install Smart Pole",
    description: "Each grave is assigned a unique pole with QR/NFC identity.",
    icon: Milestone,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "3. Link & Map",
    description: "The grave is tagged to its exact location within the cemetery map.",
    icon: MapPin,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "4. Scan or Search",
    description: "Families and administrators can locate graves instantly via scan or search.",
    icon: Search,
    color: "bg-rose-500/10 text-rose-500"
  }
];

export function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="how-it-works" className="py-24 bg-background border-t">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
            A Simple, <span className="text-primary italic font-serif">Ground-Ready</span> System
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            GraveLedger streamlines the entire burial lifecycle, from initial registration to long-term identification and navigation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-3xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

