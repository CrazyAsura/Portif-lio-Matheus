"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import { ArrowRight, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Social() {
  return (
    <section id="social" className="px-6 py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12 sm:mb-16 space-y-4 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">Vamos nos conectar?</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compartilho conteúdos sobre psicologia, saúde mental e meu percurso acadêmico. Ficarei feliz em trocar ideias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="https://www.linkedin.com/in/matheusadmpsic/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Linkedin size={32} />
              </div>
              <div>
                <Typography variant="h6" className="font-bold">LinkedIn</Typography>
                <Typography variant="body2" color="text.secondary">Conecte-se para oportunidades profissionais.</Typography>
              </div>
              <ArrowRight size={24} className="ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            href="https://www.instagram.com/matheusmt_bjj?igsh=MXBoaXMyYmI1NjYxNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                <Instagram size={32} />
              </div>
              <div>
                <Typography variant="h6" className="font-bold">Instagram</Typography>
                <Typography variant="body2" color="text.secondary">Conteúdo diário sobre psicologia e bem-estar.</Typography>
              </div>
              <ArrowRight size={24} className="ml-auto text-gray-400 group-hover:text-pink-600 transition-colors duration-300" />
            </div>
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="contained" 
            size="large"
            href="mailto:matheus.m.trindade@outlook.com"
            startIcon={<Mail size={20} />}
            sx={{ borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem', bgcolor: '#059669', '&:hover': { bgcolor: '#047857' } }}
          >
            Enviar E-mail
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            href="https://wa.me/5579996680000"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MessageCircle size={20} />}
            sx={{ borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem', color: '#374151', borderColor: '#d1d5db', '&:hover': { borderColor: '#059669', color: '#059669' } }}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
