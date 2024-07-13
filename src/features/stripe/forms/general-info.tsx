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
import { useDebounce } from "react-use";
import { useState } from "react";
import { useProductEditStore } from "../store";
import { updateProductInfo } from "../actions";

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

  // State of the input field values
  const [title, setTitle] = useState(productTitle);
  const [des, setDes] = useState<string | undefined>(productTitle);
  const [quickDes, setQuickDes] = useState<string | undefined>(
    quickDescription
  );

  const [processingStarted, processingStoped] = useProductEditStore((s) => [
    s.runingUpdateProductInfo,
    s.stopUpdateProductInfo,
  ]);

  useDebounce(
    async () => {
      const formData = {
        productId,
        productTitle: title,
        productDescription: des ? des : "",
        productQuickDescription: quickDes ? quickDes : "",
      };

      const res = await updateProductInfo(formData);

      if (res.success) {
        processingStoped();
      } else {
        processingStoped();
      }
    },
    3000,
    [title, des, quickDes]
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    processingStarted();

    const { productTitle, description, quickDescription } = values;

    setTitle(productTitle);
    setDes(description);
    setQuickDes(quickDescription);
  }

  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onSubmit)} className="space-y-8">
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
      </form>
    </Form>
  );
}
