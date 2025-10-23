import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
const pricingTiers = [
  {
    name: "Сайт под ключ",
    price: "от 30 000 ₽",
    description: "Для бизнеса, которому нужен эффективный онлайн-инстру��ент.",
    features: ["Лендинг или многостраничный сайт", "Адаптивный дизайн", "Базовая SEO-оптимизация", "Форма обратной связи"],
  },
  {
    name: "Telegram-бот",
    price: "от 25 000 ₽",
    description: "Автоматизация рутин��ых задач и общение с клиентами 24/7.",
    features: ["Проектирование логики", "Интеграция с API", "Панель администратора", "Подключение платёжных систем"],
  },
  {
    name: "Поддержка и DevOps",
    price: "от 5 000 ₽/мес",
    description: "Обеспечение стабильной и безопасной работы ваших проектов.",
    features: ["Мониторинг 24/7", "Регулярные бэкапы", "Оптимизация производительности", "Консультации"],
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};
export const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Стоимость услуг
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Прозрачные цены для решения ваших задач. Выберите подходящий вариант.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-white/5">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-4xl font-bold mb-6">{tier.price}</p>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-blue-600 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant={i === 1 ? "default" : "outline"}>
                      <a href="#contact">Узнать точную стоимость</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};