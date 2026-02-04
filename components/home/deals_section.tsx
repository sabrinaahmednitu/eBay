'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { dealProducts } from '@/lib/data';

export function DealsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Today&apos;s Deals</h2>
          <div className="flex items-center gap-1 bg-[#e53238] text-white px-3 py-1 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>Ends in 12:34:56</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => scroll('left')}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll('right')}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {dealProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[220px] sm:min-w-[260px] snap-start"
          >
            <ProductCard product={product} showDiscount />
          </div>
        ))}
      </div>
    </section>
  );
}
