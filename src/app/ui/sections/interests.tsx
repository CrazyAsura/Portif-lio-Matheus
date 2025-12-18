"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography, Paper } from "@mui/material";
import { INTERESTS } from "@/app/lib/data";
import { StaggerContainer, StaggerItem } from "@/app/ui/components/animations";

export default function Interests() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  return (
    <section id="interests" className="px-6 py-16 lg:py-20 bg-gray-50/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h3" className="font-serif font-bold mb-4 text-3xl sm:text-4xl">Áreas de Interesse</Typography>
        </div>
        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INTERESTS.map((item, index) => (
              <StaggerItem key={index}>
                <Paper
                  component={motion.div}
                  whileHover={{ y: -8 }}
                  elevation={activeHighlight === index ? 8 : 1}
                  onMouseEnter={() => setActiveHighlight(index)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  sx={{ 
                    p: { xs: 2.5, sm: 3 }, textAlign: 'center', height: '100%', borderRadius: '24px', 
                    transition: '0.3s', border: '1px solid', borderColor: activeHighlight === index ? '#10b981' : '#f3f4f6' 
                  }}
                >
                  <div className={`p-3 rounded-2xl inline-block mb-3 transition-colors ${activeHighlight === index ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                    {item.icon}
                  </div>
                  <Typography variant="body2" className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">{item.label}</Typography>
                </Paper>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
