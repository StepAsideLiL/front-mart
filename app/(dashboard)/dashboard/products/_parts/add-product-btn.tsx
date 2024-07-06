"use server";

import { Button } from "@/components/ui/button";
import { product } from "@/lib/data";
import { Plus } from "lucide-react";

export default function AddProductBtn() {
  return (
    <Button
      variant={"outline"}
      onClick={() => product.createProductOnDatabase()}
    >
      <Plus size={20} />
      <span>Add Product</span>
    </Button>
  );
}
