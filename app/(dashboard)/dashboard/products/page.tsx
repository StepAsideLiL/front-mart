import { Metadata } from "next";
import { Suspense } from "react";
import Title from "@/components/uis/title";
import AllProductsTabel from "./_parts/all-products-table";
import PaginationUi from "@/components/uis/pagination-ui";
import { product } from "@/lib/data";
import AddProductBtn from "./_parts/add-product-btn";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Dashboard: Products",
};

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: number };
}) => {
  const currentPage = Number(searchParams.page) || 1;
  const pages = await product.totalPageForProduct();

  return (
    <>
      <section className="flex items-center gap-10 justify-between">
        <Title variant={"xl"}>Products</Title>

        <AddProductBtn />
      </section>

      <Suspense fallback={"loading..."}>
        <AllProductsTabel currentPage={currentPage} />
      </Suspense>

      {pages > 1 && <PaginationUi pages={pages} currentPage={currentPage} />}
    </>
  );
};

export default ProductsPage;
