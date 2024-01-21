"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import UserAvatar from "@/components/uis/user-avatar";
import { Gift, LayoutDashboard, ListOrdered } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";

const menus1 = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: <Gift strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <ListOrdered strokeWidth={"1px"} width={"20px"} />,
  },
];

const AvatarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <UserAvatar />
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <div className="flex gap-1">
            <UserAvatar />

            <div className="text-sm">
              <h1 className="font-semibold">name</h1>
              <p className="text-foreground">username</p>
            </div>
          </div>

          <SheetDescription>bio</SheetDescription>
        </SheetHeader>

        <nav className="p-1 flex-col gap-1 flex">
          {menus1.map((menu) => (
            <ActiveLink key={menu.href} href={menu.href}>
              <span>{menu.icon}</span>
              <span>{menu.title}</span>
            </ActiveLink>
          ))}

          <Separator orientation="horizontal" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const ActiveLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn("flex gap-2 p-2 hover:bg-accent rounded items-center")}
    >
      {children}
    </Link>
  );
};

export default AvatarMenu;
