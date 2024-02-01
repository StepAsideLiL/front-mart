"use client";

import { Button } from "@/components/ui/button";
import { createDummyProduct } from "./actions";

const CreateDummyProductBtns = () => {
  const handleClick = (numberOfProducts: number = 1) => {
    createDummyProduct(numberOfProducts);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => handleClick()}>Create One Product</Button>

      <Button onClick={() => handleClick(10)}>Create Ten Product</Button>
    </div>
  );
};

export default CreateDummyProductBtns;
