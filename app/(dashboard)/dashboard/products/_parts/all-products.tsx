import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProducts } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";

const AllProducts = async () => {
  const products = await getProducts();

  return (
    <ul className="space-y-3">
      {products.map((product) => (
        <Card key={product.id} className="grid grid-cols-12">
          <CardHeader className="lg:col-span-6 col-span-7">
            <CardTitle className="text-xl lg:text-2xl">
              {product.title}
            </CardTitle>
            {product.quickOverview !== "" && (
              <CardDescription>{product.quickOverview}</CardDescription>
            )}
          </CardHeader>

          <CardContent className="lg:col-span-4 col-span-5 flex gap-2 p-0 py-6">
            <div>
              <h1 className={cn(product.discount !== 0 && "line-through")}>
                ${product.price}
              </h1>
              {product.discount !== 0 && <p>{product.discount}%</p>}
            </div>

            {product.discount !== 0 && (
              <div>
                ${calculateDiscountedPrice(product.price, product.discount)}
              </div>
            )}
          </CardContent>

          <div className="lg:col-span-2 col-span-12 lg:p-6 pb-6 px-6 flex gap-2 lg:justify-end justify-start">
            <Button size={"icon"} variant={"secondary"} asChild>
              <Link href={`/product/edit/${product.id}`}>
                <span className="sr-only">Edit</span>
                <Edit />
              </Link>
            </Button>

            <Button size={"icon"} variant={"destructive"}>
              <span className="sr-only">Delete</span>
              <Trash />
            </Button>
          </div>
        </Card>
      ))}
    </ul>
  );
};

export default AllProducts;
