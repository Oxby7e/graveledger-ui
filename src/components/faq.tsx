"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Can graves be pre-booked?",
    answer:
      "No. GraveLedger is designed for post-burial record management and identification, not plot ownership or reservations. The system activates when a burial is registered.",
  },
  {
    question: "What happens if a pole is damaged or stolen?",
    answer:
      "The digital record is fully preserved in the cloud — the pole is only the physical access point. Replacement poles are re-linked to the same record with full history continuity. Our durable materials and anti-theft bases are designed to prevent this, but replacements are straightforward when needed.",
  },
  {
    question: "Is NFC required to use the system?",
    answer:
      "No. QR-based access works universally with any smartphone camera, no app required. NFC is an optional enhancement for instant tap-to-access interaction.",
  },
  {
    question: "Who can see burial record information publicly?",
    answer:
      "Cemetery administrators control visibility granularly. Only the fields they choose are publicly searchable. Full records, attachments, and sensitive data are gated by role-based access control.",
  },
  {
    question: "Does this work across different religious and burial systems?",
    answer:
      "Yes. GraveLedger is agnostic to burial tradition — it adapts to Islamic, Christian, Hindu, Jewish, municipal, and private cemetery structures. The core system is the physical pole + digital record link.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most cemeteries are fully operational within 6–8 weeks from onboarding. Small cemeteries with fewer than 500 active plots can go live in as little as 3 weeks.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 bg-background section-rule overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none rounded-full" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-72 xl:w-80 shrink-0"
          >
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                FAQ
              </div>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl leading-[1] mb-6">
                Common{" "}
                <span className="text-gold-gradient italic">Questions</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Answers to what cemetery operators, municipalities, and families
                ask most often.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/25 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
              >
                Contact us for more
              </Link>
            </div>
          </motion.div>

          {/* FAQ accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? "border-primary/30 bg-card shadow-lg shadow-primary/5"
                      : "border-border/50 bg-card/60 hover:border-primary/20"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4 px-7 py-5">
                    <h3
                      className={`font-bold text-base transition-colors ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
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
                        <p className="px-7 pb-6 text-muted-foreground font-light leading-relaxed text-sm">
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
      </div>
    </section>
  );
}
