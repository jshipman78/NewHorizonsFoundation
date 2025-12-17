"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./Button";

export interface Slide {
  id: number;
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  className?: string;
}

export function HeroSlider({
  slides,
  autoPlayInterval = 6000,
  className = "",
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, nextSlide, slides.length]);

  if (slides.length === 0) return null;

  const slide = slides[currentSlide];

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
    >
      {/* Background - Simplified gradient */}
      <div className="absolute inset-0 bg-horizons-green">
        {slide.image && (
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover opacity-20 mix-blend-multiply"
            priority={currentSlide === 0}
          />
        )}
        {/* Subtle depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Add padding to prevent arrow overlap on desktop */}
        <div className="max-w-2xl lg:ml-16 xl:ml-20">
          <div
            key={slide.id}
            className="animate-fade-in"
          >
            {/* Optional eyebrow/subtitle with better hierarchy */}
            {slide.subtitle && (
              <p className="text-hope-gold font-semibold tracking-wide uppercase text-sm mb-6">
                {slide.subtitle}
              </p>
            )}
            {/* Hero title with refined typography */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
              style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}
            >
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-xl">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {slide.primaryCta && (
                <Button href={slide.primaryCta.href} variant="accent" size="lg" className="min-w-[180px]">
                  {slide.primaryCta.label}
                </Button>
              )}
              {slide.secondaryCta && (
                <Button
                  href={slide.secondaryCta.href}
                  variant="outline-light"
                  size="lg"
                  className="backdrop-blur-sm"
                >
                  {slide.secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Outside content container for proper positioning */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-105 z-10 hidden md:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-105 z-10 hidden md:flex items-center justify-center"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation - Refined */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 px-5 py-3 rounded-full bg-black/20 backdrop-blur-sm z-10"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-hope-gold scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default HeroSlider;
