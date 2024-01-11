"use client";

import { parseJson } from "@/lib/local-storage";
import { Badge } from "@/components/ui/badge";
import { CartData } from "@/lib/types";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localCartStr = localStorage.getItem("cart") || "[]";
      setLocalCart(parseJson(localCartStr));
      let price = 0;
      localCart.map((product) => {
        if (product!.discount === 0) {
          price = price + product!.price;
        } else {
          price =
            price + calculateDiscountedPrice(product!.price, product!.discount);
        }
      });
      setTotalPrice(price);
    }
  }, [localCart]);

  console.log("totalPrice", totalPrice);

  return (
    <section className="space-y-2">
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

      <div className="border-t-2 p-3 space-y-3">
        <div className="flex justify-between items-center gap-2">
          <div>
            Total{" "}
            <span className="text-muted-foreground text-sm">
              {localCart.length} Item
            </span>
          </div>

          <div>${totalPrice}</div>
        </div>

        <div>
          <Button size={"lg"} className="w-full" asChild>
            <Link href={``}>Checkout</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
