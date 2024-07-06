"use client";

import { Button } from "@/components/ui/button";
import { createProductOnDatabase } from "@/lib/data/actions";

export default function AddProductBtn() {
  async function handleAddProduct() {
    await createProductOnDatabase();
  }

  return (
    <Button onClick={() => handleAddProduct()}>
      <span>Add Product</span>
    </Button>
  );
}
