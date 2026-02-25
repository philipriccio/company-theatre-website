"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Color logo scroll animation
    const logo = document.getElementById("color-logo");
    if (logo) {
      let hasBounced = false;
      
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 350;
        const progress = Math.min(scrollY / maxScroll, 1);
        const scale = 0.75 + progress * 0.3;
        const opacity = 0.5 + progress * 0.5;
        
        if (progress >= 1 && !hasBounced) {
          hasBounced = true;
          logo.style.transition = "transform 0.15s ease-out";
          logo.style.transform = "scale(1.12)";
          setTimeout(() => {
            logo.style.transition = "transform 0.2s ease-in-out";
            logo.style.transform = "scale(1.05)";
          }, 150);
        } else if (progress < 1) {
          hasBounced = false;
          logo.style.transition = "none";
          logo.style.transform = `scale(${scale})`;
        }
        
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
