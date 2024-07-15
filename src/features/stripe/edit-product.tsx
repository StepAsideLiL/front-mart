import GeneralInfoForm from "./forms/general-info";
import { product } from "@/lib/data";
import { ProductVariantSchema } from "./forms/product-variant-schema";
import {
  EditProductTabs,
  EditProductTabsContent,
  EditProductTabsList,
  EditProductTabsTrigger,
} from "./ui/edit-product-tabs";

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
      <EditProductTabs defaultValue="general-info" className="space-y-2">
        <EditProductTabsList>
          <EditProductTabsTrigger value="general-info">
            General Info
          </EditProductTabsTrigger>
          <EditProductTabsTrigger value="variant-schema">
            Variant Schema
          </EditProductTabsTrigger>
        </EditProductTabsList>

        <EditProductTabsContent value="general-info">
          <GeneralInfoForm
            productId={productId}
            productTitle={productInfo.productTitle}
            description={productInfo.description}
            quickDescription={productInfo.quickDescription}
          />
        </EditProductTabsContent>

        <EditProductTabsContent value="variant-schema">
          <ProductVariantSchema
            productId={productId}
            variantSchema={JSON.parse(productInfo.variantSchema)}
          />
        </EditProductTabsContent>
      </EditProductTabs>
    </section>
  );
}
