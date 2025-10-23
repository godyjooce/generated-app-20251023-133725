import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { api } from '@/lib/api-client';
const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов.' }),
  email: z.string().email({ message: 'Неверный формат email.' }),
  message: z.string().min(10, { message: 'Сообщение должно содержать не менее 10 символов.' }).max(500, { message: 'Сообщение не должно превышать 500 символов.' }),
});
type FormData = z.infer<typeof formSchema>;
export const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const { isSubmitting } = form.formState;
  const onSubmit = async (values: FormData) => {
    try {
      await api('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      toast.success('Сообщение успешно отправлено!', {
        description: 'Мы скоро с вами свяжемся.',
      });
      form.reset();
    } catch (error) {
      toast.error('Ошибка отправки.', {
        description: 'Пожалуйста, попро��уйте еще раз позже.',
      });
    }
  };
  return (
    <Card className="shadow-lg border dark:bg-white/5 w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
        <CardDescription>Мы свяжемся с вами для обсуждени�� деталей.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваше имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание проекта</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Расскажите нам о вашем проекте..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Отправить
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};