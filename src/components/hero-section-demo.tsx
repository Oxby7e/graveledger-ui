"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const HeroSectionDemo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center bg-background text-foreground overflow-hidden relative">
      {/* Dynamic Background Image with Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: [1.1, 1],
            opacity: 1
          }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          className="absolute inset-0"
        >
          <Image 
            src="/hero-scene.png" 
            alt="Digital Cemetery Infrastructure Visualization" 
            fill
            className="object-cover opacity-60 dark:opacity-40 grayscale-[20%] dark:grayscale-[40%]"
            priority
          />
        </motion.div>
        
        {/* Sophisticated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-10" />
      </div>

      {/* Container for the Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col items-center px-4 py-24 text-center relative z-20"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm shadow-xl shadow-primary/5"
        >
           GraveLedger Innovation
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-black tracking-tight md:text-6xl lg:text-9xl max-w-6xl text-balance leading-[0.95] drop-shadow-2xl"
        >
          Never Lose a <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent italic">Grave Again</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-10 max-w-3xl text-lg text-muted-foreground md:text-2xl text-pretty font-light leading-relaxed"
        >
          Digitizing burial records with <span className="text-foreground font-medium">smart pole identification</span>, GPS mapping, and instant scan access—built for cemeteries, municipalities, and families.
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg text-pretty opacity-80"
        >
          From paper registers to structured, searchable, and verifiable burial data—accessible in seconds.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95">
            Request Demo
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/5 hover:scale-105 active:scale-95 shadow-xl">
            See How It Works
          </Button>
        </motion.div>
      </motion.div>

      {/* Ambient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </div>
  );
};

export default HeroSectionDemo;

