"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Quote {
  text: string;
  source: string;
}

const quotes: Quote[] = [
  {
    text: "ONE OF THE BEST PLAYS I'VE EVER SEEN",
    source: "Steve Paikin, TVO"
  },
  {
    text: "MUST SEE THEATRE. A MASTERCLASS IN ACTING",
    source: "Rick Mercer"
  },
  {
    text: "UNIQUE. COMPLEX. BRILLIANT",
    source: "The Arts Guild"
  },
  {
    text: "PAUL GROSS' BEST STAGE WORK TO DATE",
    source: "Robert Cushman, National Post"
  },
  {
    text: "THE WOMEN WHO KILL IN THIS THRILLER",
    source: "J. Kelly Nestruck, The Globe and Mail"
  }
];

// All production photos for the hero slideshow - pulling from ALL past production galleries
const slideshowImages = [
  // Production photos (newer production shots)
  { src: "/images/jerusalem-production-1.jpg", alt: "Jerusalem Production" },
  { src: "/images/jerusalem-production-2.jpg", alt: "Jerusalem Production" },
  { src: "/images/things-production-1.jpg", alt: "Things I Know to be True Production" },
  { src: "/images/john-production-1.jpg", alt: "John Production" },
  { src: "/images/festen-production-1.jpg", alt: "Festen Production" },
  { src: "/images/belleville-production-1.jpg", alt: "Belleville Production" },
  { src: "/images/through-the-leaves-production-1.jpg", alt: "Through the Leaves Production" },
  { src: "/images/about-production.jpg", alt: "Company Theatre Production" },
  { src: "/images/support-production.jpg", alt: "Company Theatre Production" },
  // Hero images from productions
  { src: "/images/things-i-know-to-be-true-hero.jpg", alt: "Things I Know to be True" },
  { src: "/images/through-the-leaves-hero.jpg", alt: "Through the Leaves" },
  // Original production promotional images
  { src: "/images/jerusalem-1.jpg", alt: "Jerusalem" },
  { src: "/images/john-1.jpg", alt: "John" },
  { src: "/images/domesticated-1.jpg", alt: "Domesticated" },
  { src: "/images/domesticated-2.jpg", alt: "Domesticated" },
  { src: "/images/seagull-1.jpg", alt: "The Seagull" },
  { src: "/images/seagull-2.jpg", alt: "The Seagull" },
  { src: "/images/belleville-1.jpg", alt: "Belleville" },
  { src: "/images/belleville-2.jpg", alt: "Belleville" },
  { src: "/images/speaking-in-tongues-1.jpg", alt: "Speaking in Tongues" },
  { src: "/images/speaking-in-tongues-2.jpg", alt: "Speaking in Tongues" },
  { src: "/images/festen-1.jpg", alt: "Festen" },
  { src: "/images/marion-bridge-1.jpg", alt: "Marion Bridge" },
  { src: "/images/the-test-1.jpg", alt: "The Test" },
  { src: "/images/through-the-leaves-1.jpg", alt: "Through the Leaves" },
  { src: "/images/a-whistle-in-the-dark-1.jpg", alt: "A Whistle in the Dark" }
];

// Generate random position for scattered letters
const getRandomPosition = () => ({
  x: (Math.random() - 0.5) * 800,
  y: (Math.random() - 0.5) * 400,
  rotate: (Math.random() - 0.5) * 90,
  scale: 0.5 + Math.random() * 0.5,
  opacity: 0
});

interface LetterProps {
  char: string;
  index: number;
  totalLetters: number;
  isScattered: boolean;
}

const AnimatedLetter = ({ char, index, totalLetters, isScattered }: LetterProps) => {
  const [randomPos] = useState(() => getRandomPosition());
  
  const targetX = isScattered ? randomPos.x : 0;
  const targetY = isScattered ? randomPos.y : 0;
  const targetRotate = isScattered ? randomPos.rotate : 0;
  const targetScale = isScattered ? randomPos.scale : 1;
  const targetOpacity = isScattered ? 0 : 1;

  return (
    <motion.span
      className="inline-block"
      initial={{
        x: randomPos.x,
        y: randomPos.y,
        rotate: randomPos.rotate,
        scale: randomPos.scale,
        opacity: 0
      }}
      animate={{
        x: targetX,
        y: targetY,
        rotate: targetRotate,
        scale: targetScale,
        opacity: targetOpacity
      }}
      transition={{
        duration: 0.8,
        delay: isScattered ? index * 0.02 : index * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ 
        willChange: "transform, opacity",
        whiteSpace: char === " " ? "pre" : "normal"
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default function AnimatedQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [phase, setPhase] = useState<"scattered" | "forming" | "displaying" | "exiting">("scattered");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentQuote = quotes[currentQuoteIndex];
  const letters = currentQuote.text.split("");

  const nextQuote = useCallback(() => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  }, []);

  // Slideshow effect - rotate every 6 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "scattered":
        // Letters are scattered, start forming after brief pause
        timeout = setTimeout(() => {
          setPhase("forming");
        }, 200);
        break;
      
      case "forming":
        // Letters forming into quote
        timeout = setTimeout(() => {
          setPhase("displaying");
        }, 1200);
        break;
      
      case "displaying":
        // Quote displayed, hold for reading
        timeout = setTimeout(() => {
          setPhase("exiting");
        }, 3500);
        break;
      
      case "exiting":
        // Letters scatter away
        timeout = setTimeout(() => {
          nextQuote();
          setPhase("scattered");
        }, 800);
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, nextQuote]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-2000"
            style={{ opacity: index === currentSlideIndex ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover animate-zoom"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 sm:px-8">
        {/* Quote Text */}
        <div className="relative min-h-[200px] sm:min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 
                className="text-white font-bold uppercase leading-[0.9] tracking-tight drop-shadow-lg"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Impact', 'Arial Narrow', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 5.5rem)",
                  letterSpacing: "0.02em",
                  textShadow: "0 4px 20px rgba(0,0,0,0.8)"
                }}
              >
                {letters.map((char, index) => (
                  <AnimatedLetter
                    key={`${currentQuoteIndex}-${index}`}
                    char={char}
                    index={index}
                    totalLetters={letters.length}
                    isScattered={phase === "scattered" || phase === "exiting"}
                  />
                ))}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Source */}
        <AnimatePresence mode="wait">
          {(phase === "displaying" || phase === "exiting") && (
            <motion.div
              key={`source-${currentQuoteIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase === "displaying" ? 1 : 0, y: phase === "displaying" ? 0 : -20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: phase === "displaying" ? 0.3 : 0 }}
              className="text-center mt-8"
            >
              <p 
                className="text-white/80 uppercase tracking-widest drop-shadow-lg"
                style={{ 
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)"
                }}
              >
                — {currentQuote.source} —
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-16">
          {quotes.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 rounded-full"
              style={{ backgroundColor: index === currentQuoteIndex ? "#ff3b1d" : "#666" }}
              animate={{
                width: index === currentQuoteIndex ? 48 : 24,
                opacity: index === currentQuoteIndex ? 1 : 0.6
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
