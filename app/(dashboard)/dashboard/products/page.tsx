import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Title from "@/components/uis/title";
import AllProductsTabel from "./_parts/all-products-table";

export const metadata: Metadata = {
  title: "Dashboard: Products",
};

const ProductsPage = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <Title variant={"xl"}>Products</Title>

        <Button asChild variant={"outline"} size={"icon"}>
          <Link href={"/product/add-new"}>
            <Plus />
          </Link>
        </Button>
      </section>

      <section>
        <Suspense fallback={"loading..."}>
          <AllProductsTabel />
        </Suspense>
      </section>
    </>
  );
};

export default ProductsPage;
