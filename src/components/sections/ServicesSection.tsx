import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, ServerCog, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Веб-разработка",
    description: "Создаём быстрые, адаптивные и удобные сайты, которые работ��ют на любых устройствах (Frontend / Backend).",
  },
  {
    icon: <Bot className="h-10 w-10 text-blue-600" />,
    title: "Создание Telegram-ботов",
    description: "Разрабатываем ботов с продвинутой логикой, интеграциями и а��томатизацией бизнес-процессов.",
  },
  {
    icon: <ServerCog className="h-10 w-10 text-blue-600" />,
    title: "Серверная настройка и DevOps",
    description: "Оптимизация VPS, настройка Nginx, Docker, Cloudflare. Обеспечиваем безоп��сность и стабильность 24/7.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Оптимизация и защита",
    description: "Ускоре��ие загрузки, защита от DDoS-атак, настройка кэширования и повышение общей производительности.",
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
export const ServicesSection = () => {
  return (
    <section id="services" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Что мы делаем
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              По��ный цикл разработки для решения ваших бизнес-задач.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-white/5">
                  <CardHeader className="items-center">
                    <div className="p-4 bg-blue-600/10 rounded-full">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-4 text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};