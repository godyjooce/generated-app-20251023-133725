import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};
export const ContactSection = () => {
  return (
    <section id="contact" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Свяжитесь с на��и
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Готовы начать проект или есть вопросы? Заполните форму, и мы ответим в ближайшее время.
            </p>
          </div>
          <motion.div
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="flex flex-col justify-center" variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Предпочитаете мессенджеры?</h3>
              <p className="text-muted-foreground mb-6">
                Напишите нам напрямую в Telegram для более быстрой консультации. Мы всегда на связи.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="https://t.me/v_vinitsky" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-5 w-5" />
                    Написать в Telegram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <a href="mailto:contact@vinitsky.dev">
                    <Mail className="mr-2 h-5 w-5" />
                    contact@vinitsky.dev
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};