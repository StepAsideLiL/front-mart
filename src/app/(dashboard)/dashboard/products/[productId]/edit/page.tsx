import DashboardLoading from "@/components/uis/skeletons";
import Title from "@/components/uis/title";
import EditProduct from "@/src/features/stripe/edit-product";
import FormSavedState from "@/src/features/stripe/ui/form-saved-state";
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
