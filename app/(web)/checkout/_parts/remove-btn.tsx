"use client";

import { Button } from "@/components/ui/button";

const RemoveBtn = ({ id }: { id: string }) => {
  const removeProduct = () => {
    console.log(id);
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
