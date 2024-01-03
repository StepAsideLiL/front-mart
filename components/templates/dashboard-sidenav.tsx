"use client";

import { cn } from "@/lib/utils";
import { Gift, LayoutDashboard, ListOrdered, Menu, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "@/components/uis/logo";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Cn } from "@/lib/types";

const menus = [
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
    title: "Users",
    href: "/dashboard/users",
    icon: <User strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <ListOrdered strokeWidth={"1px"} width={"20px"} />,
  },
];

const DashboardSidenav = () => {
  return (
    <aside className="py-5">
      <div className="h-14 hidden md:flex items-center justify-start">
        <Logo variant="name-link" />
      </div>

      <div className="md:hidden flex items-center gap-1 h-5">
        <SidenavSheet />
        <Separator orientation="vertical" />
        <Logo variant="link" />
      </div>

      <SideMenus className="hidden md:flex" />
    </aside>
  );
};

const SideMenus = ({ className }: Cn) => {
  const pathname = usePathname();

  return (
    <nav className={cn("p-1 flex-col gap-1 flex", className)}>
      {menus.map((menu) => (
        <ActiveLink
          key={menu.href}
          href={menu.href}
          active={pathname === menu.href ? true : false}
        >
          <span>{menu.icon}</span>
          <span>{menu.title}</span>
        </ActiveLink>
      ))}
    </nav>
  );
};

const ActiveLink = ({
  children,
  href,
  active = false,
}: {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex gap-2 p-2 hover:bg-accent rounded text-sm",
        active && "bg-accent"
      )}
    >
      {children}
    </Link>
  );
};

const SidenavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={"24px"} />
      </SheetTrigger>

      <SheetContent side={"left"} className="">
        <SheetHeader className="h-14 flex items-center justify-start">
          <Logo variant="name-link" />
        </SheetHeader>

        <SideMenus />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSidenav;
