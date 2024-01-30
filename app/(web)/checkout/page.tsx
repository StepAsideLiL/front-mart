import Main from "@/components/uis/main";
import { Suspense } from "react";
import { ProductCart } from "@/lib/types";
import Title from "@/components/uis/title";
import PageSections from "./_parts/page-sections";

const CheckoutPage = ({ searchParams }: { searchParams: { cart: string } }) => {
  const products: ProductCart = JSON.parse(searchParams.cart);

  return (
    <Main variant={"container"}>
      <section>
        <Title variant={"xl2"}>Checkout</Title>
      </section>

      <Suspense fallback={"loading..."}>
        <PageSections products={products} />
      </Suspense>
    </Main>
  );
};

export default CheckoutPage;
