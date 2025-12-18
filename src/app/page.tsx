'use client';

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Paper,
  Box,
} from "@mui/material";
import {
  Brain, Video, Sun, HeartPulse, Scale, Users, GraduationCap,
  ArrowRight, Accessibility, UsersRound, Briefcase, Target,
  CheckCircle2, Clock, AlertTriangle, Globe, Camera,
  Sparkles
} from "lucide-react";

const INTERESTS = [
  { icon: <Brain size={24} />, label: "Psicologia Clínica" },
  { icon: <Video size={24} />, label: "Produção de Conteúdo" },
  { icon: <Sun size={24} />, label: "Estilo de Vida Saudável" },
  { icon: <HeartPulse size={24} />, label: "Saúde Mental" },
  { icon: <Scale size={24} />, label: "Ética e Humanização" },
  { icon: <Users size={24} />, label: "Inclusão e Neurodiversidade" },
];

const TRAJECTORY_HIGHLIGHTS = [
  {
    img: "/estagio.jpeg",
    title: "Estágio e Prática Clínica",
    text: "Experiência prática supervisionada em clínica-escola, focando no acolhimento e manejo clínico ético."
  },
  {
    img: "/producao.jpeg",
    title: "Produção de Conteúdo",
    text: "Criação de psicoeducação acessível nas redes sociais, traduzindo conceitos complexos."
  },
  {
    img: "/descoberta.jpeg",
    title: "Vivência Acadêmica",
    text: "Participação ativa em grupos de estudo, construindo uma base teórica sólida."
  },
];

const TIMELINE_EVENTS = [
  {
    icon: <Accessibility size={24} />,
    title: "Estágio em Acompanhamento Terapêutico (AT)",
    period: "Atual",
    subtitle: "Contexto Escolar e Inclusivo – Criança com TEA",
    description: "Atuo como acompanhante terapêutico de uma criança diagnosticada com TEA em ambiente escolar, facilitando a inclusão e o desenvolvimento social.",
    active: true,
  },
  {
    icon: <Brain size={24} />,
    title: "Estágio Clínico Supervisionado",
    period: "9º Período",
    subtitle: "Clínica-Escola de Psicologia",
    description: "Realizo atendimentos clínicos individuais com adultos na clínica-escola, sob supervisão rigorosa, aplicando a abordagem fenomenológico-existencial.",
  },
  {
    icon: <UsersRound size={24} />,
    title: "Projeto de Intervenção Escolar",
    period: "Projeto Acadêmico",
    subtitle: "Ensino Fundamental II (9º Ano)",
    description: "Planejei e executei um projeto de intervenção focado no 'sentido de pertencimento escolar', promovendo rodas de conversa e atividades integrativas.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Técnico em Administração",
    period: "Formação Prévia",
    subtitle: "Experiência Profissional no Mercado",
    description: "Desenvolvimento de competências valiosas como planejamento estratégico, resolução de problemas complexos e trabalho em equipe multidisciplinar.",
  },
];

const COURSES = [
  { title: "Psicologia", institution: "Uninassau", status: "Em andamento", completed: false },
  { title: "Técnico em Administração", institution: "Senac", status: "Concluído", completed: true },
];

const StaggerContainer = ({ children }: { children: React.ReactNode }) => (
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

const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);

  return (
    <Box className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-emerald-400/5 rounded-b-[48px] -z-10"
          style={{ scale: heroScale, opacity: heroOpacity }}
        />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
            {/* Imagem primeiro no Mobile para dar contexto visual imediato */}
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
                <img src="/profile.jpeg" alt="Matheus" className="w-full h-full object-cover" />
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
                  transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' }
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
                  transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' }
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
                  transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' }
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
                  transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' }
                }}
              >
                <Target className="text-purple-600 mb-4" size={32} />
                <Typography variant="h6" className="font-bold mb-2">Equilíbrio</Typography>
                <Typography variant="body2" color="text.secondary">
                  Integração entre saúde mental e performance física (Jiu-jitsu/Corrida).
                </Typography>
              </Paper>

              <Box className="sm:col-span-2 p-1 bg-linear-to-r from-emerald-500 to-blue-500 rounded-[35px]">
                <Box sx={{ bgcolor: 'white', p: 3, borderRadius: '30px', textAlign: 'center' }}>
                  <Typography variant="body1" className="font-bold text-gray-800">
                    📍 Aracaju, SE | Estudante 9º Período
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </div>
        </div>
      </section>
      
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

      <section id="cursos" className="px-6 py-20 lg:py-28 bg-gray-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h4" className="font-serif font-bold mb-2 text-2xl sm:text-3xl">Formação Complementar</Typography>
          </div>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COURSES.map((course, index) => (
                <StaggerItem key={index}>
                  <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', height: '100%', position: 'relative', '&:hover': { borderColor: '#10b981' } }}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                       <GraduationCap size={20} className="text-emerald-600" />
                       {course.completed ? <CheckCircle2 size={20} className="text-emerald-500" /> : <Clock size={20} className="text-amber-500" />}
                    </Box>
                    <Typography variant="subtitle1" className="font-bold leading-tight mb-1">{course.title}</Typography>
                    <Typography variant="caption" color="text.secondary" display="block" mb={2}>{course.institution}</Typography>
                    <Chip label={course.status} size="small" color={course.completed ? "success" : "warning"} sx={{ fontSize: '10px', fontWeight: 700 }} />
                  </Paper>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

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
                  <Globe size={32} />
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
                  <Camera size={32} />
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
              sx={{ borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem', color: '#374151', borderColor: '#d1d5db' }}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

    
    </Box>
  );
}
