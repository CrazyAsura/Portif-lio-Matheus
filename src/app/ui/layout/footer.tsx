"use client";
import React from "react";
import Link from "next/link";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider, 
  Stack 
} from "@mui/material";
import { Brain, Linkedin, Instagram, AlertCircle } from "lucide-react";

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: "white", 
        borderTop: "1px solid", 
        borderColor: "rgba(0,0,0,0.06)",
        pt: 8, 
        pb: 4 
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={4}
          sx={{ mb: 6 }}
        >
          {/* Logo / Nome (Espelhando o Header) */}
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1.5,
              color: "text.primary" 
            }}
          >
            <Box 
              sx={{ 
                bgcolor: "#059669", 
                color: "white", 
                p: 0.8, 
                borderRadius: "12px", 
                display: "flex" 
              }}
            >
              <Brain size={24} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              Matheus Mendonça Trindade
            </Typography>
          </Box>

          {/* Redes Sociais */}
          <Stack direction="row" spacing={2}>
            <IconButton 
              component="a"
              href="https://www.linkedin.com/in/matheusadmpsic/"
              target="_blank"
              sx={{ 
                color: "text.secondary", 
                transition: "0.3s",
                "&:hover": { color: "#0077b5", bgcolor: "rgba(0, 119, 181, 0.05)" } 
              }}
            >
              <Linkedin size={24} />
            </IconButton>
            <IconButton 
              component="a"
              href="https://www.instagram.com/matheusmt_bjj?igsh=MXBoaXMyYmI1NjYxNA=="
              target="_blank"
              sx={{ 
                color: "text.secondary", 
                transition: "0.3s",
                "&:hover": { color: "#e1306c", bgcolor: "rgba(225, 48, 108, 0.05)" } 
              }}
            >
              <Instagram size={24} />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 6, opacity: 0.6 }} />

        {/* Aviso Ético e Direitos */}
        <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "center" }}>
          <Box 
            sx={{ 
              bgcolor: "#fffbeb", 
              border: "1px solid #fde68a", 
              borderRadius: "20px", 
              p: { xs: 2, sm: 3 }, 
              mb: 4,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2
            }}
          >
            <AlertCircle size={24} className="text-amber-600 shrink-0" />
            <Typography variant="caption" sx={{ color: "#92400e", fontWeight: 500, lineHeight: 1.6, textAlign: "left", fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>
              <strong>Aviso Ético:</strong> Este é um portfólio acadêmico. Matheus Mendonça é estudante de graduação em Psicologia (UniNassau) e suas atividades práticas ocorrem estritamente sob supervisão docente, conforme as diretrizes do CRP. Não realiza atendimentos clínicos autônomos.
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Matheus Mendonça • Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}