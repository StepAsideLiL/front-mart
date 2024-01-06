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
import { Textarea } from "../ui/textarea";
import { AddNewFormData, CloundinayImage } from "@/lib/types";
import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

const formSchema = z.object({
  productTitle: z
    .string()
    .min(1, { message: "Product title can not be empty." }),
  price: z.string().min(1, { message: "Product price can not be empty." }),
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
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: AddNewFormData = {
      ...values,
      price: parseFloat(values.price),
      discount: parseFloat(values.discount ? values.discount : "0"),
      imageSrc: imageSrc,
      imageId: imageId,
    };
    console.log(formData);
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

            {/* Product Overview */}
            <FormField
              control={form.control}
              name="quickOverview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quick Overview</FormLabel>
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
                  <FormLabel>Product Discount</FormLabel>
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
                  <FormLabel>Product Description</FormLabel>
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

          <div className="w-full">
            <CldUploadWidget
              uploadPreset="qaljd9iw"
              options={{
                sources: ["local", "url", "unsplash"],
              }}
              // @ts-expect-error
              onSuccess={(result: CloundinayImage, { widget }) => {
                console.log(result.info.secure_url);
                console.log(result.info.public_id);
                setIamgeId(result.info.public_id);
                setIamgeSrc(result.info.secure_url);
                // widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button type="button" onClick={() => open()}>
                    {imageId === "" ? "Upload a product image" : "Change image"}
                  </Button>
                );
              }}
            </CldUploadWidget>

            {imageId && (
              <CldImage
                width={"500"}
                height={"500"}
                src={imageId}
                sizes="100vw"
                alt="Photo of the product"
              />
            )}
          </div>
        </section>

        <Button type="submit">Add New</Button>
      </form>
    </Form>
  );
};

export default AddProductForm;
