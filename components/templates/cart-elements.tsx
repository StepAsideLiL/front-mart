"use client";

import { parseJson } from "@/lib/local-storage";
import { Badge } from "../ui/badge";
import { CartData } from "@/lib/types";
import CloudinaryImage from "../uis/cloudinary-image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";

export const CartItemCount = () => {
  const [localCart, setLocalCart] = useState<CartData>([]);
  const [cartCount, setCartCount] = useCartStore((s) => [
    s.cartCount,
    s.setCartCount,
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localCartStr = localStorage.getItem("cart") || "[]";
      setLocalCart(parseJson(localCartStr));
      setCartCount(localCart.length);
    }
  }, [localCart.length, setCartCount]);

  if (cartCount === 0) {
    return null;
  }

  return (
    <Badge variant={"outline"} className="py-1">
      {cartCount}
    </Badge>
  );
};

export const CartContent = () => {
  const [localCart, setLocalCart] = useState<CartData>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localCartStr = localStorage.getItem("cart") || "[]";
      setLocalCart(parseJson(localCartStr));
    }
  }, []);

  return (
    <div className="space-y-2">
      {localCart.map((product) => (
        <Card key={product.id} className="grid grid-cols-12 gap-2">
          <CloudinaryImage
            src={product.imageId || ""}
            alt={`Photo of ${product.title}`}
            crop="fill"
            className="col-span-4"
          />

          <CardHeader className="col-span-8 p-0">
            <CardTitle className="text-lg">{product.title}</CardTitle>
            <div>
              <span
                className={cn(
                  "text-base font-medium",
                  product!.discount !== 0 &&
                    "text-sm font-normal line-through text-muted-foreground"
                )}
              >
                ${product?.price}
              </span>{" "}
              {product!.discount !== 0 && (
                <>
                  <span className="text-base font-medium">
                    $
                    {calculateDiscountedPrice(
                      product!.price,
                      product!.discount
                    )}
                  </span>{" "}
                  <span className="text-red-500">{product!.discount}% off</span>
                </>
              )}
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
