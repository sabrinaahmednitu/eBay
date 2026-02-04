import Link from 'next/link';
import {
  Laptop,
  Shirt,
  Home,
  Car,
  Gem,
  Dumbbell,
  Gamepad2,
  BookOpen,
  Music,
  Watch,
  Heart,
  Briefcase,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    name: 'Electronics',
    icon: Laptop,
    href: '/category/electronics',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Fashion',
    icon: Shirt,
    href: '/category/fashion',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    name: 'Home & Garden',
    icon: Home,
    href: '/category/home-garden',
    color: 'bg-green-50 text-green-600',
  },
  {
    name: 'Motors',
    icon: Car,
    href: '/category/motors',
    color: 'bg-gray-100 text-gray-700',
  },
  {
    name: 'Collectibles',
    icon: Gem,
    href: '/category/collectibles',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Sports',
    icon: Dumbbell,
    href: '/category/sports',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Toys',
    icon: Gamepad2,
    href: '/category/toys',
    color: 'bg-red-50 text-red-600',
  },
  {
    name: 'Books',
    icon: BookOpen,
    href: '/category/books',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    name: 'Music',
    icon: Music,
    href: '/category/music',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Jewelry',
    icon: Watch,
    href: '/category/jewelry',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    name: 'Health',
    icon: Heart,
    href: '/category/health',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    name: 'Business',
    icon: Briefcase,
    href: '/category/business',
    color: 'bg-slate-100 text-slate-700',
  },
];

export function CategoryGrid() {
  return (
    <section className="py-8">
      <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <div
                className={cn(
                  'w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110',
                  category.color,
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {category.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
