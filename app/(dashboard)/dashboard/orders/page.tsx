import Title from "@/components/uis/title";
import { Suspense } from "react";
import AllOrders from "./_parts/all-orders";

const OrdersPage = () => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Order</Title>
      </section>

      <section>
        <Suspense fallback={"loading..."}>
          <AllOrders />
        </Suspense>
      </section>
    </>
  );
};

export default OrdersPage;
