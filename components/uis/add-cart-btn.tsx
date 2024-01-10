"use client";

import { Button } from "@/components/ui/button";
import { parseJson, stringifyJson } from "@/lib/local-storage";

const AddCartBtn = ({
  children,
  cartInfo,
}: {
  children: React.ReactNode;
  cartInfo: {
    id: string;
    title: string;
    price: number;
    discount: number | null;
    imageId: string | null;
  };
}) => {
  const addToCart = () => {
    console.log(cartInfo);

    if (typeof window !== "undefined" && window.localStorage) {
      const localCartStr = localStorage.getItem("cart");

      if (!localCartStr) {
        localStorage.setItem("cart", stringifyJson([cartInfo]));
      } else {
        const localCart = parseJson(localCartStr);
        console.log(localCart);
        if (!localCart.some((obj) => obj.id === cartInfo.id)) {
          localCart.push(cartInfo);
          localStorage.setItem("cart", stringifyJson(localCart));
        }
      }
    }
  };

  return <Button onClick={() => addToCart()}>{children}</Button>;
};

export default AddCartBtn;
