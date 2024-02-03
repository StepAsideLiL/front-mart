"use client";

import { Button } from "@/components/ui/button";
import { createDummyOrder, deleteDummyOrders } from "./actions";

const CreateDummyOrderBtns = () => {
  const handleClick = (numberOfProducts: number = 1) => {
    createDummyOrder(numberOfProducts);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => handleClick()}>Create One Order</Button>

      <Button onClick={() => handleClick(10)}>Create Ten Orders</Button>

      <Button variant={"destructive"} onClick={deleteDummyOrders}>
        Delete All Dummy Products
      </Button>
    </div>
  );
};

export default CreateDummyOrderBtns;
