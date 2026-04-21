"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white relative overflow-hidden isolate transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-black" />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" 
      />
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.05] dark:opacity-10" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md mb-8 shadow-sm dark:shadow-none"
        >
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-slate-600 dark:text-slate-300">Future-Proof Burial Infrastructure</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-black tracking-tight md:text-7xl mb-8 max-w-5xl mx-auto leading-[1.05] text-balance"
        >
          Digitize Your <br/>
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-white/80 dark:to-white/40 bg-clip-text text-transparent">Cemetery Records</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-pretty"
        >
          Move from fragile manual registers to a structured, searchable, and reliable system. Start your digital transformation within weeks.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Button size="lg" variant="default" className="h-16 px-12 rounded-full text-xl font-bold group shadow-2xl shadow-primary/20 dark:shadow-primary/40 hover:shadow-primary/30 dark:hover:shadow-primary/60 transition-all hover:scale-105 active:scale-95">
            Request Demo
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-16 px-12 rounded-full text-xl font-bold border-slate-200 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/40 transition-all duration-300 group hover:scale-105 active:scale-95 text-slate-900 dark:text-white"
          >
            <Handshake className="mr-2 w-6 h-6 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


