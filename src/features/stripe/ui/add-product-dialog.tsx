"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { createProductOnDatabase } from "../actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

const FormSchema = z.object({
  variant: z.enum(
    [
      "no-variant",
      "only-color-variant",
      "only-size-variant",
      "color-and-size-variant",
      "subscription",
    ],
    {
      required_error: "You need to select a product type.",
    }
  ),
});

export default function AddProductDialog({
  children = "Add Product",
}: {
  children?: ReactNode;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      variant: "no-variant",
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    const productId = await createProductOnDatabase(data.variant);

    productId
      ? router.push(`/dashboard/products/${productId}/edit`)
      : setLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{children}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add A New Product</DialogTitle>
          <DialogDescription>
            Select the appropriate type that matches your product.{" "}
            <Link href={"#"} target="_blank" className="underline">
              Click here
            </Link>{" "}
            if you want to know more about the product types
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="variant"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select the product type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="space-y-1">
                        <p>For selling product</p>
                        <div className="pl-5 flex flex-col space-y-1">
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no-variant" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              No Variant (Default)
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="only-color-variant" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Only Color Variant
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="only-size-variant" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Only Size Variant
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="color-and-size-variant" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Color and Size Variant
                            </FormLabel>
                          </FormItem>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p>For selling subscription</p>
                        <div className="pl-5 flex flex-col space-y-1">
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="subscription" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Subscription
                            </FormLabel>
                          </FormItem>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              Add Product
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
