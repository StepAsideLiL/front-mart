"use client";

import { Button } from "@/components/ui/button";
import { parseJson, stringifyJson } from "@/lib/local-storage";
import { useCartStore } from "@/lib/store/cart-store";
import { cn } from "@/lib/utils";

const AddCartBtn = ({
  children,
  cartInfo,
  className,
}: {
  children: React.ReactNode;
  cartInfo: {
    id: string;
    title: string;
    price: number;
    discount: number | null;
    imageId: string | null;
  };
  className?: string;
}) => {
  const setCartCount = useCartStore((s) => s.setCartCount);

  const addToCart = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localCartStr = localStorage.getItem("cart");

      if (!localCartStr) {
        localStorage.setItem("cart", stringifyJson([cartInfo]));
        setCartCount(1);
      } else {
        const localCart = parseJson(localCartStr);
        // console.log(localCart);
        if (!localCart.some((obj) => obj.id === cartInfo.id)) {
          localCart.push(cartInfo);
          localStorage.setItem("cart", stringifyJson(localCart));
          setCartCount(localCart.length);
        }
      }
    }
  };

  return (
    <Button onClick={() => addToCart()} className={cn(className)}>
      {children}
    </Button>
  );
};

export default AddCartBtn;
