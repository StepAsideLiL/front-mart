import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddProductBtn() {
  return (
    <Button asChild variant={"outline"}>
      <Link href={"/product/add"} className="flex items-center gap-1">
        <Plus size={20} />
        <span>Add Product</span>
      </Link>
    </Button>
  );
}
