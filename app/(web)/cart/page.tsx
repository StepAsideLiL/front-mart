import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Suspense } from "react";
import ProductCard from "./_parts/product-cart";
import TotalPrice from "./_parts/total-price";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ProductCart } from "@/lib/types";

const CheckoutPage = ({ searchParams }: { searchParams: { cart: string } }) => {
  const products: ProductCart = JSON.parse(searchParams.cart);

  return (
    <Main variant={"container"}>
      <section>
        <Title variant={"xl2"}>Cart</Title>
      </section>

      <section className="w-full flex flex-col md:flex-row gap-5 justify-between">
        <section className="w-full space-y-5">
          <Suspense fallback={"loading..."}>
            {products.map((product) => (
              <ProductCard key={product.id} id={product.id} />
            ))}
          </Suspense>
        </section>

        <section className="w-full">
          <section className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Total</h1>
            <Badge variant={"outline"}>{products.length}</Badge>
          </section>

          <div className="py-2">
            <Separator orientation="horizontal" />
          </div>

          <section>
            <Suspense fallback={"loading..."}>
              <TotalPrice products={products} />
            </Suspense>
          </section>
        </section>
      </section>
    </Main>
  );
};

export default CheckoutPage;
