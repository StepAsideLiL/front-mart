import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { getProducts } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import { Edit } from "lucide-react";
import Link from "next/link";

const AllProductsTabel = async () => {
  const products = await getProducts();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-14"></TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="w-14">
              <CloudinaryImage
                src={product!.imageId || ""}
                alt={`Photo of the ${product!.title}`}
              />
            </TableCell>
            <TableCell>{product!.title}</TableCell>
            <TableCell>
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
                    $
                    {calculateDiscountedPrice(
                      product!.price,
                      product!.discount
                    )}
                  </span>{" "}
                  <span className="text-red-500">{product!.discount}% off</span>
                </>
              )}
            </TableCell>
            <TableCell>
              <Button size={"icon"} variant={"secondary"} asChild>
                <Link href={`/product/edit/${product.id}`}>
                  <span className="sr-only">Edit</span>
                  <Edit />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllProductsTabel;
