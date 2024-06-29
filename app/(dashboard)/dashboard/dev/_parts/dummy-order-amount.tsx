import { Badge } from "@/components/ui/badge";
import { dummy } from "@/lib/data/dummy";
import React from "react";

const DummyOrderAmount = async () => {
  const amount = await dummy.getDummyOrderAmount();

  return (
    <Badge variant={"outline"} className="text-muted-foreground">
      Number of Order: {amount}
    </Badge>
  );
};

export default DummyOrderAmount;
