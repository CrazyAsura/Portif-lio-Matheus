import React from "react";
import {
  Brain, Video, Sun, HeartPulse, Scale, Users, Accessibility, 
  UsersRound, Briefcase, GraduationCap, CheckCircle2, Clock
} from "lucide-react";

export const INTERESTS = [
  { icon: <Brain size={24} />, label: "Psicologia Clínica" },
  { icon: <Video size={24} />, label: "Produção de Conteúdo" },
  { icon: <Sun size={24} />, label: "Estilo de Vida Saudável" },
  { icon: <HeartPulse size={24} />, label: "Saúde Mental" },
  { icon: <Scale size={24} />, label: "Ética e Humanização" },
  { icon: <Users size={24} />, label: "Inclusão e Neurodiversidade" },
];

export const TRAJECTORY_HIGHLIGHTS = [
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

export const TIMELINE_EVENTS = [
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

export const COURSES = [
  { title: "Psicologia", institution: "Uninassau", status: "Em andamento", completed: false },
  { title: "Técnico em Administração", institution: "Senac", status: "Concluído", completed: true },
];
