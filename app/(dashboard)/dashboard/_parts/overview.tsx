import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { order } from "@/lib/data/order";

const Overview = async () => {
  const date = new Date();

  const orderPending = await order.getOrderPending();
  const orderPendingPrice = await order.getOrderPendingPrice();
  const delivered = await order.getDeliveryThisMonth(
    date.getUTCMonth(),
    date.getUTCFullYear()
  );
  const deliveredPrice = await order.getDeliveryPriceThisMonth(
    date.getUTCMonth(),
    date.getUTCFullYear()
  );

  return (
    <section className="grid lg:grid-cols-4 grid-cols-2 gap-5">
      <Card>
        <CardHeader>
          {/* Amount of pending order */}
          <CardDescription>Order Pending</CardDescription>
          <CardTitle>{orderPending}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {/* Total price pending order (money) */}
          <CardDescription>Pending Amount</CardDescription>
          <CardTitle>${orderPendingPrice.toFixed(2)}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {/* Number of product delivered in this month */}
          <CardDescription>Delivered this month</CardDescription>
          <CardTitle>{delivered}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {/* Total price delivery of this month (money) */}
          <CardDescription>Sales this month</CardDescription>
          <CardTitle>${deliveredPrice.toFixed(2)}</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Overview;
