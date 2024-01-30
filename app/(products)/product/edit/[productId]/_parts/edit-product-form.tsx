"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { CloundinayImage, UpdateProductFormData } from "@/lib/types";
import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import Image from "next/image";
import { updateProduct } from "./actions";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  productTitle: z
    .string()
    .min(1, { message: "Product title can not be empty." }),
  price: z.string().min(1, { message: "Product price can not be empty." }),
  imageSrc: z
    .string()
    .min(1, { message: "Set a product image" })
    .url({ message: "Insert correct image url" }),
  discount: z.string().optional(),
  quickOverview: z.string().optional(),
  description: z.string().optional(),
  isFeatured: z.boolean().default(false).optional(),
});

const EditProductForm = ({
  product,
}: {
  product: {
    id: string;
    title: string;
    price: number;
    discount: number | null;
    description: string | null;
    quickOverview: string | null;
    imageSrc: string | null;
    imageId: string | null;
    isFeatured: boolean | null;
  } | null;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setIamgeSrc] = useState(product?.imageSrc);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productTitle: product?.title ? product?.title : "",
      price: product?.price ? product?.price.toString() : undefined,
      discount: product?.discount ? product?.discount.toString() : undefined,
      quickOverview: product?.quickOverview ? product?.quickOverview : "",
      description: product?.description ? product?.description : "",
      isFeatured: product?.isFeatured ? product?.isFeatured : false,
    },
    values: {
      productTitle: product?.title ? product?.title : "",
      price: product?.price ? product?.price.toString() : "",
      imageSrc: imageSrc ? imageSrc : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: UpdateProductFormData = {
      id: product!.id,
      ...values,
      price: Number(parseFloat(values.price).toFixed(2)),
      discount: Number(
        parseFloat(values.discount ? values.discount : "0").toFixed(2)
      ),
      imageSrc: imageSrc ? imageSrc : "",
    };

    setIsLoading(true);
    updateProduct(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="w-full flex flex-col lg:flex-row gap-5">
          <section className="w-full space-y-8">
            {/* Product Title */}
            <FormField
              control={form.control}
              name="productTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormDescription>
                    Put appropriate title for the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Product Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="$3.99"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormDescription>Price of the product.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Product Image */}
            <FormField
              control={form.control}
              name="imageSrc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="https://example.com/prduct.jpg"
                      {...field}
                      autoComplete="off"
                      onChangeCapture={(e) => {
                        setIamgeSrc(e.currentTarget.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Valid image url of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <section className="w-full flex flex-col items-center gap-2">
            <div className="w-72 h-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc || `/images/placeholder-image.webp`}
                alt="Product image"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Image of the product
            </p>
          </section>
        </section>

        {/* Product Quick Overview */}
        <FormField
          control={form.control}
          name="quickOverview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quick Overview (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write something short about the product..."
                  {...field}
                  rows={5}
                  autoComplete="off"
                />
              </FormControl>
              <FormDescription>
                Write short description about the product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Product Discount */}
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Discount (Optional)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="40%"
                  {...field}
                  max={100}
                  autoComplete="off"
                />
              </FormControl>
              <FormDescription>
                Product discount amount in percentage.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Product Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write something about the product..."
                  {...field}
                  rows={10}
                  autoComplete="off"
                />
              </FormControl>
              <FormDescription>
                Write useful description about the product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>Save</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default EditProductForm;
