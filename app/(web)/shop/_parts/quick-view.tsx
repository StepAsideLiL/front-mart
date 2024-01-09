import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const QuickView = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="absolute bottom-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity"
        asChild
      >
        <Button className="rounded-3xl">Quick View</Button>
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default QuickView;
