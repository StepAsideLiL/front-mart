"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { editAddress } from "./actions";

const formSchema = z.object({
  address: z.string().min(1, {
    message: "Address can't be empty.",
  }),
  zipCode: z.string().min(1, {
    message: "Zip code can't be empty.",
  }),
  city: z.string().min(1, {
    message: "City can't be empty.",
  }),
  country: z.string().min(1, {
    message: "Country can't be empty.",
  }),
});

const UpdateUserAddressFrom = ({
  address,
  zipCode,
  city,
  country,
}: {
  address: string;
  zipCode: string;
  city: string;
  country: string;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: address ? address : "",
      zipCode: zipCode ? zipCode : "",
      city: city ? city : "",
      country: country ? country : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editAddress(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <FormLabel>Zip code</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
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
                <Input placeholder="New york" {...field} />
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
              <FormLabel>Country or State</FormLabel>
              <FormControl>
                <Input placeholder="New York" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save Address</Button>
      </form>
    </Form>
  );
};

export default UpdateUserAddressFrom;
