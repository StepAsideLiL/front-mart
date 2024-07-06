"use client";

import { Button } from "@/components/ui/button";
import { createProductOnDatabase } from "@/lib/data/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductBtn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleAddProduct() {
    const productId = await createProductOnDatabase();
    setLoading(true);

    productId
      ? router.push(`/dashboard/products/${productId}/edit`)
      : setLoading(false);
  }

  return (
    <Button onClick={() => handleAddProduct()} disabled={loading}>
      Add Product
    </Button>
  );
}
