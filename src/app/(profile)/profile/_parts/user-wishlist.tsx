import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { user } from "@/lib/data";
import Link from "next/link";

const UserWishlist = async () => {
  const wishlist = await user.getUserWishlist();

  return (
    <section className="space-y-2">
      {wishlist?.length !== 0 && wishlist !== undefined && wishlist !== null ? (
        <>
          <h1>
            Total wish list products:{" "}
            <Badge variant={"secondary"}>{wishlist?.length}</Badge>
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/wishlist`}>View wish list</Link>
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-muted-foreground">
            You have not saved any wish list yet
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/shop`}>Add to wish list</Link>
          </Button>
        </>
      )}
    </section>
  );
};

export default UserWishlist;
