import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import Link from "next/link";
import QuickView from "./quick-view";
import { Badge } from "@/components/ui/badge";
import { shop } from "@/lib/data/shop";

const AllProduct = async ({ currentPage }: { currentPage: number }) => {
  const products = await shop.getProductsForShopPage(currentPage);

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
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.imageSrc || ""}
                      alt={`Photo of ${product.title}`}
                      className="aspect-square object-cover"
                    />
                  </div>
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
          <h1 className="text-muted-foreground text-xl">Not Found</h1>
        </div>
      )}
    </section>
  );
};

export default AllProduct;
