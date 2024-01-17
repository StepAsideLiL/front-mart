import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
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
          <TableHead>Discount</TableHead>
          <TableHead>Price (after discount)</TableHead>
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
            <TableCell>
              <Link href={`/shop/${product!.id}`} className="hover:underline">
                {product!.title}
              </Link>
            </TableCell>
            <TableCell>${product!.price}</TableCell>
            <TableCell>{product!.discount}%</TableCell>
            <TableCell>
              ${calculateDiscountedPrice(product!.price, product!.discount)}
            </TableCell>
            <TableCell className="text-right">
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
