import { user } from "@/lib/data";
import WishListBtn from "./wishlist-btn";

const WishList = async ({ productId }: { productId: string }) => {
  const isWishlisted = await user.isProductWishlishted(productId);

  return <WishListBtn productId={productId} isWishlisted={isWishlisted} />;
};

export default WishList;
