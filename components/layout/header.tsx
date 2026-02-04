'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Menu,
  X,
  User,
  Bell,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Motors',
  'Collectibles & Art',
  'Sports',
  'Toys & Hobbies',
  'Business & Industrial',
];

const navCategories = [
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Motors',
  'Collectibles',
  'Sports',
  'Toys',
  'Business',
  'Deals',
];

export function Header() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top utility bar */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-sm">
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Daily Deals
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Help & Contact
              </Link>
            </nav>
            <nav className="flex items-center gap-4 ml-auto">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sell
              </Link>
              <Link
                href="#"
                className="hidden sm:block text-muted-foreground hover:text-primary transition-colors"
              >
                Watchlist
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                  My Account
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Sign In</DropdownMenuItem>
                  <DropdownMenuItem>Register</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#e53238]">m</span>
              <span className="text-2xl font-bold text-[#0064d2]">a</span>
              <span className="text-2xl font-bold text-[#f5af02]">r</span>
              <span className="text-2xl font-bold text-[#86b817]">k</span>
              <span className="text-2xl font-bold text-[#e53238]">e</span>
              <span className="text-2xl font-bold text-[#0064d2]">t</span>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 flex items-center max-w-3xl">
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-r-none border-r-0 h-11 px-3 min-w-[140px] justify-between bg-muted/50"
                  >
                    <span className="truncate text-sm">{selectedCategory}</span>
                    <ChevronDown className="h-4 w-4 ml-2 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex-1 flex">
              <Input
                type="search"
                placeholder="Search for anything"
                className={cn(
                  'h-11 rounded-none border-input focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary',
                  'md:rounded-l-none',
                )}
              />
              <Button className="h-11 rounded-l-none px-6 bg-[#0064d2] hover:bg-[#0050a8]">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              asChild
            >
              <Link href="#">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Watchlist</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="#">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#e53238] text-[10px] text-white rounded-full flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              asChild
            >
              <Link href="#">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="hidden md:block border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 h-11 overflow-x-auto">
            {navCategories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className={cn(
                    'text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap',
                    category === 'Deals' &&
                      'text-[#e53238] hover:text-[#c42a2f]',
                  )}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase()}`}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
