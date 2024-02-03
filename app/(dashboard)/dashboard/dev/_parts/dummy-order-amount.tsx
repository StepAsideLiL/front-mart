import { Badge } from "@/components/ui/badge";
import { getDummyOrderAmount } from "@/lib/data/dummy";
import React from "react";

const DummyOrderAmount = async () => {
  const amount = await getDummyOrderAmount();

  return (
    <Badge variant={"outline"} className="text-muted-foreground">
      Number of Order: {amount}
    </Badge>
  );
};

export default DummyOrderAmount;
