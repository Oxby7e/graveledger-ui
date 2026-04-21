"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Can graves be pre-booked?",
    answer: "No. The system is designed for post-burial record management and identification, not plot ownership."
  },
  {
    question: "What if the pole is damaged?",
    answer: "Poles can be replaced while maintaining full history and record continuity. Our durable materials ensure long-lasting performance, but replacements are easy if needed."
  },
  {
    question: "Is NFC required?",
    answer: "No. QR-based access works universally with any smartphone camera. NFC is an optional addition for even faster interaction."
  },
  {
    question: "Can records be accessed publicly?",
    answer: "Only limited information is visible publicly. Full access to detailed records and documents is strictly controlled by the cemetery administrator."
  },
  {
    question: "Does this work for all types of burial systems?",
    answer: "Yes. The system is adaptable to different cemetery structures, religious practices, and municipal requirements."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Frequently Asked <span className="text-primary font-serif italic">Questions</span></h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`p-6 rounded-2xl bg-background border transition-all duration-300 cursor-pointer ${isOpen ? 'border-primary shadow-xl shadow-primary/5' : 'border-border/50 hover:border-primary/20'}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-muted-foreground font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


