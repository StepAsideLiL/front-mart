import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const mainVariants = cva("min-h-screen space-y-5", {
  variants: {
    variant: {
      default: "",
      container: "container mx-auto",
      md: "container max-w-3xl mx-auto",
      xl: "container max-w-7xl mx-auto",
      dashboard: "md:py-5 p-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface MainProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof mainVariants> {}

const Main: React.FC<MainProps> = ({ variant, className, ...props }) => {
  return (
    <main className={cn(mainVariants({ variant, className }))} {...props} />
  );
};

export default Main;
