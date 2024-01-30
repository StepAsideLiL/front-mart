import Title from "@/components/uis/title";
import { getProductById } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddCartBtn from "@/components/uis/add-cart-btn";
import { Badge } from "@/components/ui/badge";

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await getProductById(id);

  const cartInfo = {
    id: product!.id,
    title: product!.title,
    price: product!.price,
    discount: product!.discount,
    imageSrc: product!.imageSrc,
  };

  return (
    <section className="space-y-6">
      <section className="flex gap-2 w-full">
        <section className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product?.imageSrc || ""}
            alt={`Photo of ${product?.title}`}
          />
        </section>

        <section className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <Title variant={"xl2"}>{product?.title}</Title>
            {product?.isFeatured && (
              <Badge variant={"secondary"}>Featured</Badge>
            )}
          </div>

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

          <AddCartBtn cartInfo={cartInfo}>
            Add to Cart $
            {calculateDiscountedPrice(product!.price, product!.discount)}
          </AddCartBtn>
        </section>
      </section>

      <section className="py-2">
        {product?.description && (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Description</AccordionTrigger>
              <AccordionContent>{product?.description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </section>
    </section>
  );
};

export default ProductDetails;
