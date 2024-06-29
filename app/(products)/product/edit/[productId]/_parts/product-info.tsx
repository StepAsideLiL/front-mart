import { shop } from "@/lib/data/shop";
import EditProductForm from "./edit-product-form";

const ProductInfo = async ({ productId }: { productId: string }) => {
  const product = await shop.getProductById(productId);

  return (
    <>
      <EditProductForm product={product} />
    </>
  );
};

export default ProductInfo;
