import { calculateCartPrice } from "@/lib/data";
import React, { Suspense } from "react";
import CheckoutForm from "./checkout-form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TotalPrice from "./total-price";

const PageSections = async ({
  products,
}: {
  products: {
    id: string;
  }[];
}) => {
  const price = await calculateCartPrice(products);

  return (
    <section className="w-full flex flex-col-reverse md:flex-row gap-5 justify-between">
      <section className="w-full">
        <CheckoutForm products={products} price={Number(price.toFixed())} />
      </section>

      <section className="w-full">
        <section className="flex items-center gap-2">
          <h1 className="text-xl font-medium">Total</h1>
          <Badge variant={"outline"}>{products.length} item(s)</Badge>
        </section>

        <div className="py-2">
          <Separator orientation="horizontal" />
        </div>

        <Suspense fallback={"loading..."}>
          <TotalPrice price={price} />
        </Suspense>
      </section>
    </section>
  );
};

export default PageSections;
