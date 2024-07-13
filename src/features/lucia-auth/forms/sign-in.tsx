"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginUser } from "../actions";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  usernameOrEmail: z.string().trim().min(1, {
    message: "This Field can not be empty.",
  }),
  password: z.string().min(1, {
    message: "This Field can not be empty.",
  }),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const res = await loginUser({ ...values });

    if (res.success) {
      toast.success(res.message);
      router.push("/");
    } else {
      toast.error(res.message);
      setLoading(false);
    }
  }

  return (
    <section className="w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="usernameOrEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Username Or Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe Or johndoe@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="!@#$$%^&" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {loading ? (
            <Button disabled>Loading...</Button>
          ) : (
            <Button type="submit">Sign In</Button>
          )}
        </form>
      </Form>
    </section>
  );
}
