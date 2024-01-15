import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { calculateCartPrice, getOrders } from "@/lib/data";
import { ProductCart } from "@/lib/types";
import { format } from "date-fns";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";

const AllOrders = async () => {
  const orders = await getOrders();

  return (
    <div className="space-y-3">
      {orders.map(async (order) => {
        const totalPrice = await calculateCartPrice(
          order!.products as ProductCart
        );

        return (
          <Card key={order.id} className="grid grid-cols-12">
            <CardHeader className="lg:col-span-5 col-span-6">
              <CardTitle className="text-base">
                <span className="text-muted-foreground">Placed at</span>{" "}
                {format(order!.createdAt.toISOString(), "dd MMMM, yyyy")}
              </CardTitle>

              <CardDescription>{order.orderStatus}</CardDescription>
            </CardHeader>

            <CardContent className="pt-6 lg:col-span-5 col-span-6">
              <span className="text-muted-foreground">Total Amount</span> $
              {(totalPrice + 25).toFixed(2)}
            </CardContent>

            <div className="lg:col-span-2 col-span-12 lg:p-6 pb-6 px-6 flex gap-2 lg:justify-end justify-start">
              <Button size={"icon"} variant={"secondary"} asChild>
                <Link href={`/deshboard/orders/${order!.id}`}>
                  <span className="sr-only">Edit</span>
                  <Edit />
                </Link>
              </Button>

              <Button size={"icon"} variant={"destructive"}>
                <span className="sr-only">Delete</span>
                <Trash />
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AllOrders;
