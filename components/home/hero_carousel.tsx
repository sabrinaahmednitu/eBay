'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: 'Tech Week Sale',
    subtitle: 'Up to 50% off electronics',
    cta: 'Shop Now',
    bgColor: 'bg-gradient-to-r from-[#0064d2] to-[#00a8e8]',
    textColor: 'text-white',
  },
  {
    id: 2,
    title: 'Spring Fashion',
    subtitle: 'New arrivals for the season',
    cta: 'Explore Styles',
    bgColor: 'bg-gradient-to-r from-[#f5af02] to-[#ffc847]',
    textColor: 'text-foreground',
  },
  {
    id: 3,
    title: 'Home Refresh',
    subtitle: 'Transform your space for less',
    cta: 'Shop Home',
    bgColor: 'bg-gradient-to-r from-[#86b817] to-[#a8d653]',
    textColor: 'text-white',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={cn(
              'min-w-full h-[200px] sm:h-[280px] md:h-[340px] flex items-center',
              slide.bgColor,
            )}
          >
            <div className="container mx-auto px-8 md:px-16">
              <div className="max-w-lg">
                <h2
                  className={cn(
                    'text-3xl sm:text-4xl md:text-5xl font-bold mb-2',
                    slide.textColor,
                  )}
                >
                  {slide.title}
                </h2>
                <p
                  className={cn(
                    'text-lg sm:text-xl mb-6 opacity-90',
                    slide.textColor,
                  )}
                >
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  variant={
                    slide.textColor === 'text-white' ? 'secondary' : 'default'
                  }
                  className="font-semibold"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              currentSlide === index
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75',
            )}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
