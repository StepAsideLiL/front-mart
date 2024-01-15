import { ProductCart } from "@/lib/types";
import ProductCard from "./product-card";
import { calculateCartPrice } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

const ProductsInfo = async ({ products }: { products: ProductCart }) => {
  const price = await calculateCartPrice(products);
  const delivaryCharge = 25;

  return (
    <section className="space-y-10">
      <section className="space-y-3">
        {products.map((product) => (
          <ProductCard key={product.id} productId={product.id} />
        ))}
      </section>

      <section>
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

        <div className="flex justify-between text-2xl">
          <span>Total</span>
          <span>${(price + delivaryCharge).toFixed(2)}</span>
        </div>
      </section>
    </section>
  );
};

export default ProductsInfo;
