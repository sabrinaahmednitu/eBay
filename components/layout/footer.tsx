import Link from 'next/link';

const footerLinks = {
  buy: {
    title: 'Buy',
    links: [
      { name: 'Registration', href: '#' },
      { name: 'Bidding & buying help', href: '#' },
      { name: 'Stores', href: '#' },
      { name: 'Charity Shop', href: '#' },
      { name: 'Seasonal Sales', href: '#' },
    ],
  },
  sell: {
    title: 'Sell',
    links: [
      { name: 'Start selling', href: '#' },
      { name: 'Learn to sell', href: '#' },
      { name: 'Affiliates', href: '#' },
      { name: 'Business sellers', href: '#' },
    ],
  },
  tools: {
    title: 'Tools & Apps',
    links: [
      { name: 'Developers', href: '#' },
      { name: 'Security center', href: '#' },
      { name: 'Site map', href: '#' },
    ],
  },
  about: {
    title: 'About',
    links: [
      { name: 'Company info', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Investors', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Policies', href: '#' },
    ],
  },
  help: {
    title: 'Help & Contact',
    links: [
      { name: 'Contact us', href: '#' },
      { name: 'Help center', href: '#' },
      { name: 'Resolution center', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Market Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookies
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
