"use client";
import React from "react";
import { Typography, Paper, Box, Chip } from "@mui/material";
import { GraduationCap, CheckCircle2, Clock } from "lucide-react";
import { COURSES } from "@/app/lib/data";
import { StaggerContainer, StaggerItem } from "@/app/ui/components/animations";

export default function Courses() {
  return (
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
  );
}
