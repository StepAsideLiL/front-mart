import { isProductWishlishted } from "@/lib/data/user";
import WishListBtn from "./wishlist-btn";

const WishList = async ({ productId }: { productId: string }) => {
  const isWishlisted = await isProductWishlishted(productId);

  return <WishListBtn productId={productId} isWishlisted={isWishlisted} />;
};

export default WishList;
