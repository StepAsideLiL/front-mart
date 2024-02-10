import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUsersOrders } from "@/lib/data/user";
import { format } from "date-fns";
import { BookUser } from "lucide-react";
import Link from "next/link";

const UserOrderList = async () => {
  const orders = await getUsersOrders();

  return (
    <section>
      {orders?.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  {format(order!.createdAt.toISOString(), "dd MMMM, yyyy")}
                </TableCell>
                <TableCell>
                  <Badge variant={"secondary"}>
                    {order!.orderStatus.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-medium">
                    ${(order.price + order.delivaryCharge).toFixed(2)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant={"ghost"} size={"icon"} asChild>
                    <Link href={`/order/${order.id}`}>
                      <BookUser />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="p-10">
          <h1 className="text-muted-foreground text-xl text-center">
            No Order Placed
          </h1>
        </div>
      )}
    </section>
  );
};

export default UserOrderList;
