import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import ProductInfo from "./_parts/product-info";
import { Suspense } from "react";
import RemoveProduct from "./_parts/remove-product";

const EditProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <Main variant={"xl"}>
      <section>
        <Title variant={"xl2"}>Edit Product: {params.productId}</Title>
      </section>

      <section>
        <Suspense fallback={"loading..."}>
          <ProductInfo productId={params.productId} />
        </Suspense>
      </section>

      <section className="p-10 border space-y-10">
        <p className="text-destructive font-medium">
          Remove product from the database
        </p>
        <RemoveProduct productId={params.productId} />
      </section>
    </Main>
  );
};

export default EditProductPage;
