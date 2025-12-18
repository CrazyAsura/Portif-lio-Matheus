"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { TRAJECTORY_HIGHLIGHTS } from "@/app/lib/data";

export default function Highlights() {
  return (
    <section id="highlights" className="px-6 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <Typography variant="h3" className="font-serif font-bold mb-4 text-3xl sm:text-4xl">Foco e Atuação</Typography>
          <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">Pilares da minha formação e prática em psicologia</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAJECTORY_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{ 
                    height: 240,
                    objectFit: 'cover',
                    objectPosition: 'center' 
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" className="font-bold mb-2 text-gray-900">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="leading-relaxed">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
