import { Button } from "@/components/ui/button";
import { getUserAddress } from "@/lib/data/user";
import Link from "next/link";

const UserAddress = async () => {
  const address = await getUserAddress();

  return (
    <section className="space-y-2">
      {address &&
      address.address !== "" &&
      address.zipCode !== "" &&
      address.city !== "" &&
      address.country !== "" ? (
        <>
          <div>
            <OrderInfoField
              field={"Delivary address"}
              value={address?.address}
            />
            <OrderInfoField field={"Zip code"} value={address?.zipCode} />
            <OrderInfoField field={"City"} value={address?.city} />
            <OrderInfoField
              field={"State or Country"}
              value={address?.country}
            />
          </div>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/address`}>Edit your address</Link>
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-muted-foreground">
            You have not set any address
          </h1>
          <Button variant={"secondary"} asChild>
            <Link href={`/profile/address`}>Add your address</Link>
          </Button>
        </>
      )}
    </section>
  );
};

const OrderInfoField = ({
  field,
  value,
}: {
  field?: string;
  value?: string;
}) => {
  return (
    <p className="grid grid-cols-12 gap-1 p-1 px-2">
      <span className="col-span-4 text-muted-foreground">{field}</span>{" "}
      <span className="text-foreground col-span-8">{value}</span>
    </p>
  );
};

export default UserAddress;
