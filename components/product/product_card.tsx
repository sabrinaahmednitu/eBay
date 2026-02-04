'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

export function ProductCard({ product, showDiscount }: ProductCardProps) {
  const [isWatched, setIsWatched] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative bg-card rounded-lg border border-border overflow-hidden transition-all hover:shadow-lg hover:border-primary/30">
        {/* Image container */}
        <div className="relative aspect-square bg-muted/30">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />

          {/* Watch button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background shadow-sm z-10"
            onClick={(e) => {
              e.preventDefault();
              setIsWatched(!isWatched);
            }}
          >
            <Heart
              className={cn(
                'h-4 w-4',
                isWatched && 'fill-[#e53238] text-[#e53238]',
              )}
            />
            <span className="sr-only">
              {isWatched ? 'Remove from watchlist' : 'Add to watchlist'}
            </span>
          </Button>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.topRated && (
              <Badge className="bg-[#86b817] hover:bg-[#86b817] text-white text-[10px] font-semibold">
                Top Rated
              </Badge>
            )}
            {product.bestSeller && (
              <Badge className="bg-[#f5af02] hover:bg-[#f5af02] text-foreground text-[10px] font-semibold">
                Best Seller
              </Badge>
            )}
            {showDiscount && discountPercent > 0 && (
              <Badge className="bg-[#e53238] hover:bg-[#e53238] text-white text-[10px] font-semibold">
                {discountPercent}% OFF
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors min-h-[40px]">
            {product.title}
          </h3>

          {/* Condition badge */}
          <Badge
            variant="outline"
            className={cn(
              'text-[10px] mb-2',
              product.condition === 'New' && 'border-green-500 text-green-600',
              product.condition === 'Used' && 'border-amber-500 text-amber-600',
              product.condition === 'Refurbished' &&
                'border-blue-500 text-blue-600',
            )}
          >
            {product.condition}
          </Badge>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-lg font-bold text-foreground">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Shipping */}
          <p
            className={cn(
              'text-xs',
              product.freeShipping
                ? 'text-green-600 font-medium'
                : 'text-muted-foreground',
            )}
          >
            {product.shipping}
          </p>

          {/* Watchers */}
          {product.watchers > 100 && (
            <p className="text-xs text-muted-foreground mt-1">
              {product.watchers} watching
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
