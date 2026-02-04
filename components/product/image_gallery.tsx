'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  mainImage: string;
  title: string;
}

export function ImageGallery({ mainImage, title }: ImageGalleryProps) {
  // Generate thumbnail variations (in a real app, these would be different product images)
  const thumbnails = [mainImage, mainImage, mainImage, mainImage];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              'relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg border-2 overflow-hidden transition-all',
              selectedIndex === index
                ? 'border-primary'
                : 'border-border hover:border-muted-foreground',
            )}
          >
            <Image
              src={thumb || '/placeholder.svg'}
              alt={`${title} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div
        className="relative flex-1 aspect-square bg-muted/30 rounded-lg overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={thumbnails[selectedIndex] || '/placeholder.svg'}
          alt={title}
          fill
          className={cn(
            'object-contain transition-transform duration-300',
            isZoomed && 'scale-150',
          )}
          priority
        />
      </div>
    </div>
  );
}
