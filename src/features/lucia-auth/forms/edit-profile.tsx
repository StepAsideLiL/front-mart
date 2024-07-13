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
import { useState } from "react";
import { updatePrfileName } from "../actions";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name can not be empty.",
  }),
});

export default function EditProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const res = await updatePrfileName(values.name);

    if (res.success) {
      setLoading(false);
      toast.success(res.message);
    } else {
      setLoading(false);
      toast.error(res.message);
    }
  }

  return (
    <section className="w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {loading ? (
            <Button disabled>Saving...</Button>
          ) : (
            <Button type="submit">Save</Button>
          )}
        </form>
      </Form>
    </section>
  );
}
