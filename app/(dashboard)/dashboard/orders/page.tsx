import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllOrdersTable from "./_parts/all-orders-table";

const OrdersPage = () => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Order</Title>
      </section>

      <section>
        <Suspense fallback={"loading..."}>
          <AllOrdersTable />
        </Suspense>
      </section>
    </>
  );
};

export default OrdersPage;
