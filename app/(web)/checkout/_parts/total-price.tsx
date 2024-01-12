import { calculateCartPrice, getProductById } from "@/lib/data";
// import { calculateDiscountedPrice } from "@/lib/utils";

const TotalPrice = async ({
  products,
}: {
  products: {
    id: string;
  }[];
}) => {
  const price = await calculateCartPrice(products);

  return <div>{price}</div>;
};

export default TotalPrice;
