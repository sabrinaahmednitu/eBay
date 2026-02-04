'use client';

import { useState } from 'react';
import {
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/data';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWatched, setIsWatched] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="space-y-6">
      {/* Title and badges */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          {product.topRated && (
            <Badge className="bg-[#86b817] hover:bg-[#86b817] text-white">
              Top Rated Plus
            </Badge>
          )}
          {product.bestSeller && (
            <Badge className="bg-[#f5af02] hover:bg-[#f5af02] text-foreground">
              Best Seller
            </Badge>
          )}
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-foreground text-balance">
          {product.title}
        </h1>
      </div>

      {/* Condition */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Condition:</span>
        <Badge
          variant="outline"
          className={cn(
            product.condition === 'New' && 'border-green-500 text-green-600',
            product.condition === 'Used' && 'border-amber-500 text-amber-600',
            product.condition === 'Refurbished' &&
              'border-blue-500 text-blue-600',
          )}
        >
          {product.condition}
        </Badge>
      </div>

      {/* Price section */}
      <div className="bg-muted/30 rounded-lg p-4">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-3xl font-bold text-foreground">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
              <Badge className="bg-[#e53238] hover:bg-[#e53238] text-white">
                {discountPercent}% OFF
              </Badge>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {product.watchers} people are watching this item
        </p>
      </div>

      {/* Shipping info */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p
              className={cn(
                'font-medium',
                product.freeShipping && 'text-green-600',
              )}
            >
              {product.shipping}
            </p>
            <p className="text-sm text-muted-foreground">
              Estimated delivery: Jan 25 - Feb 1
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <RotateCcw className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="font-medium">30-day returns</p>
            <p className="text-sm text-muted-foreground">
              Buyer pays return shipping
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="font-medium">Buyer Protection</p>
            <p className="text-sm text-muted-foreground">
              Get the item you ordered or get your money back
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Quantity selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Quantity:</span>
        <div className="flex items-center border border-border rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-r-none"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-l-none"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">10+ available</span>
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          className="w-full bg-[#0064d2] hover:bg-[#0050a8] text-lg h-12"
        >
          Buy It Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full text-lg h-12 bg-transparent"
        >
          Add to Cart
        </Button>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 bg-transparent"
            onClick={() => setIsWatched(!isWatched)}
          >
            <Heart
              className={cn(
                'h-4 w-4 mr-2',
                isWatched && 'fill-[#e53238] text-[#e53238]',
              )}
            />
            {isWatched ? 'Watching' : 'Add to Watchlist'}
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
