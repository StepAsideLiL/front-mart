import { Separator } from "@/components/ui/separator";
import { delivaryCharge } from "@/lib/config";

const TotalPrice = async ({ price }: { price: number }) => {
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
    </div>
  );
};

export default TotalPrice;
