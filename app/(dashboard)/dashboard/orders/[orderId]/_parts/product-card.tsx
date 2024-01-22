import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { getProductById } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";

const ProductCard = async ({ productId }: { productId: string }) => {
  const product = await getProductById(productId);

  return (
    <Card className="flex">
      <CloudinaryImage
        src={product?.imageId || ""}
        alt={`Photo of ${product?.title}`}
        crop="fill"
        className="w-20"
      />

      <CardHeader className="p-2">
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
