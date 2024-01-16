import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import ProductInfo from "./_parts/product-info";
import { Suspense } from "react";

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
    </Main>
  );
};

export default EditProductPage;
