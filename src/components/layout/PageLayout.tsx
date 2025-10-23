import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#tech', label: 'Техноло��ии' },
  { href: '#portfolio', label: 'Проекты' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#pricing', label: 'Цены' },
  { href: '#faq', label: 'FAQ' },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const NavMenu = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className={cn(
      "flex items-center gap-4",
      isMobile ? "flex-col items-start space-y-4 p-4" : "hidden md:flex"
    )}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg font-display">Vinitsky Dev</span>
          </a>
          <div className="flex items-center gap-4">
            <NavMenu />
            <Button asChild className="hidden md:inline-flex">
              <a href="#contact">Обсудить проект</a>
            </Button>
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-6 pt-8">
                    <a href="#" className="flex items-center gap-2 mb-4">
                      <Code className="h-6 w-6 text-blue-600" />
                      <span className="font-bold text-lg font-display">Vinitsky Dev</span>
                    </a>
                    <NavMenu isMobile />
                    <Button asChild className="w-full">
                      <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Обсудить проект</a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
const Footer = () => (
  <footer className="border-t">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Vinitsky Dev. Все права защищены.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with ❤️ at Cloudflare
        </p>
      </div>
    </div>
  </footer>
);
export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <html lang="ru" />
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};