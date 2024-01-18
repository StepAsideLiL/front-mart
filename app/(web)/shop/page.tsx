import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllProduct from "./_parts/all-products";

export const revalidate = 600;

const ShopPage = () => {
  return (
    <Main variant={"container"}>
      <section>
        <Title>Shop</Title>
      </section>

      <section>
        <Suspense fallback={"loading..."}>
          <AllProduct />
        </Suspense>
      </section>
    </Main>
  );
};

export default ShopPage;
