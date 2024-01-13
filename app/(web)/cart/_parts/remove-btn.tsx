"use client";

import { Button } from "@/components/ui/button";
import { parseJson, stringifyJson } from "@/lib/local-storage";
import { useCartStore } from "@/lib/store/cart-store";
import { redirect, useRouter, useSearchParams } from "next/navigation";

type ProductCart = {
  id: string;
}[];

const RemoveBtn = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const setCartCount = useCartStore((s) => s.setCartCount);
  const products: ProductCart = JSON.parse(searchParams.get("cart") || "");

  const removeProduct = () => {
    const newProducts = products.filter((product) => product.id !== id);

    if (typeof window !== "undefined" && window.localStorage) {
      const localCartStr = localStorage.getItem("cart") || "[]";
      const localCart = parseJson(localCartStr);
      const newLocalCart = localCart.filter((product) => product.id !== id);
      localStorage.setItem("cart", stringifyJson(newLocalCart));
      setCartCount(newLocalCart.length);
    }

    if (newProducts.length === 0) {
      replace("/shop");
      redirect("/shop");
    } else {
      replace(`/checkout?cart=${JSON.stringify(newProducts)}`);
      redirect(`/checkout?cart=${JSON.stringify(newProducts)}`);
    }
  };

  return (
    <Button
      variant={"destructive"}
      className="w-fit"
      onClick={() => removeProduct()}
    >
      Remove
    </Button>
  );
};

export default RemoveBtn;
