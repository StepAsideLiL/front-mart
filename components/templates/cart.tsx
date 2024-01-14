"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { parseJson, stringifyJson } from "@/lib/local-storage";
import { Badge } from "@/components/ui/badge";
import { CartData } from "@/lib/types";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateDiscountedPrice, cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cart = () => {
  const [localCart, setLocalCart] = useState<CartData>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productIds, setProductIds] = useState("");
  const [cartCount, setCartCount] = useCartStore((s) => [
    s.cartCount,
    s.setCartCount,
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Convert local storage string into array of cart objects.
      const localCartStr = localStorage.getItem("cart") || "[]";
      setLocalCart(parseJson(localCartStr));
      setCartCount(localCart.length);
    }
  }, [cartCount, localCart.length, setCartCount]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Calculate Total Price
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

      const productIds = localCart.map(({ id }) => ({ id }));
      setProductIds(JSON.stringify(productIds));
    }
  }, [localCart]);

  const removeProduct = (id: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const newProducts = localCart.filter((product) => product.id !== id);
      setLocalCart(newProducts);
      localStorage.setItem("cart", stringifyJson(newProducts));
      setCartCount(localCart.length);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex gap-0.5">
        <ShoppingCart />
        {cartCount === 0 || (
          <Badge variant={"outline"} className="py-1">
            {cartCount}
          </Badge>
        )}
      </SheetTrigger>

      <SheetContent className="space-y-2 overflow-auto lg:max-w-xl w-full">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <section className="space-y-2">
          {cartCount === 0 && (
            <h1 className="text-center text-xl text-muted-foreground">
              Cart is empty
            </h1>
          )}
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
                      <span className="text-red-500">
                        {product!.discount}% off
                      </span>
                    </>
                  )}
                </div>

                <Button
                  variant={"destructive"}
                  className="w-fit"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </Button>
              </CardHeader>
            </Card>
          ))}

          {cartCount !== 0 && (
            <div className="border-t-2 p-3 space-y-3">
              <div className="flex justify-between items-center gap-2">
                <div>
                  Total{" "}
                  <span className="text-muted-foreground text-sm">
                    {localCart.length} Item
                  </span>
                </div>

                <div>${totalPrice.toFixed(2)}</div>
              </div>

              <div>
                <Button
                  size={"lg"}
                  className="w-full"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link href={`/cart?cart=${productIds}`}>
                    Checkout + Review
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
