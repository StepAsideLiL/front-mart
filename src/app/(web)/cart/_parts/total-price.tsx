import { Separator } from "@/components/ui/separator";
import { product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TotalPrice = async ({
  products,
}: {
  products: {
    id: string;
  }[];
}) => {
  const price = await product.calculateCartPrice(products);
  const delivaryCharge = 25;

  return (
    <div className="p-10 pt-2">
      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">Sub total</span>{" "}
        <span>${price.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">Delevary charge</span>
        <span>${delivaryCharge.toFixed(2)}</span>
      </div>

      <div className="py-2">
        <Separator orientation="horizontal" />
      </div>

      <div className="flex justify-between text-lg font-medium">
        <span>Total</span>
        <span>${(price + delivaryCharge).toFixed(2)}</span>
      </div>

      <div className="pt-3">
        <Button className="w-full" asChild>
          <Link href={`/checkout?cart=${JSON.stringify(products)}`}>
            Checkout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TotalPrice;
