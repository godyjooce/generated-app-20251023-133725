import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
const faqs = [
  {
    question: "Сколько времени занимает разработка сайта или бота?",
    answer: "Сроки зависят от сложности проекта. В среднем, разработка лендинга занимает 2-3 недели, корпоративного сайта — 4-6 недель, а Telegram-бота — от 3 недель. Мы всегда обсужда��м и фиксируем сроки перед началом работы.",
  },
  {
    question: "Как происходит процесс работы над проектом?",
    answer: "Процесс обычно состоит из нескольких этапов: 1. Обсуждение задачи и составление ТЗ. 2. Проектирование и дизайн. 3. Разработка и тестирование. 4. Запуск проекта. 5. Техническая поддержка. На каждом этапе мы поддерживаем с вами связь и согласовываем ключевые моменты.",
  },
  {
    question: "Предоставляете ли вы поддержку после за��уска?",
    answer: "Да, мы предлагаем услуги технической поддержки и сопровождения. Это может включать в себя ��ониторинг, обновление контента, доработку функционала и консультации. Условия поддержки обсуждаются индивидуально.",
  },
  {
    question: "С какими типами бизнеса вы работаете?",
    answer: "Мы специализируемся на решениях для малого и среднего бизнеса. Наш опыт включает проекты для онлайн-школ, маркетинг��вых агентств, e-commerce, локальных сервисов и стартапов. Мы готовы вникнуть в специфику вашего бизнеса и предложить оптимальное решение.",
  },
];
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};
export const FaqSection = () => {
  return (
    <section id="faq" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Частые вопросы
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ответы на вопросы, которые могут у вас возникнуть.
            </p>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  custom={i}
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};