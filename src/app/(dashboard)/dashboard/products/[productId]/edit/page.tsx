import StripeProductEditApp from "@/components/app-components/stripe-product-edit/app";
import FormSavedState from "@/components/app-components/stripe-product-edit/ui-components/form-saved-state";
import DashboardLoading from "@/components/uis/skeletons";
import Title from "@/components/uis/title";
import { product } from "@/lib/data";
import { Suspense } from "react";

export default function Page({ params }: { params: { productId: string } }) {
  return (
    <>
      <section className="flex items-center gap-2">
        <Title variant={"xl"}>Edit: {params.productId}</Title>

        <span className="text-muted-foreground">&bull;</span>

        <FormSavedState />
      </section>

      <Suspense fallback={<DashboardLoading />}>
        <EditProduct productId={params.productId} />
      </Suspense>
    </>
  );
}

async function EditProduct({ productId }: { productId: string }) {
  const productInfo = await product.getProductsInfoForEdit(productId);

  if (!productInfo) {
    return (
      <div className="flex justify-center items-center h-96">
        <h1 className="text-2xl text-muted-foreground">No Product Found</h1>
      </div>
    );
  }

  return (
    <StripeProductEditApp
      productId={productId}
      productTitle={productInfo.productTitle}
      description={productInfo.description}
      quickDescription={productInfo.quickDescription}
    />
  );
}
