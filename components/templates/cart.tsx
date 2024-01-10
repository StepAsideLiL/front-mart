import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { CartItemCount, CartContent } from "./cart-elements";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex gap-0.5">
        <ShoppingCart />
        <CartItemCount />
      </SheetTrigger>

      <SheetContent className="space-y-2 overflow-auto lg:max-w-xl w-full">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <CartContent />
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
