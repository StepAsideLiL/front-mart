import { Button } from "@/components/ui/button";
import { getUserAddress } from "@/lib/data/user";
import Link from "next/link";

const UserAddress = async () => {
  const address = await getUserAddress();

  return (
    <section>
      {address ? (
        <>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/address`}>Edit your address</Link>
          </Button>
        </>
      ) : (
        <div className="space-y-2">
          <h1 className="text-muted-foreground">
            You have not set any address
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/address`}>Add your address</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default UserAddress;
