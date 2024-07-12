import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllOrdersTable from "./_parts/all-orders-table";
import { Metadata } from "next";
import { order } from "@/lib/data";
import PaginationUi from "@/components/uis/pagination-ui";
import OrderFilters from "./_parts/order-filters";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Dashboard: Orders",
};

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: number; status: string };
}) => {
  const currentPage = Number(searchParams.page) || 1;
  const pages = await order.totalPageForOrder(searchParams.status);

  return (
    <>
      <section>
        <Title variant={"xl"}>Order</Title>
      </section>

      <section className="space-y-3">
        <h1>Filters</h1>

        <OrderFilters status={searchParams.status} />
      </section>

      <section>
        <h1>Orders Table</h1>

        <Suspense fallback={"loading..."}>
          <AllOrdersTable
            currentPage={currentPage}
            status={searchParams.status}
          />
        </Suspense>
      </section>

      {pages > 1 && <PaginationUi pages={pages} currentPage={currentPage} />}
    </>
  );
};

export default OrdersPage;
