'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/data';

interface FeaturedProductsProps {
  title: string;
  filter?: 'topRated' | 'bestSeller' | 'all';
}

export function FeaturedProducts({
  title,
  filter = 'all',
}: FeaturedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) =>
          filter === 'topRated' ? p.topRated : p.bestSeller,
        );

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
        <h2 className="text-xl font-semibold">{title}</h2>
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
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[220px] sm:min-w-[260px] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
