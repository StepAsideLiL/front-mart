import { Badge } from "@/components/ui/badge";
import { getDummyProductAmount } from "@/lib/data/dummy";
import React from "react";

const DummyProductAmount = async () => {
  const amount = await getDummyProductAmount();

  return (
    <Badge variant={"outline"} className="text-muted-foreground">
      Number of product: {amount}
    </Badge>
  );
};

export default DummyProductAmount;
