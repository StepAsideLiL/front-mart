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
import { AddNewFormData, CloundinayImage } from "@/lib/types";
import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import Image from "next/image";
import { addProduct } from "@/lib/actions";

const formSchema = z.object({
  productTitle: z
    .string()
    .min(1, { message: "Product title can not be empty." }),
  price: z.string().min(1, { message: "Product price can not be empty." }),
  imageId: z.string().min(1, { message: "Set a product image" }),
  discount: z.string().optional(),
  quickOverview: z.string().optional(),
  description: z.string().optional(),
});

const AddProductForm = () => {
  const [imageSrc, setIamgeSrc] = useState("");
  const [imageId, setIamgeId] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productTitle: "",
      price: undefined,
      discount: undefined,
      quickOverview: "",
      description: "",
    },
    values: {
      productTitle: "",
      price: "",
      imageId: imageId,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: AddNewFormData = {
      ...values,
      price: parseFloat(values.price),
      discount: parseFloat(values.discount ? values.discount : "0"),
      imageSrc: imageSrc,
      imageId: imageId,
    };

    addProduct(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="flex gap-5 w-full">
          <div className="w-full space-y-3">
            {/* Product Title */}
            <FormField
              control={form.control}
              name="productTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Product" {...field} />
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
                    <Input type="number" placeholder="$3.99" {...field} />
                  </FormControl>
                  <FormDescription>Price of the product.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    <Input type="number" placeholder="40%" {...field} />
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
                    />
                  </FormControl>
                  <FormDescription>
                    Write useful description about the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            {/* Product Image */}
            <FormField
              control={form.control}
              name="imageId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="w-full flex justify-between items-center gap-2">
                    <p className="text-sm font-medium">Product Image</p>

                    <CldUploadWidget
                      uploadPreset="qaljd9iw"
                      options={{
                        sources: ["local", "url"],
                      }}
                      // @ts-expect-error
                      onSuccess={(result: CloundinayImage, { widget }) => {
                        setIamgeId(result.info.public_id);
                        setIamgeSrc(result.info.secure_url);
                        widget.close();
                      }}
                    >
                      {({ open }) => {
                        return (
                          <Button
                            variant={"secondary"}
                            type="button"
                            onClick={() => open()}
                          >
                            {imageId === ""
                              ? "Upload a product image"
                              : "Change image"}
                          </Button>
                        );
                      }}
                    </CldUploadWidget>
                  </FormLabel>
                  <FormControl>
                    <Input type="hidden" placeholder="Product" {...field} />
                  </FormControl>
                  <FormDescription>
                    Put appropriate title for the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {imageId && (
              <CldImage
                width={"500"}
                height={"500"}
                src={imageId}
                sizes="100vw"
                alt="Photo of the product"
              />
            )}

            {imageId !== "" || (
              <Image
                src={"/images/placeholder-image.webp"}
                alt="Product placeholder image"
                width={1200}
                height={800}
                className="w-full"
              />
            )}

            <p>Image of the product</p>
          </div>
        </section>

        <Button type="submit">Add New Product</Button>
      </form>
    </Form>
  );
};

export default AddProductForm;
