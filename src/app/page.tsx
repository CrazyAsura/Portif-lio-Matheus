"use client";

import React from "react";
import { Box } from "@mui/material";

// Sections
import Hero from "@/app/ui/sections/hero";
import About from "@/app/ui/sections/about";
import Highlights from "@/app/ui/sections/highlights";
import Interests from "@/app/ui/sections/interests";
import Timeline from "@/app/ui/sections/timeline";
import Courses from "@/app/ui/sections/courses";
import Social from "@/app/ui/sections/social";

export default function Page() {
  return (
    <Box className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      <Hero />
      <About />
      <Highlights />
      <Interests />
      <Timeline />
      <Courses />
      <Social />
    </Box>
  );
}
