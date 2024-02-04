"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
  orderStatus: z.string({
    required_error: "Please select a value to display.",
  }),
});

const OrderFilters = ({ status }: { status?: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      orderStatus: status ? status : "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const params = new URLSearchParams(searchParams);

    if (data.orderStatus) {
      params.set("status", data.orderStatus);
      params.set("page", "0");
    } else {
      params.delete("status");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  function handleReset() {
    form.getValues().orderStatus = "";
    replace(`${pathname}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <section className="flex gap-2">
          <FormField
            control={form.control}
            name="orderStatus"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-36">
                      <SelectValue placeholder="Order Status" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-36">
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="canceled">Canceled</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </section>

        <section className="flex gap-2">
          <Button size={"sm"} type="submit">
            Apply Filter
          </Button>

          <Button
            variant={"destructive"}
            size={"sm"}
            type="button"
            onClick={() => handleReset()}
          >
            Reset
          </Button>
        </section>
      </form>
    </Form>
  );
};

export default OrderFilters;
