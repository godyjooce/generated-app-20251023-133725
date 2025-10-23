import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};
export const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/30 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-16 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="md:col-span-2 flex justify-center"
            variants={itemVariants}
          >
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-white dark:border-gray-800 shadow-lg">
              <AvatarImage src="https://i.pravatar.cc/300?u=vinitsky" alt="Vinitsky Dev Founder" />
              <AvatarFallback>VD</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              О Vinitsky Dev
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Vinitsky Dev — это не просто студия, а команда увлечённых full-stack разработчиков, которые создают цифровые продукты для малого и среднего бизнеса. Мы верим, что технолог��и должны быть доступны и эффективны.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Наш подход объед��няет чистый дизайн, надёжную технологическую базу и элементы ИИ, чтобы помочь клиентам не просто запустить проект, а расти быстрее конкурентов. Мы берём на себя весь цикл — от идеи до поддержки.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};