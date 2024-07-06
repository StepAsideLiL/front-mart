"use server";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AddProductBtn() {
  return (
    <Button variant={"outline"}>
      <Plus size={20} />
      <span>Add Product</span>
    </Button>
  );
}
