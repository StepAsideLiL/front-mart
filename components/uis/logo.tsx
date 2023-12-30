import { Cn } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Store } from "lucide-react";

const Logo = ({ className }: Cn) => {
  return (
    <>
      <Store
        strokeWidth={"1px"}
        size={"40px"}
        className={cn("rotate-180", className)}
      />
    </>
  );
};

export default Logo;
