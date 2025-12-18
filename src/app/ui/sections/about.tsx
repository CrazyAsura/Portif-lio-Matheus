"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typography, Paper, Box } from "@mui/material";
import { Brain, Briefcase, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="px-6 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full"
          >
            <Typography variant="overline" className="text-emerald-600 font-bold tracking-widest text-sm">
              Conheça Matheus
            </Typography>
            <Typography variant="h3" className="font-serif font-bold text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl">
              Unindo empatia, <span className="text-emerald-600">organização</span> e desenvolvimento humano.
            </Typography>
            
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed text-justify sm:text-left">
              <p>
                Sou Matheus Mendonça, tenho 24 anos, moro em Aracaju–SE e sou estudante de <strong>Psicologia (9º período)</strong>. Desde o ensino médio, busco compreender o comportamento humano e as emoções, o que me levou a escolher essa formação.
              </p>
              <p>
                Desenvolvi uma postura ética e humanizada, focada na escuta e no respeito às singularidades. Meus estágios e vivências acadêmicas ampliaram meu olhar sobre o indivíduo, fortalecendo valores como empatia e responsabilidade social.
              </p>
              <p>
                Paralelamente, cursei o <strong>Técnico em Administração</strong> para dominar gestão e processos. Essa base complementa minha prática na Psicologia, permitindo-me entender o comportamento humano no contexto do trabalho e em ambientes profissionais organizados.
              </p>
              <p>
                Além dos estudos, produzo conteúdo sobre saúde mental e rotina saudável. Integro minha vivência na psicologia com o esporte — <strong>jiu-jitsu, musculação e corrida</strong> — compartilhando conhecimento de forma ética e acessível.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full"
          >
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, sm: 4 }, bgcolor: '#f0fdf4', borderRadius: '32px', border: '1px solid #dcfce7',
                transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px -10px rgba(16,185,129,0.2)' }
              }}
            >
              <Brain className="text-emerald-600 mb-4" size={32} />
              <Typography variant="h6" className="font-bold mb-2">Escuta Clínica</Typography>
              <Typography variant="body2" color="text.secondary">
                Foco na ética e no cuidado com a saúde mental em diversas fases da vida.
              </Typography>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, sm: 4 }, bgcolor: '#eff6ff', borderRadius: '32px', border: '1px solid #dbeafe',
                transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px -10px rgba(37,99,235,0.2)' }
              }}
            >
              <Briefcase className="text-blue-600 mb-4" size={32} />
              <Typography variant="h6" className="font-bold mb-2">Visão ADM</Typography>
              <Typography variant="body2" color="text.secondary">
                Conhecimento técnico em gestão aplicado ao comportamento organizacional.
              </Typography>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, sm: 4 }, bgcolor: '#fff7ed', borderRadius: '32px', border: '1px solid #ffedd5',
                transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px -10px rgba(234,88,12,0.2)' }
              }}
            >
              <Sparkles className="text-orange-600 mb-4" size={32} />
              <Typography variant="h6" className="font-bold mb-2">Psicoeducação</Typography>
              <Typography variant="body2" color="text.secondary">
                Criação de conteúdo acessível e ético sobre saúde mental e estilo de vida.
              </Typography>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, sm: 4 }, bgcolor: '#f5f3ff', borderRadius: '32px', border: '1px solid #ede9fe',
                transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px -10px rgba(139,92,246,0.2)' }
              }}
            >
              <Target className="text-purple-600 mb-4" size={32} />
              <Typography variant="h6" className="font-bold mb-2">Equilíbrio</Typography>
              <Typography variant="body2" color="text.secondary">
                Integração entre saúde mental e performance física (Jiu-jitsu/Corrida).
              </Typography>
            </Paper>

            <Box className="sm:col-span-2 p-[2px] bg-linear-to-r from-emerald-500/20 via-emerald-500 to-blue-500/20 rounded-[35px]">
              <Box sx={{ bgcolor: 'white', p: 2.5, borderRadius: '33px', textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 1, sm: 3 } }}>
                <Typography variant="body2" className="font-bold text-gray-800 flex items-center gap-1">
                  <span className="text-emerald-600">📍</span> Aracaju, SE
                </Typography>
                <Box sx={{ width: '1px', height: '20px', bgcolor: 'gray.200', display: { xs: 'none', sm: 'block' } }} />
                <Typography variant="body2" className="font-bold text-gray-800 flex items-center gap-1">
                  <span className="text-emerald-600">🎓</span> UniNassau
                </Typography>
                <Box sx={{ width: '1px', height: '20px', bgcolor: 'gray.200', display: { xs: 'none', sm: 'block' } }} />
                <Typography variant="body2" className="font-bold text-gray-800 flex items-center gap-1">
                  <span className="text-emerald-600">✨</span> 9º Período
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
