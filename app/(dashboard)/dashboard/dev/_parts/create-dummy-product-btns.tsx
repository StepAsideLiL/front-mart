"use client";

import { Button } from "@/components/ui/button";
import { createDummyProducts, deleteDummyProducts } from "./actions";

const CreateDummyProductBtns = () => {
  const handleClick = (numberOfProducts: number = 1) => {
    createDummyProducts(numberOfProducts);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => handleClick()}>Create One Product</Button>

      <Button onClick={() => handleClick(10)}>Create Ten Products</Button>

      <Button variant={"destructive"} onClick={deleteDummyProducts}>
        Delete All Dummy Products
      </Button>
    </div>
  );
};

export default CreateDummyProductBtns;
