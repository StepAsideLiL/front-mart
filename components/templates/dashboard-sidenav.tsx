"use client";

import { cn } from "@/lib/utils";
import {
  ChevronRightSquare,
  Gift,
  LayoutDashboard,
  ListOrdered,
  Menu,
  Store,
  User,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Logo from "@/components/uis/logo";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const menus1 = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Gift,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ListOrdered,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: UsersRound,
  },
  {
    title: "Dev",
    href: "/dashboard/dev",
    icon: ChevronRightSquare,
  },
];

const menus2 = [
  {
    title: "Shop",
    href: "/shop",
    icon: Store,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

const DashboardSidenav = () => {
  return (
    <aside className="p-2 h-full fixed top-0 left-0 bottom-0 right-auto w-16 border-r">
      <nav className="p-1 flex-col gap-1 flex h-full">
        <Logo variant="link" />

        <div className="md:hidden flex items-center gap-1 h-5">
          <SidenavSheet />
          <Separator orientation="vertical" />
          <Logo variant="link" />
        </div>

        <SideMenus />
      </nav>
    </aside>
  );
};

const SideMenus = () => {
  const pathname = usePathname();

  return (
    <>
      <ul>
        {menus1.map((menu) => (
          <TooltipProvider key={menu.href}>
            <Tooltip>
              <TooltipTrigger>
                <ActiveLink
                  href={menu.href}
                  active={pathname === menu.href ? true : false}
                >
                  <menu.icon strokeWidth={"1px"} width={"20px"} />
                  <span className="sr-only">{menu.title}</span>
                </ActiveLink>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-sm">
                {menu.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>

      <Separator orientation="horizontal" />

      <ul>
        {menus2.map((menu) => (
          <TooltipProvider key={menu.href}>
            <Tooltip>
              <TooltipTrigger>
                <ActiveLink
                  href={menu.href}
                  active={pathname === menu.href ? true : false}
                >
                  <menu.icon strokeWidth={"1px"} width={"20px"} />
                  <span className="sr-only">{menu.title}</span>
                </ActiveLink>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-sm">
                {menu.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>
    </>
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
    <li>
      <Link
        href={href}
        className={cn(
          "min-w-10 min-h-10 flex gap-2 p-2 hover:bg-accent rounded text-sm items-center justify-center flex-row",
          active && "bg-accent"
        )}
      >
        {children}
      </Link>
    </li>
  );
};

const SidenavSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu size={"24px"} />
      </SheetTrigger>

      <SheetContent side={"left"} className="">
        <SheetHeader className="h-14 flex items-center justify-start">
          <div onClick={() => setOpen(false)}>
            <Logo variant="name-link" />
          </div>
        </SheetHeader>

        <div onClick={() => setOpen(false)}>
          <SideMenus />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSidenav;
