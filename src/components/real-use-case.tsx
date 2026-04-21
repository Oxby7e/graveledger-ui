"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Search, FileText, MapPin, Navigation } from 'lucide-react';

const steps = [
  {
    title: "Enter Name or Scan Pole",
    description: "Instantly retrieve the burial record through a simple search or quick scan.",
    icon: Search
  },
  {
    title: "Retrieve Burial Record",
    description: "Access structured data including name, date, and document attachments.",
    icon: FileText
  },
  {
    title: "View Exact Grave Location",
    description: "See the precise geotagged location within the cemetery's digital map.",
    icon: MapPin
  },
  {
    title: "Navigate Within Cemetery",
    description: "Follow real-time navigation cues to find the grave with centimeter-level accuracy.",
    icon: Navigation
  }
];

export function RealUseCase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
    }
  };

  return (
    <section id="use-case" className="py-24 bg-background border-y">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Locate a Grave in <span className="text-primary italic font-serif">Seconds</span></h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg text-pretty">
             Experience a frictionless visitor journey. No dependency on staff. No manual searching. Fully accessible anytime, anywhere.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-12 z-0 origin-left" 
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative"
          >
            {steps.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center text-center p-6 space-y-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-background"
                >
                   <item.icon className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

