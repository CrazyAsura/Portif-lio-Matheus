"use client";
import React from "react";
import { motion } from "framer-motion";

export const StaggerContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    }}
  >
    {children}
  </motion.div>
);
