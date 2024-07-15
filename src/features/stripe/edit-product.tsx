import { Separator } from "@/components/ui/separator";
import GeneralInfoForm from "./forms/general-info";
import { product } from "@/lib/data";
import { ProductVariantSchema } from "./forms/product-variant-schema";

export default async function EditProduct({
  productId,
}: {
  productId: string;
}) {
  const productInfo = await product.getProductsInfoForEdit(productId);

  if (!productInfo) {
    return (
      <div className="flex justify-center items-center h-96">
        <h1 className="text-2xl text-muted-foreground">No Product Found</h1>
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <GeneralInfoForm
        productId={productId}
        productTitle={productInfo.productTitle}
        description={productInfo.description}
        quickDescription={productInfo.quickDescription}
      />

      <Separator />

      <ProductVariantSchema
        productId={productId}
        variantSchema={JSON.parse(productInfo.variantSchema)}
      />
    </section>
  );
}
