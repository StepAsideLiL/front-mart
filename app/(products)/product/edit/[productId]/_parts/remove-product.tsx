"use client";

import { Button } from "@/components/ui/button";

const RemoveProduct = ({ productId }: { productId: string }) => {
  return <Button variant={"destructive"}>Remove Product {productId}</Button>;
};

export default RemoveProduct;
