"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Color logo scroll animation
    const logo = document.getElementById("color-logo");
    if (logo) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 400;
        const progress = Math.min(scrollY / maxScroll, 1);
        const scale = 0.9 + progress * 0.1;
        const opacity = 0.7 + progress * 0.3;
        logo.style.transform = `scale(${scale})`;
        logo.style.opacity = String(opacity);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    // Slideshow animation
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
      let currentSlide = 0;
      const slideInterval = 4000;

      const nextSlide = () => {
        const current = slides[currentSlide] as HTMLElement;
        if (current) {
          current.style.opacity = "0";
        }
        currentSlide = (currentSlide + 1) % slides.length;
        const next = slides[currentSlide] as HTMLElement;
        if (next) {
          next.style.opacity = "1";
        }
        const img = next?.querySelector("img") as HTMLElement;
        if (img) {
          img.style.animation = "none";
          setTimeout(() => {
            img.style.animation = "zoom 8s ease-out forwards";
          }, 50);
        }
      };

      const interval = setInterval(nextSlide, slideInterval);
      return () => clearInterval(interval);
    }
  }, []);

  return null;
}
