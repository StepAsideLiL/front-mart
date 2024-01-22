import Title from "@/components/uis/title";
import { Suspense } from "react";
import OrderDeshboardInfo from "./_parts/order-dashboard-info";

const OrderIdPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Order Id: {params.orderId}</Title>
      </section>

      <section className="space-y-5 pb-10">
        <Suspense fallback={"loading..."}>
          <OrderDeshboardInfo orderId={params.orderId} />
        </Suspense>
      </section>
    </>
  );
};

export default OrderIdPage;
