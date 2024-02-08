import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getUsersOrders } from "@/lib/data/user";
import Link from "next/link";

const UserOrder = async () => {
  const orders = await getUsersOrders();

  return (
    <section className="space-y-2">
      {orders?.length !== 0 ? (
        <>
          <h1>
            Total orders: <Badge variant={"secondary"}>{orders?.length}</Badge>
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/wishlist`}>View wish list</Link>
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
