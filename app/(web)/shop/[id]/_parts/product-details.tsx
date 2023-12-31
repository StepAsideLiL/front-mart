import { Button } from "@/components/ui/button";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import Title from "@/components/uis/title";
import { getProductById } from "@/lib/data";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await getProductById(id);

  return (
    <section className="space-y-6">
      <section className="flex gap-2 w-full">
        <section className="w-full">
          <CloudinaryImage
            src={product?.imageId || ""}
            alt={`Photo of ${product?.title}`}
          />
        </section>

        <section className="w-full space-y-3">
          <Title variant={"xl2"}>{product?.title}</Title>

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

          <Button>
            Add to Cart $
            {calculateDiscountedPrice(product!.price, product!.discount)}
          </Button>
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
