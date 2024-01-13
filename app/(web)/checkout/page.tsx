import Main from "@/components/uis/main";
import { Suspense } from "react";
import { ProductCart } from "@/lib/types";
import TotalPrice from "./_parts/total-price";
import Title from "@/components/uis/title";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CheckoutForm from "./_parts/checkout-form";

const CheckoutPage = ({ searchParams }: { searchParams: { cart: string } }) => {
  const products: ProductCart = JSON.parse(searchParams.cart);

  return (
    <Main variant={"container"}>
      <section>
        <Title variant={"xl2"}>Checkout</Title>
      </section>

      <section className="w-full flex flex-col-reverse md:flex-row gap-5 justify-between">
        <section className="w-full">
          <CheckoutForm />
        </section>

        <section className="w-full">
          <section className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Total</h1>
            <Badge variant={"outline"}>{products.length}</Badge>
          </section>

          <div className="py-2">
            <Separator orientation="horizontal" />
          </div>

          <Suspense fallback={"loading..."}>
            <TotalPrice products={products} />
          </Suspense>
        </section>
      </section>
    </Main>
  );
};

export default CheckoutPage;
