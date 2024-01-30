"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { placeOrder } from "./actions";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useCartStore } from "@/lib/store/cart-store";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name can not be empty" }),
  email: z.string().min(1, { message: "Email can not be empty" }),
  address: z.string().min(1, { message: "Address can not be empty" }),
  zipCode: z.string().min(1, { message: "Zip code can not be empty" }),
  city: z.string().min(1, { message: "City can not be empty" }),
  country: z.string().min(1, { message: "Country can not be empty" }),
});

const CheckoutForm = ({
  products,
  price,
}: {
  products: {
    id: string;
  }[];
  price: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const setCartCount = useCartStore((s) => s.setCartCount);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const fullDate = new Date();
    const formData = {
      ...values,
      products: products,
      price: price,
      date: fullDate.getUTCDate(),
      month: fullDate.getUTCMonth(),
      year: fullDate.getUTCFullYear(),
    };

    setIsLoading(true);
    placeOrder(formData);

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("cart");
      setCartCount(0);
    }
  }

  return (
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

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="johndoe@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="98765" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="NY City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State and(or) Country</FormLabel>
              <FormControl>
                <Input placeholder="NY, USA" {...field} />
              </FormControl>
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
            <>Save and Continue</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
