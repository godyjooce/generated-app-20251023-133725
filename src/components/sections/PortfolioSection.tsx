import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Сайт для онлайн-школы",
    description: "Разработали платформу с личными кабинетами, системой курсов и приёмом оплат. Интегрировали CRM и email-рассылки.",
    imageClass: "bg-blue-200 dark:bg-blue-900/50",
  },
  {
    title: "Бот для Instagram-автоматизации",
    description: "Создали Telegram-бота для автоматической ��бработки комментариев и сообщений в Instagram, что увеличило вовлечённость на 40%.",
    imageClass: "bg-purple-200 dark:bg-purple-900/50",
  },
  {
    title: "CRM для локального ��изнеса",
    description: "Внедрили кастомну�� CRM-систему для учёта клиентов, заказов и аналитики. Автоматизировали рутинные задачи менеджеров.",
    imageClass: "bg-green-200 dark:bg-green-900/50",
  },
];
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};
export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Наши проекты
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Примеры того, как мы помогаем бизнесу д��стигать своих целей.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-white/5">
                  <div className={`aspect-video w-full ${project.imageClass}`} />
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full group">
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};