import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import React, { Suspense } from "react";
import AllProduct from "./_parts/all-products";

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
