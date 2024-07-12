import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { product } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import { Check, Edit } from "lucide-react";
import Link from "next/link";
import AddProductBtn from "./add-product-btn";

const AllProductsTabel = async ({ currentPage }: { currentPage: number }) => {
  const products = await product.getProducts(currentPage);

  return (
    <>
      {products.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14"></TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right w-36">Price</TableHead>
              <TableHead className="w-36">Discount (%)</TableHead>
              <TableHead className="text-right w-36">Discount Price</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="w-14 p-1">
                  <Link
                    href={`/shop/${product!.id}`}
                    className="hover:underline"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.imageSrc || ""}
                      alt={`Photo of ${product.title}`}
                      className="aspect-square object-cover"
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href={`/shop/${product!.id}`}
                    className="hover:underline"
                  >
                    {product!.title}
                  </Link>
                </TableCell>
                <TableCell>
                  {product.isFeatured && (
                    <Check size={"16px"} strokeWidth={"4"} />
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={cn(
                      "text-foreground font-semibold",
                      product!.discount !== 0 &&
                        "text-muted-foreground font-normal line-through"
                    )}
                  >
                    ${product!.price}
                  </span>
                </TableCell>
                <TableCell>
                  {product!.discount === 0 || (
                    <span className="text-green-500">{product!.discount}%</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {product!.discount === 0 || (
                    <span className="font-semibold">
                      $
                      {calculateDiscountedPrice(
                        product!.price,
                        product!.discount
                      )}
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size={"default"}
                    variant={"secondary"}
                    className="w-8 h-8 p-2"
                    asChild
                  >
                    <Link href={`/product/edit/${product.id}`}>
                      <span className="sr-only">Edit</span>
                      <Edit size={"16px"} />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex items-center justify-center h-96">
          <AddProductBtn />
        </div>
      )}
    </>
  );
};

export default AllProductsTabel;
