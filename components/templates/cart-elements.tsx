"use client";

import { parseJson } from "@/lib/local-storage";
import { Badge } from "../ui/badge";
import { CartData } from "@/lib/types";

export const CartItemCount = () => {
  let localCart: CartData = [];
  if (typeof window !== "undefined" && window.localStorage) {
    const localCartStr = localStorage.getItem("cart") || "[]";
    localCart = parseJson(localCartStr);
  }

  return (
    <Badge variant={"outline"} className="py-1">
      {localCart.length}
    </Badge>
  );
};

export const CartContent = () => {
  return <div>CartContent</div>;
};
