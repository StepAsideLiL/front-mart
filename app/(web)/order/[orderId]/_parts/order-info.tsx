import { getOrderById } from "@/lib/data";

const OrderInfo = async ({ orderId }: { orderId: string }) => {
  const order = await getOrderById(orderId);

  return <div>{orderId}</div>;
};

export default OrderInfo;
