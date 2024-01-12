"use client";

import { Button } from "@/components/ui/button";
import { redirect, useRouter, useSearchParams } from "next/navigation";

type ProductCart = {
  id: string;
}[];

const RemoveBtn = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const products: ProductCart = JSON.parse(searchParams.get("cart") || "");

  const removeProduct = () => {
    console.log(id);
    console.log(searchParams.get("cart"));

    const newProducts = products.filter((product) => product.id !== id);
    console.log(newProducts);

    replace(`/checkout?cart=${JSON.stringify(newProducts)}`);
    redirect(`/checkout?cart=${JSON.stringify(newProducts)}`);
  };

  return (
    <Button
      variant={"outline"}
      className="w-fit"
      onClick={() => removeProduct()}
    >
      Remove
    </Button>
  );
};

export default RemoveBtn;
