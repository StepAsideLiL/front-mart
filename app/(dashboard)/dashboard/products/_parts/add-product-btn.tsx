import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddProductBtn() {
  return (
    <Button asChild variant={"outline"} size={"icon"}>
      <Link href={"/product/add"}>
        <span className="sr-only">Add Product</span>
        <Plus />
      </Link>
    </Button>
  );
}
