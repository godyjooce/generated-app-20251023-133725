import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
} as const;
export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f633,transparent)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-24 md:py-32 lg:py-40 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white text-balance"
            variants={itemVariants}
          >
            Мы превращаем ваши идеи в <span className="text-blue-600">цифровые продукты</span>.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance"
            variants={itemVariants}
          >
            Разработка сайтов, Telegram-ботов и бизнес-автоматизации под ключ.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            variants={itemVariants}
          >
            <Button size="lg" asChild className="text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 active:scale-95">
              <a href="#contact">Обсудить проект</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};