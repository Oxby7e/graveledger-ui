"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "2M+", label: "Graves Unlocated Annually" },
  { value: "68%", label: "Cemeteries Still Paper-Based" },
  { value: "40yr", label: "Average Record Lifespan" },
  { value: "0", label: "Standard Identification System" },
];

const HeroSectionDemo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden bg-background">
      {/* ── Full-bleed background ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-scene.png"
            alt="Digital Cemetery Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Layered overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40 z-10" />
        {/* Dark top-left atmospheric shadow */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-primary/5 to-transparent z-10" />
      </div>



      {/* ── Hero content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center flex-1 px-4 pt-32 pb-20 text-center container mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            GraveLedger — Infrastructure for the Sacred
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-black tracking-tight md:text-7xl lg:text-[7.5rem] leading-[0.92] max-w-6xl text-balance text-foreground"
        >
          Honoring{" "}
          {/* <span className="text-gold-gradient italic">Every Legacy.</span> */}
          <br />
          <span>Legacies through</span>{" "}
          <span className="shimmer-text italic">Digital Mapping.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-base md:text-xl text-foreground/90 font-light leading-relaxed text-pretty"
        >
          Seamlessly digitizing cemetery records and providing interactive
          mapping for a sacred, intuitive experience. Bringing the past into the
          future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 h-14 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-300 hover:gap-3"
          >
            See How It Works
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#pole-system"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 backdrop-blur-md px-8 h-14 text-base font-bold text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            Explore Smart Poles
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
        </motion.div>
      </motion.div>

      {/* ── Stats strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-20 w-full border-t border-border/50 bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
          {stats.map((stat, i) => (
            <div key={i} className="px-6 py-6 text-center">
              <div className="text-2xl md:text-4xl font-black text-gold-gradient stat-number">
                {stat.value}
              </div>
              <div className="text-xs text-foreground mt-1 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSectionDemo;
