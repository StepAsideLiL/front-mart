"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkPlus } from "lucide-react";
import { addToWishlist } from "./actions";

const WishListBtn = ({
  productId,
  isWishlisted,
}: {
  productId: string;
  isWishlisted: boolean;
}) => {
  function handleClick() {
    addToWishlist(productId);
  }

  return (
    <Button variant={"ghost"} size={"icon"} onClick={() => handleClick()}>
      {isWishlisted ? (
        <>
          <span className="sr-only">Remove from wishlist</span>
          <BookmarkPlus />
        </>
      ) : (
        <>
          <span className="sr-only">Add to wishlist</span>
          <Bookmark />
        </>
      )}
    </Button>
  );
};

export default WishListBtn;
