import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllOrdersTable from "./_parts/all-orders-table";
import { Metadata } from "next";
import { totalPageForOrder } from "@/lib/data/order";
import PaginationUi from "@/components/uis/pagination-ui";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Dashboard: Orders",
};

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: number };
}) => {
  const currentPage = Number(searchParams.page) || 1;
  const pages = await totalPageForOrder();

  return (
    <>
      <section>
        <Title variant={"xl"}>Order</Title>
      </section>

      <Suspense fallback={"loading..."}>
        <AllOrdersTable currentPage={currentPage} />
      </Suspense>

      {pages > 1 && <PaginationUi pages={pages} currentPage={currentPage} />}
    </>
  );
};

export default OrdersPage;
