import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Suspense } from "react";
import OrderInfo from "./_parts/order-info";

const OrderIdPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <Main variant={"container"}>
      <section>
        <Title variant={"xl2"}>Order Info</Title>
      </section>

      <section>OrderIdPage {params.orderId}</section>

      <section>
        <Suspense>
          <OrderInfo orderId={params.orderId} />
        </Suspense>
      </section>
    </Main>
  );
};

export default OrderIdPage;
