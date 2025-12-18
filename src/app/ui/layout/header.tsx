"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box, 
  Container,
  useScrollTrigger
} from "@mui/material";
import { Brain, Menu, X, MessageCircle, Info, Map, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito de rolagem para mudar a aparência do header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) return;
    setIsMobileMenuOpen(open);
  };

  const navLinks = [
    { name: "Sobre", href: "#sobre", icon: <Info size={20} /> },
    { name: "Interesses", href: "#interests", icon: <Sparkles size={20} /> },
    { name: "Trajetória", href: "#trajetoria", icon: <Map size={20} /> },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease-in-out",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
          color: "text.primary"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: scrolled ? 0.5 : 1.5 }}>
            
            {/* Logo */}
            <Box 
              component={Link} 
              href="#hero" 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.5, 
                textDecoration: "none", 
                color: "inherit",
                "&:hover .logo-icon": { transform: "rotate(15deg)" }
              }}
            >
              <Box 
                className="logo-icon"
                sx={{ 
                  bgcolor: "emerald.600", 
                  color: "white", 
                  p: 0.8, 
                  borderRadius: "12px", 
                  display: "flex", 
                  transition: "transform 0.3s ease",
                  backgroundColor: "#059669" 
                }}
              >
                <Brain size={24} />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: -0.5, 
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  display: { xs: "none", sm: "block" }
                }}
              >
                Matheus Mendonça
              </Typography>
            </Box>

            {/* Menu Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  component={Link}
                  href={link.href}
                  sx={{ 
                    color: "text.primary", 
                    fontWeight: 600, 
                    textTransform: "none",
                    px: 2,
                    borderRadius: "10px",
                    "&:hover": { color: "#059669", bgcolor: "rgba(5, 150, 105, 0.05)" }
                  }}
                >
                  {link.name}
                </Button>
              ))}
              <Button
                component={Link}
                href="#social"
                variant="contained"
                startIcon={<MessageCircle size={18} />}
                sx={{ 
                  ml: 2,
                  bgcolor: "#059669", 
                  borderRadius: "50px", 
                  textTransform: "none",
                  fontWeight: 700,
                  px: 3,
                  "&:hover": { bgcolor: "#047857" },
                  boxShadow: "0 4px 14px 0 rgba(5, 150, 105, 0.3)"
                }}
              >
                Conectar
              </Button>
            </Box>

            {/* Ícone Mobile */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
              onClick={toggleMobileMenu(true)}
            >
              <Menu size={28} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Lateral (Material Design Mobile Menu) */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu(false)}
        PaperProps={{
          sx: { width: "280px", borderRadius: "24px 0 0 24px", p: 2 }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={toggleMobileMenu(false)}>
            <X size={24} />
          </IconButton>
        </Box>
        
        <Box sx={{ px: 2, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#059669" }}>Menu</Typography>
        </Box>

        <List sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton 
                component={Link} 
                href={link.href} 
                onClick={toggleMobileMenu(false)}
                sx={{ borderRadius: "16px", py: 1.5 }}
              >
                <Box sx={{ mr: 2, color: "text.secondary" }}>{link.icon}</Box>
                <ListItemText primary={link.name} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              component={Link}
              href="#social"
              variant="contained"
              onClick={toggleMobileMenu(false)}
              sx={{ 
                bgcolor: "#059669", 
                py: 1.5, 
                borderRadius: "16px", 
                fontWeight: 700,
                textTransform: "none"
              }}
            >
              Ver Redes Sociais
            </Button>
          </ListItem>
        </List>
      </Drawer>
      
      {/* Spacer para não deixar o conteúdo sumir atrás do header */}
      <Box sx={{ height: { xs: "70px", md: "90px" } }} />
    </>
  );
}