import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllOrdersTable from "./_parts/all-orders-table";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Dashboard: Orders",
};

const OrdersPage = () => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Order</Title>
      </section>

      <Suspense fallback={"loading..."}>
        <AllOrdersTable />
      </Suspense>
    </>
  );
};

export default OrdersPage;
