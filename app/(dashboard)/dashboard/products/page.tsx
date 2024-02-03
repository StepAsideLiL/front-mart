import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Title from "@/components/uis/title";
import AllProductsTabel from "./_parts/all-products-table";
import PaginationUi from "@/components/uis/pagination-ui";
import { totalPageForProduct } from "@/lib/data/product";

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
  const pages = await totalPageForProduct();

  return (
    <>
      <section className="flex items-center gap-10">
        <Title variant={"xl"}>Products</Title>

        <Button asChild variant={"outline"} size={"icon"}>
          <Link href={"/product/add"}>
            <span className="sr-only">Add Product</span>
            <Plus />
          </Link>
        </Button>
      </section>

      <Suspense fallback={"loading..."}>
        <AllProductsTabel currentPage={currentPage} />
      </Suspense>

      {pages > 1 && <PaginationUi pages={pages} currentPage={currentPage} />}
    </>
  );
};

export default ProductsPage;
