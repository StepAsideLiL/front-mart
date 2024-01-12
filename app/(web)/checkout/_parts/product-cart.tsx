import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { getProductById } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import RemoveBtn from "./remove-btn";

const ProductCard = async ({ id }: { id: string }) => {
  const product = await getProductById(id);

  const removeProduct = (id: string) => {
    console.log("hello");
  };

  return (
    <Card className="grid grid-cols-12 gap-2 max-w-md">
      <CloudinaryImage
        src={product?.imageId || ""}
        alt={`Photo of ${product?.title}`}
        crop="fill"
        className="col-span-4"
      />

      <CardHeader className="col-span-8 p-2">
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

        <RemoveBtn id={product!.id} />
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
