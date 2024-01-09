import Main from "@/components/uis/main";
import { Suspense } from "react";
import ProductDetails from "./_parts/product-details";

const ProductPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Main variant={"container"}>
      <Suspense fallback={"loading..."}>
        <ProductDetails id={id} />
      </Suspense>
    </Main>
  );
};

export default ProductPage;
