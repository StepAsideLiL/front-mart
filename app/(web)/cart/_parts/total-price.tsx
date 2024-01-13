import { Separator } from "@/components/ui/separator";
import { calculateCartPrice } from "@/lib/data";

const TotalPrice = async ({
  products,
}: {
  products: {
    id: string;
  }[];
}) => {
  const price = await calculateCartPrice(products);
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

      <div className="flex justify-between text-lg">
        <span>Total</span>
        <span>${(price + delivaryCharge).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
