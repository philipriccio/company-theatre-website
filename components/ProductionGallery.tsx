"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface ProductionGalleryProps {
  images: string[];
  title: string;
  photographer?: string;
}

const PREVIEW_COUNT = 6;

export default function ProductionGallery({ images, title, photographer }: ProductionGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "Escape":
          closeLightbox();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex, images.length]);

  if (images.length === 0) return null;

  const previewImages = images.slice(0, PREVIEW_COUNT);
  const hasMoreImages = images.length > PREVIEW_COUNT;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Determine grid item sizes based on position for collage effect
  const getGridItemClass = (index: number) => {
    // For 6 images, create an asymmetric collage layout
    // Desktop: featured image spans 2x2, others vary
    switch (index) {
      case 0:
        return "col-span-2 row-span-2 aspect-square md:aspect-auto"; // Featured - large
      case 1:
        return "col-span-1 row-span-1 aspect-square"; // Small square
      case 2:
        return "col-span-1 row-span-1 aspect-square"; // Small square
      case 3:
        return "col-span-1 row-span-1 aspect-square"; // Small square
      case 4:
        return "col-span-1 row-span-1 aspect-square"; // Small square
      case 5:
        return "col-span-2 row-span-1 aspect-[2/1] md:aspect-auto"; // Wide rectangle
      default:
        return "col-span-1 row-span-1 aspect-square";
    }
  };

  return (
    <>
      {/* Collage Gallery with Overlays */}
      <div className="relative">
        {/* Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2 md:gap-3">
          {previewImages.map((src, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden bg-gray-100 group cursor-pointer ${getGridItemClass(index)}`}
            >
              <Image
                src={src}
                alt={`${title} - Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          {/* Text overlays - positioned over the collage */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pointer-events-none">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              {/* Left side: Header + Photographer */}
              <div>
                <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
                  Production Photos
                </h3>
                {photographer && (
                  <p className="text-white/70 text-sm md:text-base mt-1">
                    Photos by {photographer}
                  </p>
                )}
              </div>
              
              {/* Right side: View All Button */}
              <button
                onClick={() => openLightbox(0)}
                className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-[#ff3b1d] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#e63518] transition-colors duration-200 shadow-lg"
              >
                View all {images.length} images
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex flex-col"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 shrink-0">
            {/* Counter */}
            <div className="text-white/80 text-sm font-medium">
              <span className="text-white font-semibold">{currentIndex + 1}</span>
              <span className="mx-2">/</span>
              <span>{images.length}</span>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 flex items-center justify-center relative px-4 md:px-16 lg:px-24 min-h-0">
            {/* Previous Arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 md:left-4 lg:left-6 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Image Container */}
            <div 
              className="relative w-full h-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Photo ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Next Arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 md:right-4 lg:right-6 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="shrink-0 px-4 md:px-6 py-4 bg-black/50">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                {images.map((src, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToIndex(index);
                    }}
                    className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 overflow-hidden transition-all duration-200 ${
                      index === currentIndex 
                        ? "ring-2 ring-[#ff3b1d] ring-offset-2 ring-offset-black" 
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mobile swipe hint */}
          <div className="md:hidden text-center pb-2 text-white/40 text-xs">
            Swipe to navigate
          </div>
        </div>
      )}
    </>
  );
}
