import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Suspense } from "react";
import ProductCard from "./_parts/product-cart";

type ProductCart = {
  id: string;
}[];

const CheckoutPage = ({ searchParams }: { searchParams: { cart: string } }) => {
  const products: ProductCart = JSON.parse(searchParams.cart);

  return (
    <Main variant={"container"}>
      <section>
        <Title>Checkout</Title>
      </section>

      <section>
        <Suspense fallback={"loading..."}>
          <div className="space-y-5">
            {products.map((product) => (
              <ProductCard key={product.id} id={product.id} />
            ))}
          </div>
        </Suspense>
      </section>
    </Main>
  );
};

export default CheckoutPage;
