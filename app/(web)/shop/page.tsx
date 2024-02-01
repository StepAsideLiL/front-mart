import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllProduct from "./_parts/all-products";
import { Metadata } from "next";
import ShopPagination from "./_parts/shop-pagination";
import { totalPage } from "@/lib/data/product";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Shop",
};

const ShopPage = async ({
  searchParams,
}: {
  searchParams: { page: number };
}) => {
  const currentPage = Number(searchParams.page) || 1;
  const pages = await totalPage();

  return (
    <Main variant={"container"}>
      <section>
        <Title>Shop</Title>
      </section>

      <Suspense fallback={"loading..."}>
        <AllProduct currentPage={currentPage} />
      </Suspense>

      <ShopPagination pages={pages} currentPage={currentPage} />
    </Main>
  );
};

export default ShopPage;
