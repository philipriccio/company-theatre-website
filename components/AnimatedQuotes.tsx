"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Quote {
  lines: string[];  // Pre-broken into logical lines for clean wrapping
  source: string;
}

const quotes: Quote[] = [
  {
    lines: ["ONE OF THE BEST THINGS", "EVER SEEN IN TORONTO"],
    source: "The National Post"
  },
  {
    lines: ["A MASTERPIECE."],
    source: "The National Post"
  },
  {
    lines: ["AN ABSOLUTELY", "SHATTERING EXPERIENCE"],
    source: "Eye Weekly"
  },
  {
    lines: ["PURE THEATRE OF THE KIND", "WE RARELY SEE"],
    source: "The Globe & Mail"
  },
  {
    lines: ["THE MOST STUNNING DEBUT", "SINCE SOULPEPPER"],
    source: "Robert Cushman, National Post"
  },
  {
    lines: ["A DISTURBING, WHITE-KNUCKLE", "NIGHT AT THE THEATRE"],
    source: "Glenn Sumi, NOW"
  },
  {
    lines: ["SO TRUTHFUL, SO VIVID,", "IT IS SIMPLY BREATHTAKING"],
    source: "Christopher Hoile, Eye Weekly"
  },
  {
    lines: ["A RELIGIOUS EXPERIENCE"],
    source: "The Globe & Mail"
  },
  {
    lines: ["THE MOST MUSCULAR PIECE OF THEATRE", "WE'VE SEEN IN TORONTO IN SOME TIME"],
    source: "Richard Ouzounian, Toronto Star"
  },
  {
    lines: ["GLOWS WITH", "RICH HUMANITY"],
    source: "Jon Kaplan, NOW"
  },
  {
    lines: ["A PLAY THAT, LIKE THE COMPANY,", "ONLY COMES AROUND ONCE IN A WHILE"],
    source: "Torontoist"
  },
  {
    lines: ["MUSCULAR! DARKLY FUNNY!", "LIKE WATCHING AN EARTHQUAKE IN SLOW MOTION!"],
    source: "The Globe & Mail"
  },
  {
    lines: ["EXTRAORDINARY! UNSETTLING!", "THE ENTIRE CAST IS ON RED ALERT!"],
    source: "The National Post"
  },
  {
    lines: ["SNAPPY, SLICK PRODUCTION,", "DIRECTED WITH PANACHE"],
    source: "Toronto Star"
  }
];

// All production photos for the hero slideshow - spread out same-show images
const slideshowImages = [
  { src: "/images/show-jerusalem-038.jpg", alt: "Jerusalem Production", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAFAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIRIf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AjVZHEENAL//Z" },
  { src: "/images/show-tiktbt-003.jpg", alt: "Things I Know to be True Production", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAf/EABkQAQACAwAAAAAAAAAAAAAAAAEAAgMTIf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AAzOuwQwqC/JIVf/2Q==" },
  { src: "/images/show-john-002.jpg", alt: "John Production", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQISQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIqmYlLZKgxXAP/Z" },
  { src: "/images/show-jerusalem-039.jpg", alt: "Jerusalem Production", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAYEAEAAwEAAAAAAAAAAAAAAAABAAIRE//EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCfoWVgaUDTWUX/2Q==" },
  { src: "/images/show-belleville-007.jpg", alt: "Belleville Production", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAaEAEAAgMBAAAAAAAAAAAAAAABAAIDBBEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oADAMBAAIRAxEAPwCQxVaEPAlQOq99IpYf/9k=" },
  { src: "/images/show-tiktbt-017.jpg", alt: "Things I Know to be True Production" },
  { src: "/images/show-through-the-leaves-003.jpg", alt: "Through the Leaves Production" },
  { src: "/images/show-john-001.jpg", alt: "John" },
  { src: "/images/show-tiktbt-002.jpg", alt: "Things I Know to be True" },
  { src: "/images/show-domesticated-001.jpg", alt: "Domesticated" },
  { src: "/images/show-whistle-007.jpg", alt: "A Whistle in the Dark Production" },
  { src: "/images/show-seagull-001.jpg", alt: "The Seagull" },
  { src: "/images/show-jerusalem-032.jpg", alt: "Jerusalem Production" },
  { src: "/images/show-jerusalem-023.jpg", alt: "Jerusalem Production" },
  { src: "/images/show-jerusalem-030.jpg", alt: "Jerusalem Production" },
  { src: "/images/show-tiktbt-018.jpg", alt: "Things I Know to be True Production" },
  { src: "/images/show-belleville-001.jpg", alt: "Belleville" },
  { src: "/images/show-john-034.jpg", alt: "John Production" },
  { src: "/images/show-through-the-leaves-002.jpg", alt: "Through the Leaves" },
  { src: "/images/show-test-001.jpg", alt: "The Test" },
  { src: "/images/show-tiktbt-004.jpg", alt: "Things I Know to be True Production" },
  { src: "/images/show-whistle-001.jpg", alt: "A Whistle in the Dark" },
  { src: "/images/show-tiktbt-009.jpg", alt: "Things I Know to be True Production" }
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
        duration: 0.6,
        delay: isScattered ? index * 0.015 : index * 0.02,
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
  // Flatten all letters with their line info for continuous animation timing
  const linesWithLetters = currentQuote.lines.map(line => line.split(""));

  const nextQuote = useCallback(() => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  }, []);

  // Slideshow effect - rotate every 3.5 seconds for more energy
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "scattered":
        // Letters are scattered, start forming after brief pause
        timeout = setTimeout(() => {
          setPhase("forming");
        }, 150);
        break;
      
      case "forming":
        // Letters forming into quote - faster animation
        timeout = setTimeout(() => {
          setPhase("displaying");
        }, 900);
        break;
      
      case "displaying":
        // Quote displayed, hold for reading - faster for more energy
        timeout = setTimeout(() => {
          setPhase("exiting");
        }, 2500);
        break;
      
      case "exiting":
        // Letters scatter away - faster exit
        timeout = setTimeout(() => {
          nextQuote();
          setPhase("scattered");
        }, 600);
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, nextQuote]);

  return (
    <div className="relative min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentSlideIndex ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover animate-zoom object-top md:object-center"
              priority={index < 2}
              placeholder={image.blur ? "blur" : "empty"}
              blurDataURL={image.blur}
              sizes="100vw"
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
                className="text-white font-bold uppercase leading-[1.1] tracking-tight drop-shadow-lg flex flex-col items-center"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Impact', 'Arial Narrow', sans-serif",
                  fontSize: "clamp(1.5rem, 6vw, 5.5rem)",
                  letterSpacing: "0.02em",
                  textShadow: "0 4px 20px rgba(0,0,0,0.8)"
                }}
              >
                {(() => {
                  let letterIndex = 0;
                  const totalLetters = linesWithLetters.flat().length;
                  return linesWithLetters.map((lineLetters, lineIdx) => (
                    <span key={`line-${lineIdx}`} className="block text-center px-2">
                      {lineLetters.map((char) => {
                        const idx = letterIndex++;
                        return (
                          <AnimatedLetter
                            key={`${currentQuoteIndex}-${idx}`}
                            char={char}
                            index={idx}
                            totalLetters={totalLetters}
                            isScattered={phase === "scattered" || phase === "exiting"}
                          />
                        );
                      })}
                    </span>
                  ));
                })()}
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
