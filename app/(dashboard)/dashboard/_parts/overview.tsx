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
          <CardDescription>Order Pending</CardDescription>
          <CardTitle>{12}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Total Sales this month</CardDescription>
          <CardTitle>{12}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Total Sold</CardDescription>
          <CardTitle>{12}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Total User</CardDescription>
          <CardTitle>{12}</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Overview;
