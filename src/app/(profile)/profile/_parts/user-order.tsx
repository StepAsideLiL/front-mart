import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { user } from "@/lib/data";
import Link from "next/link";

const UserOrder = async () => {
  const orders = await user.getUsersOrders();

  return (
    <section className="space-y-2">
      {orders?.length !== 0 && orders !== undefined && orders !== null ? (
        <>
          <h1>
            Total orders: <Badge variant={"secondary"}>{orders?.length}</Badge>
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/orders`}>View orders</Link>
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-muted-foreground">
            You have not placed any orders yet
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/shop`}>Buy something</Link>
          </Button>
        </>
      )}
    </section>
  );
};

export default UserOrder;
