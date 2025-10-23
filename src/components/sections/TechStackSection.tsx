import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
const techCategories = [
  { name: "Frontend", techs: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"] },
  { name: "Backend", techs: ["Python (aiogram, asyncio)", "Node.js"] },
  { name: "Базы данных", techs: ["PostgreSQL", "MySQL", "SQLite"] },
  { name: "DevOps", techs: ["Docker", "Nginx", "Cloudflare", "Bash", "Linux"] },
  { name: "API и Интеграции", techs: ["REST API", "Webhooks", "Автоматизация"] },
];
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeInOut" as const,
    },
  }),
};
export const TechStackSection = () => {
  return (
    <section id="tech" className="bg-muted/30 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Наш стек технологий
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Мы используем современные и проверенные инструменты для создания надёжных продуктов.
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            {techCategories.map((category) => (
              <div key={category.name} className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <h3 className="text-lg font-semibold text-foreground w-full sm:w-48 text-left sm:text-right shrink-0">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, i) => (
                    <motion.div
                      key={tech}
                      custom={i}
                      variants={fadeInAnimation}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-sm px-3 py-1 font-medium">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};