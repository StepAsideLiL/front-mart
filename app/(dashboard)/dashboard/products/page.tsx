import { Button } from "@/components/ui/button";
import { DashboardTitle } from "@/components/uis/dashboard";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard: Products",
};

const ProductsPage = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <DashboardTitle>Products</DashboardTitle>

        <Button asChild variant={"outline"} size={"icon"}>
          <Link href={"/product/add-new"}>
            <Plus />
          </Link>
        </Button>
      </section>
    </>
  );
};

export default ProductsPage;
