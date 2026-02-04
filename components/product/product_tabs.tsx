'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/data';

interface ProductTabsProps {
  product: Product;
}

const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'shipping', label: 'Shipping & Payments' },
  { id: 'returns', label: 'Returns' },
];

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {/* Tab headers */}
      <div className="flex border-b border-border bg-muted/30 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors',
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary bg-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed">
              {product.description}
            </p>
            <p className="text-muted-foreground mt-4">
              This item is backed by our satisfaction guarantee. If you&apos;re
              not completely satisfied with your purchase, you can return it
              within 30 days for a full refund.
            </p>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="space-y-3">
            {product.specifications &&
              Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center py-2 border-b border-border last:border-0"
                >
                  <span className="w-1/3 text-sm text-muted-foreground">
                    {key}
                  </span>
                  <span className="w-2/3 text-sm font-medium text-foreground">
                    {value}
                  </span>
                </div>
              ))}
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Shipping Options</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Standard Shipping (5-7 business days): $4.99</li>
                <li>• Expedited Shipping (2-3 business days): $9.99</li>
                <li>• Express Shipping (1-2 business days): $14.99</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Payment Methods</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Credit/Debit Cards (Visa, Mastercard, Amex)</li>
                <li>• PayPal</li>
                <li>• Apple Pay / Google Pay</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'returns' && (
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Return Policy</h4>
              <p className="text-muted-foreground">
                You may return this item within 30 days of receipt for a full
                refund. The item must be in its original condition and
                packaging.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How to Return</h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Contact us through the Resolution Center</li>
                <li>Print the prepaid return shipping label</li>
                <li>Pack the item securely and drop it off</li>
                <li>Refund will be processed within 3-5 business days</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
