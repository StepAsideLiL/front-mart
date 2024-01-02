"use client";

import { cn } from "@/lib/utils";
import { Gift, LayoutDashboard, ListOrdered, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
  const pathname = usePathname();

  return (
    <aside className="p-1 flex flex-col gap-1">
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
    </aside>
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

export default DashboardSidenav;
