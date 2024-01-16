"use client";

import { Button } from "@/components/ui/button";
import ResponsiveDialogBox from "@/components/uis/responsive-dialog-box";
import DeleteForm from "./delete-form";

const RemoveProduct = ({ productId }: { productId: string }) => {
  return (
    <ResponsiveDialogBox
      triggerBtn={<Button variant={"destructive"}>Remove Product</Button>}
      title={`Remove ${productId}`}
      description={
        <span className="text-destructive">
          Type &#34;delete&#34; to remove this product from database
        </span>
      }
      content={<DeleteForm productId={productId} />}
    />
  );
};

export default RemoveProduct;
