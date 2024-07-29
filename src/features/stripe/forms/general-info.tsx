"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { updateGeneralProductInfo } from "../actions";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  productTitle: z.string().trim().min(1, {
    message: "Product Title can be empty.",
  }),
  description: z.string().trim().optional(),
  quickDescription: z.string().trim().optional(),
});

export default function GeneralInfoForm({
  productId,
  productTitle,
  description,
  quickDescription,
}: {
  productId: string;
  productTitle: string;
  description: string;
  quickDescription: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productTitle: productTitle,
      description: description,
      quickDescription: quickDescription,
    },
  });

  const [saving, setSaving] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSaving(true);

    const { productTitle, description, quickDescription } = values;

    const formData = {
      productId,
      productTitle: productTitle,
      productDescription: description ? description : "",
      productQuickDescription: quickDescription ? quickDescription : "",
    };

    const res = await updateGeneralProductInfo(formData);

    if (res.success) {
      setSaving(false);
    } else {
      setSaving(false);
    }
  }

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-xl font-medium">General Product Information</h1>
        <p className="text-muted-foreground text-sm">
          Some general information of the product that will be shown in the
          product shop page.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="productTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Title</FormLabel>
                <FormControl>
                  <Input placeholder="Fancy Shoes" {...field} />
                </FormControl>
                <FormDescription>
                  Pick an appropriate name that represents your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quickDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quick Product Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="This is a quick description of the product"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A quick description of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={8}
                    placeholder="This a detailed description of the product"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe your product in details.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {saving ? (
            <Button disabled>Saving</Button>
          ) : (
            <Button type="submit">Save</Button>
          )}
        </form>
      </Form>
    </section>
  );
}
