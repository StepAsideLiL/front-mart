import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { getProductsForShopPage } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import Link from "next/link";
import QuickView from "./quick-view";
import { Badge } from "@/components/ui/badge";

const AllProduct = async () => {
  const products = await getProductsForShopPage();

  return (
    <section>
      {products.length !== 0 ? (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
          {products.map((product) => (
            <Card key={product.id}>
              <div className="relative flex justify-center group">
                {product.isFeatured && (
                  <Badge
                    variant={"secondary"}
                    className="absolute top-2 left-2"
                  >
                    Featured
                  </Badge>
                )}
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
                  <Link
                    href={`/shop/${product.id}`}
                    className="hover:underline"
                  >
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
                        $
                        {calculateDiscountedPrice(
                          product.price,
                          product.discount
                        )}
                      </span>{" "}
                      <span className="text-red-500">
                        {product.discount}% off
                      </span>
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="p-10 text-center">
          <h1 className="text-muted text-xl">Shop Is Empty Current</h1>
        </div>
      )}
    </section>
  );
};

export default AllProduct;
