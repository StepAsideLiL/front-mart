import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AddCartBtn from "@/components/uis/add-cart-btn";
import Title from "@/components/uis/title";
import { shop } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

const QuickView = ({ id }: { id: string }) => {
  return (
    <Sheet>
      <SheetTrigger
        className="absolute bottom-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity"
        asChild
      >
        <Button className="rounded-3xl">Quick View</Button>
      </SheetTrigger>

      <SheetContent className="p-0 pt-5 space-y-2 lg:max-w-xl lg:w-[576px] w-full overflow-auto">
        <Suspense>
          <Product id={id} />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

const Product = async ({ id }: { id: string }) => {
  const product = await shop.getProductById(id);

  const cartInfo = {
    id: product!.id,
    title: product!.title,
    price: product!.price,
    discount: product!.discount,
    imageSrc: product!.imageSrc,
  };

  return (
    <div className="p-6 space-y-3">
      <div className="w-full h-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product?.imageSrc || ""}
          alt={`Photo of ${product?.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <Title variant={"xl2"}>
        <Link href={`/shop/${id}`} className="hover:underline">
          {product?.title}
        </Link>
      </Title>

      <p className="text-sm">
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
      </p>

      {product?.quickOverview && <p>{product?.quickOverview}</p>}

      <AddCartBtn cartInfo={cartInfo} className="inline-block">
        Add to Cart $
        {calculateDiscountedPrice(product!.price, product!.discount)}
      </AddCartBtn>

      <Link href={`/shop/${id}`} className="hover:underline text-sm block">
        View Full Product Details
      </Link>
    </div>
  );
};

export default QuickView;
