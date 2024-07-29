import { Metadata } from "next";
import { Suspense } from "react";
import Title from "@/components/uis/title";
import AllProductsTabel from "./_parts/all-products-table";
import PaginationUi from "@/components/uis/pagination-ui";
import { product } from "@/lib/data";
import AddProductDialog from "@/src/features/stripe/ui/add-product-dialog";

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
      <section className="flex items-center gap-10 justify-between border-b pb-1">
        <Title variant={"xl"}>Products</Title>

        <AddProductDialog />
      </section>

      <Suspense fallback={"loading..."}>
        <AllProductsTabel currentPage={currentPage} />
      </Suspense>

      {pages > 1 && <PaginationUi pages={pages} currentPage={currentPage} />}
    </>
  );
};

export default ProductsPage;
