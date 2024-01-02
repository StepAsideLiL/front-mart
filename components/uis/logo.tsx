import { dotGothic16 } from "@/lib/fonts";
import { Cn } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Store } from "lucide-react";
import Link from "next/link";

const Logo = ({
  variant = "",
}: {
  variant?: "" | "link" | "name" | "name-link";
}) => {
  if (variant === "link") {
    return (
      <Link href={"/"}>
        <LogoIcon />
      </Link>
    );
  }

  if (variant === "name") {
    return (
      <div className="flex items-center gap-1">
        <LogoIcon />
        <Sitename />
      </div>
    );
  }

  if (variant === "name-link") {
    return (
      <Link href={"/"} className="flex items-center gap-1">
        <LogoIcon />
        <Sitename />
      </Link>
    );
  }

  return <LogoIcon />;
};

const LogoIcon = () => {
  return <Store strokeWidth={"1px"} size={"40px"} className="rotate-180" />;
};

const Sitename = () => {
  return (
    <h1 className={cn("text-4xl font-semibold", dotGothic16.className)}>
      Front Mart
    </h1>
  );
};

export default Logo;
