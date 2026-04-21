"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the type for a single milestone
export interface Milestone {
  id: number;
  name: string;
  status: "complete" | "in-progress" | "pending";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

// Define the props for the AnimatedRoadmap component
interface AnimatedRoadmapProps extends React.HTMLAttributes<HTMLDivElement> {
  milestones: Milestone[];
  mapImageSrc: string; // Add a prop for the map background image
}

// Sub-component for a single milestone marker
const MilestoneMarker = ({ milestone }: { milestone: Milestone }) => {
  const statusClasses = {
    complete: "bg-green-500 border-green-700",
    "in-progress": "bg-blue-500 border-blue-700 animate-pulse",
    pending: "bg-muted border-border",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.5, delay: milestone.id * 0.1, ease: "easeOut" as const }}
      viewport={{ once: true, amount: 0.8 }}
      className="absolute flex items-center gap-4 cursor-default group"
      style={milestone.position}
    >
      <div className="relative flex h-10 w-10 items-center justify-center">
        <div
          className={cn(
            "absolute h-4 w-4 rounded-full border-2 z-10",
            statusClasses[milestone.status]
          )}
        />
        <div className="absolute h-full w-full rounded-full bg-primary/20 scale-100 group-hover:scale-125 transition-transform" />
        <div className="absolute h-full w-full rounded-full bg-primary/10 animate-ping group-hover:hidden" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white shadow-2xl transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {milestone.name}
      </div>
    </motion.div>
  );
};

// Main AnimatedRoadmap component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimatedRoadmap = React.forwardRef<HTMLDivElement, AnimatedRoadmapProps>(
  ({ className, milestones, mapImageSrc, ...props }, _ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    // Animate the path drawing based on scroll progress
    const pathLength = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

    return (
      <div
        ref={targetRef}
        className={cn("relative w-full max-w-6xl mx-auto py-24", className)}
        {...props}
      >
        {/* Background map image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-square md:aspect-video overflow-hidden rounded-3xl shadow-2xl border border-primary/10"
        >
          <Image
            src={mapImageSrc}
            alt="GraveLedger Digital Mapping"
            fill
            className="object-cover transition-transform duration-10000 hover:scale-110"
          />
        </motion.div>

        {/* SVG path for animation */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <motion.path
              d="M 100 500 Q 300 100 600 400 T 900 200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeDasharray="12 6"
              strokeLinecap="round"
              className="opacity-40"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Render each milestone */}
        <div className="absolute inset-0 z-30">
          {milestones.map((milestone) => (
            <MilestoneMarker key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </div>
    );
  }
);

AnimatedRoadmap.displayName = "AnimatedRoadmap";

export { AnimatedRoadmap };
