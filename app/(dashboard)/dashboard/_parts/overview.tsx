import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getDeliveryPriceThisMonth,
  getDeliveryThisMonth,
  getOrderPending,
  getOrderPendingPrice,
} from "@/lib/data/order";

const Overview = async () => {
  const orderPending = await getOrderPending();
  const orderPendingPrice = await getOrderPendingPrice();
  const delivered = await getDeliveryThisMonth();
  const deliveredPrice = await getDeliveryPriceThisMonth();

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
          <CardTitle>${orderPendingPrice}</CardTitle>
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
          <CardTitle>${deliveredPrice}</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Overview;
