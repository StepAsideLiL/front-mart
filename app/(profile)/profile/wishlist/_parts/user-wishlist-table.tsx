import { getUserWishlist } from "@/lib/data/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProductById } from "@/lib/data/shop";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import Link from "next/link";
import { Check } from "lucide-react";

const UserWishlistTable = async () => {
  const wishlist = await getUserWishlist();

  return (
    <section>
      {wishlist && wishlist.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14"></TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="">Discount (%)</TableHead>
              <TableHead className="text-right">Discount Price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {wishlist.map((list) => (
              <Row key={list} productId={list} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="p-10">
          <h1 className="text-muted-foreground text-xl text-center">
            No wishlist
          </h1>
        </div>
      )}
    </section>
  );
};

const Row = async ({ productId }: { productId: string }) => {
  const product = await getProductById(productId);

  return (
    <TableRow key={product!.id}>
      <TableCell className="w-14 p-1">
        <Link href={`/shop/${product!.id}`} className="hover:underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product!.imageSrc || ""}
            alt={`Photo of ${product!.title}`}
            className="aspect-square object-cover"
          />
        </Link>
      </TableCell>
      <TableCell>
        <Link href={`/shop/${product!.id}`} className="hover:underline">
          {product!.title}
        </Link>
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
            ${calculateDiscountedPrice(product!.price, product!.discount)}
          </span>
        )}
      </TableCell>
    </TableRow>
  );
};

export default UserWishlistTable;
