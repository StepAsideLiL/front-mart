import { CdCn } from "@/lib/types";
import { cn } from "@/lib/utils";

export const DashboardTitle = ({ children, className }: CdCn) => {
  return <h1 className={cn("font-medium text-xl", className)}>{children}</h1>;
};
