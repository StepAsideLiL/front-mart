import { getOrders } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const AllOrdersTable = async () => {
  const orders = await getOrders();

  return (
    <section>
      {orders.length !== 0 ? (
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
            {orders.map((order) => (
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
                <TableCell className="text-right">
                  <Button
                    size={"default"}
                    variant={"secondary"}
                    className="w-8 h-8 p-2"
                    asChild
                  >
                    <Link href={`/dashboard/orders/${order.id}`}>
                      <span className="sr-only">Edit</span>
                      <Edit size={"16px"} />
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

export default AllOrdersTable;
