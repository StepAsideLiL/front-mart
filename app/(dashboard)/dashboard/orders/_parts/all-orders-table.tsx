import { calculateCartPrice, getOrders } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductCart } from "@/lib/types";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";

const AllOrdersTable = async () => {
  const orders = await getOrders();

  return (
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
        {orders.map(async (order) => {
          const totalPrice = await calculateCartPrice(
            order!.products as ProductCart
          );

          return (
            <TableRow key={order.id}>
              <TableCell>
                {format(order!.createdAt.toISOString(), "dd MMMM, yyyy")}
              </TableCell>
              <TableCell>{order!.orderStatus}</TableCell>
              <TableCell>${(totalPrice + 25).toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Button size={"icon"} variant={"secondary"} asChild>
                  <Link href={`/dashboard/orders/${order!.id}`}>
                    <span className="sr-only">Edit</span>
                    <Edit />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AllOrdersTable;
