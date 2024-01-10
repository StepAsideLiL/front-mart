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
  };

  return <Button onClick={() => addToCart()}>{children}</Button>;
};

export default AddCartBtn;
