import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const titleVariants = cva("", {
  variants: {
    variant: {
      default: "font-medium text-xl",
      xl: "font-medium text-xl",
      xl2: "font-medium text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {}

const Title: React.FC<TitleProps> = ({ variant, className, ...props }) => {
  return (
    <h1 className={cn(titleVariants({ variant, className }))} {...props} />
  );
};

export default Title;
