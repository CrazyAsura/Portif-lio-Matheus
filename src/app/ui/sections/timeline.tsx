"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typography, Paper, Box, Chip } from "@mui/material";
import { TIMELINE_EVENTS } from "@/app/lib/data";

export default function Timeline() {
  return (
    <section id="trajetoria" className="px-6 py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <Typography variant="h3" className="font-serif font-bold mb-4 text-3xl sm:text-4xl">Minha Jornada</Typography>
          <Typography variant="body1" className="text-gray-600">Experiências que moldam minha prática profissional</Typography>
        </div>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-emerald-500 before:via-emerald-200 before:to-transparent">
          {TIMELINE_EVENTS.map((event, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 md:mb-16 last:mb-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                {event.icon}
              </div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[calc(100%-60px)] md:w-[42%] ml-10 md:ml-0 transition-all"
              >
                <Paper 
                  elevation={2}
                  sx={{ 
                    p: { xs: 2.5, sm: 4 }, 
                    borderRadius: '24px', 
                    border: event.active ? '2px solid #10b981' : '1px solid #f3f4f6',
                    '&:hover': { boxShadow: '0 12px 25px -10px rgba(0,0,0,0.1)' }
                  }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="caption" className="font-bold text-emerald-600 uppercase tracking-widest">
                      {event.period}
                    </Typography>
                    {event.active && (
                      <Chip label="Atual" size="small" color="success" sx={{ height: 20, fontSize: 10, fontWeight: 800 }} />
                    )}
                  </Box>
                  <Typography variant="h6" className="font-bold leading-tight mb-2 text-gray-900 text-base sm:text-lg">{event.title}</Typography>
                  <Typography variant="subtitle2" className="text-emerald-700 font-semibold mb-3 text-sm">{event.subtitle}</Typography>
                  <Typography variant="body2" color="text.secondary" className="leading-relaxed text-sm sm:text-base">
                    {event.description}
                  </Typography>
                </Paper>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
