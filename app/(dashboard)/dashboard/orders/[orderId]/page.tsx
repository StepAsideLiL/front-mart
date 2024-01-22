import Title from "@/components/uis/title";
import { Suspense } from "react";
import OrderDeshboardInfo from "./_parts/order-dashboard-info";
import RemoveOrder from "./_parts/remove-order";

const OrderIdPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Order Id: {params.orderId}</Title>
      </section>

      <section className="space-y-5">
        <Suspense fallback={"loading..."}>
          <OrderDeshboardInfo orderId={params.orderId} />
        </Suspense>
      </section>

      <section className="p-10 border space-y-5">
        <p className="text-destructive font-medium">
          Remove order from the database
        </p>
        <RemoveOrder orderId={params.orderId} />
      </section>
    </>
  );
};

export default OrderIdPage;
