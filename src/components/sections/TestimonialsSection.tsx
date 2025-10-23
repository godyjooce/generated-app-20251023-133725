import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Алексей П.",
    title: "Владелец марке��ингового агентства",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    comment: "Vinitsky Dev со��дали нам сайт и бота — всё работает стабильно и быстро. Отличная команда, которая слышит к��иента и предлагает эффективные решения. Рекомендую!",
  },
  {
    name: "Мария С.",
    title: "Основатель онлайн-школы",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    comment: "Заказывали сложную интеграцию для нашей платформы. Ребята справились на 100%, уложились в сроки и бюджет. Техническая поддержка на высоте.",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};
export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-muted/30 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Отзывы клиентов
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Нам дов��ряют, потому что мы приносим результат.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-xl dark:bg-white/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};