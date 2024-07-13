"use client";

import { CheckCheck, LoaderCircle } from "lucide-react";
import { useProductEditStore } from "../store";

export default function FormSavedState() {
  const [updateProductInfo] = useProductEditStore((s) => [s.updateProductInfo]);

  const isSaving = orCondition(updateProductInfo);

  return (
    <div className="text-muted-foreground flex items-center gap-1">
      <span>
        {isSaving ? (
          <LoaderCircle size={20} className="animate-spin" />
        ) : (
          <CheckCheck size={20} />
        )}
      </span>

      <span>{isSaving ? "Saving..." : "Saved"}</span>
    </div>
  );
}

function orCondition(...args: any[]): boolean {
  return args.some((arg) => Boolean(arg));
}
