"use client";

import { Button } from "@/components/ui/button";
import ResponsiveDialogBox from "@/components/uis/responsive-dialog-box";
import DeleteOrderForm from "./delete-order-form";

const RemoveOrder = ({ orderId }: { orderId: string }) => {
  return (
    <ResponsiveDialogBox
      triggerBtn={<Button variant={"destructive"}>Remove Order</Button>}
      title={`Remove ${orderId}`}
      description={
        <span className="text-destructive">
          Type &#34;delete&#34; to remove this order from database
        </span>
      }
      content={<DeleteOrderForm orderId={orderId} />}
    />
  );
};

export default RemoveOrder;
