import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Overview = async () => {
  return (
    <section className="grid lg:grid-cols-4 grid-cols-2 gap-5">
      <Card>
        <CardHeader>
          {/* Amount of pending order */}
          <CardDescription>Order Pending</CardDescription>
          <CardTitle>{12}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {/* Total amount pending order (money) */}
          <CardDescription>Pending Amount</CardDescription>
          <CardTitle>${12}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {/* Number of product delivered in this month */}
          <CardDescription>Delivered this month</CardDescription>
          <CardTitle>{12}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {/* Total earning of this month (money) */}
          <CardDescription>Sales this month</CardDescription>
          <CardTitle>${12}</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Overview;
