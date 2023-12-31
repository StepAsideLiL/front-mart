import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { getProducts } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import Link from "next/link";
import QuickView from "./quick-view";

const AllProduct = async () => {
  const products = await getProducts();

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
      {products.map((product) => (
        <Card key={product.id}>
          <div className="relative flex justify-center group">
            <Link href={`/shop/${product.id}`}>
              <CloudinaryImage
                width="600"
                height="600"
                src={product.imageId || ""}
                sizes="100vw"
                alt={`Photo of ${product.title}`}
              />
            </Link>
            <QuickView id={product.id} />
          </div>

          <CardHeader>
            <CardTitle className="text-base">
              <Link href={`/shop/${product.id}`} className="hover:underline">
                {product.title}
              </Link>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm">
              <span
                className={cn(
                  "text-base font-medium",
                  product.discount !== 0 &&
                    "text-sm font-normal line-through text-muted-foreground"
                )}
              >
                ${product.price}
              </span>{" "}
              {product.discount !== 0 && (
                <>
                  <span className="text-base font-medium">
                    ${calculateDiscountedPrice(product.price, product.discount)}
                  </span>{" "}
                  <span className="text-red-500">{product.discount}% off</span>
                </>
              )}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllProduct;
