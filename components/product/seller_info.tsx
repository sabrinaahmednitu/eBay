import { Star, MessageCircle, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Product } from '@/lib/data';

interface SellerInfoProps {
  seller: Product['seller'];
}

export function SellerInfo({ seller }: SellerInfoProps) {
  return (
    <div className="border border-border rounded-lg p-4 space-y-4">
      <h3 className="font-semibold">Seller Information</h3>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
          <Store className="w-6 h-6 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-primary hover:underline cursor-pointer">
            {seller.name}
          </p>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-[#f5af02] text-[#f5af02]" />
            <span className="font-medium">{seller.rating}%</span>
            <span className="text-muted-foreground">
              positive feedback ({seller.totalReviews.toLocaleString()} reviews)
            </span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact Seller
        </Button>
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <Store className="w-4 h-4 mr-2" />
          Visit Store
        </Button>
      </div>
    </div>
  );
}
