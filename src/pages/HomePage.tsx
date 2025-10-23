import { Helmet } from 'react-helmet-async';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vinitsky Dev - Разработка сайтов, Telegram-ботов и автоматизация</title>
        <meta name="description" content="Студия Vinitsky Dev. Мы превращаем ваши идеи в цифровые продукты: разработка сайтов, Telegram-ботов и бизнес-автоматизации под ключ." />
        <meta name="keywords" content="разработка сайтов, telegram-боты, автоматизация бизнеса, full-stack, devops, vinitsky dev" />
      </Helmet>
      <PageLayout>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </PageLayout>
    </>
  );
}