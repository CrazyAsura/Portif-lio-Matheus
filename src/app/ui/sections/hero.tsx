"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography, Chip, Paper, Button } from "@mui/material";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-emerald-400/5 rounded-b-[48px] -z-10"
        style={{ scale: heroScale, opacity: heroOpacity }}
      />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <Paper 
              elevation={12} 
              sx={{ 
                borderRadius: '50%', 
                overflow: 'hidden', 
                width: { xs: 'min(260px, 65vw)', sm: 320, md: 380 }, 
                height: { xs: 'min(260px, 65vw)', sm: 320, md: 380 }, 
                border: '4px solid white',
                flexShrink: 0
              }}
            >
              <img src="/profile.jpeg" alt="Matheus Mendonça Trindade" className="w-full h-full object-cover" />
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1 w-full"
          >
            <div className="flex justify-center lg:justify-start">
              <Chip 
                icon={<GraduationCap size={18} />} 
                label="Estudante de Psicologia — 9º Período" 
                color="success" 
                variant="outlined"
                sx={{ 
                  borderRadius: '16px', 
                  fontWeight: 600, 
                  bgcolor: 'rgba(16, 185, 129, 0.05)',
                  height: 'auto',
                  '& .MuiChip-label': { 
                    display: 'block', 
                    whiteSpace: 'normal', 
                    py: 1,
                    px: 2,
                    fontSize: { xs: '0.7rem', sm: '0.875rem' }
                  }
                }}
              />
            </div>

            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: 'min(2.2rem, 9vw)', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 800,
                fontFamily: 'serif',
                lineHeight: { xs: 1.2, sm: 1.1 },
                letterSpacing: '-0.02em',
                color: 'text.primary'
              }}
            >
              Psicologia <span className="text-emerald-600">com propósito e</span> humanização.
            </Typography>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sou <strong className="text-emerald-700">Matheus Mendonça Trindade</strong>, estudante de Psicologia. Criador de conteúdo sobre saúde mental, estilo de vida saudável e bem-estar através do esporte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start pt-4">
              <Button 
                variant="contained" 
                size="large"
                href="#trajetoria"
                endIcon={<ArrowRight size={20} />}
                sx={{ 
                  borderRadius: '50px', 
                  px: { xs: 4, sm: 5 }, 
                  py: { xs: 1.8, sm: 2 }, 
                  textTransform: 'none', 
                  fontSize: { xs: '1rem', sm: '1.1rem' }, 
                  bgcolor: '#059669', 
                  '&:hover': { bgcolor: '#047857' },
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                Explorar Trajetória
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="#social"
                sx={{ 
                  borderRadius: '50px', 
                  px: { xs: 4, sm: 5 }, 
                  py: { xs: 1.8, sm: 2 }, 
                  textTransform: 'none', 
                  fontSize: { xs: '1rem', sm: '1.1rem' }, 
                  color: '#374151', 
                  borderColor: '#d1d5db',
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                Vamos Conectar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
