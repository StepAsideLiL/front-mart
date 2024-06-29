import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { shop } from "@/lib/data/shop";
import { calculateDiscountedPrice, cn } from "@/lib/utils";

const ProductCard = async ({ productId }: { productId: string }) => {
  const product = await shop.getProductById(productId);

  return (
    <Card className="flex items-center gap-3">
      <div className="w-32 h-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product!.imageSrc || ""}
          alt={`Photo of ${product!.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader className="">
        <CardTitle className="text-lg">{product?.title}</CardTitle>
        <div>
          <span
            className={cn(
              "text-base font-medium",
              product!.discount !== 0 &&
                "text-sm font-normal line-through text-muted-foreground"
            )}
          >
            ${product?.price}
          </span>{" "}
          {product!.discount !== 0 && (
            <>
              <span className="text-base font-medium">
                ${calculateDiscountedPrice(product!.price, product!.discount)}
              </span>{" "}
              <span className="text-red-500">{product!.discount}% off</span>
            </>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
